import React, { useEffect } from "react";
import { usePalette } from "color-thief-react";
import { useSelector } from "react-redux";
import Loader from "./loader/Loader";
import { useDispatch } from "react-redux";
import { setPalette } from "../store/slice/paletteSlice";
import { Toaster, toast } from "react-hot-toast";

const ColorPalette = () => {
    const dispatch = useDispatch();
    const selectedImage = useSelector((state) => state.image.selectedImage);

    let crossOrigin = "Anonymous";
    let quality = 10;
    const { data, loading, error } = usePalette(selectedImage, 6, "hex", {
        crossOrigin,
        quality,
    });

    useEffect(() => {
        if (error && selectedImage!==null) {
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
        <div className=" flex justify-center items-center">
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
                                onClick={() => handleColorClick(color)}
                                key={index}
                                className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer  rounded-md flex items-end justify-center lg:max-3xl:w-40 lg:max-3xl:h-40 h-32 w-32 "
                                style={{ backgroundColor: color }}
                            >
                                <p className="p-1 font-semibold opacity-75 text-center backdrop-blur-md bg-textBg w-full text-black">
                                    {color}
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
