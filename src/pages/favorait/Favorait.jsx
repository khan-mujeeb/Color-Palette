import React, { useEffect, useState } from "react";
import { getFavColors } from "../../firebase/firebaseUtils";
import ColorBox from "../../components/colorBox/ColorBox.jsx";
import { toast, Toaster } from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import Loader from "../../components/loader/Loader.jsx";

const Favorait = () => {
    const [favColors, setFavColors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavColors = async () => {
            const colors = await getFavColors();
            setFavColors(colors);
            setLoading(false);
        };

        fetchFavColors();
    }, []);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    return (
        <div className=" flex items-center justify-center mt-10 w-full px-10">
            <div>
                <Toaster />
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className=" justify-center gap-x-5 gap-y-10 flex flex-wrap items-center jus">
                    {favColors.map((color) => (
                        <div
                            onClick={() => handleColorClick(color.code)}
                            className="relative flex justify-center items-center gap- flex-col gap-5  group"
                            key={color.id}
                        >
                            <div
                                className="w-32 cursor-pointer lg:max-2xl:h-80 sm:h-56 h-32"
                                style={{ backgroundColor: color.code }}
                            >
                                <RiDeleteBin5Line
                                    size={32}
                                    className=" z-50 cursor-pointer invisible group-hover:visible  top-0 right-0 text-red-800"
                                />
                            </div>

                            <p className="cursor-pointer group-hover:font-bold font-semibold">
                                {color.colorName}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorait;
