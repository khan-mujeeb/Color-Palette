import React, { useEffect } from "react";
import { usePalette } from "color-thief-react";
import { useSelector } from "react-redux";
import Loader from "./loader/Loader";
import { useDispatch } from "react-redux";
import { setPalette } from "../store/slice/paletteSlice";
import { Toaster, toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { addToFav } from "../firebase/firebaseUtils";
import { FaCopy } from "react-icons/fa6";

const ColorPalette = () => {
    const dispatch = useDispatch();
    const selectedImage = useSelector((state) => state.image.selectedImage);
    const [favColors, setFavColors] = React.useState({});

    let crossOrigin = "Anonymous";
    let quality = 10;

    const { data, loading, error } = usePalette(selectedImage, 6, "hex", {
        crossOrigin,
        quality,
    });

    const favClickHandler = (name, color) => {
        toast("Added to favorites", {
            icon: "❤️",
        });
        setFavColors((prevColors) => ({
            ...prevColors,
            [color]: !prevColors[color],
        }));
        addToFav(color, name);
    };

    useEffect(() => {
        if (error && selectedImage !== null) {
            toast.error("Something went wrong");
        }

        if (data) {
            dispatch(setPalette(data));
        }
    }, [error, data]);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    return (
        <div className="flex justify-center items-center">
            <div>
                <Toaster />
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="lg:max-3xl:flex lg:max-3xl:gap-2 gap-y-4 gap-x-3 justify-center grid grid-cols-2 sm:grid-cols-3 ">
                    {data?.map((color, index) => {
                        return (
                            <div
                                key={index}
                                className="hover:shadow-xl transition-all hover:scale-105   rounded-md flex items-end justify-center lg:max-3xl:w-40 lg:max-3xl:h-40 h-32 w-32 relative "
                                style={{ backgroundColor: color }}
                            >
                                {favColors[color] ? (
                                    <FaHeart
                                        className="cursor-pointer absolute z-50 top-2 right-2"
                                        onClick={() => {
                                            favClickHandler(color, color);
                                        }}
                                    />
                                ) : (
                                    <FaRegHeart
                                        className="cursor-pointer absolute z-50 top-2 right-2"
                                        onClick={() => {
                                            favClickHandler(color, color);
                                        }}
                                    />
                                )}

                                <p
                                    className="cursor-pointer flex justify-between p-2 items-center font-semibold opacity-75 text-center backdrop-blur-md bg-textBg w-full text-black"
                                    onClick={() => handleColorClick(color)}
                                >
                                    <FaCopy /> {color}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ColorPalette;
