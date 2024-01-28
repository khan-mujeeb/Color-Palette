import { useEffect, useState } from "react";
import { getFavColors, deleteFavColor } from "../../firebase/firebaseUtils";
import { toast, Toaster } from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import Loader from "../../components/loader/Loader"
import { FaCopy } from "react-icons/fa6";

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

    const handleDelete = async (color) => {
        await deleteFavColor(color);
        toast.error("Color deleted");

        // Update the UI by fetching and setting the updated list of favorite colors
        const updatedColors = await getFavColors();
        setFavColors(updatedColors);
    };

    return (
        <div className="mt-20 flex items-center justify-center w-full px-10">
            <div>
                <Toaster />
            </div>

            {loading ? (
                <Loader />
            ) : favColors && favColors.length > 0 ? (
                <div className="mt-20 justify-center gap-x-5 gap-y-10 flex flex-wrap items-center">
                    {favColors.map((color) => (
                        <div
                            className="relative flex justify-center items-center gap- flex-col gap-5  group"
                            key={color.id}
                        >
                            <div
                                className="w-32 flex justify-center items-center lg:max-2xl:h-80 sm:h-56 h-32"
                                style={{ backgroundColor: color.code }}
                            >
                                <div className="flex lg:max-3xl:flex-col gap-5 group-hover:visible invisible transition-all">
                                    <RiDeleteBin5Line
                                        className="text-xl cursor-pointer"
                                        onClick={() => {
                                            handleDelete(color.code);
                                        }}
                                    />

                                    <FaCopy
                                        className="text-xl cursor-pointer"
                                        onClick={() => {
                                            handleColorClick(color.code);
                                        }}
                                    />
                                </div>
                            </div>

                            <p className="cursor-pointer group-hover:font-bold font-semibold">
                                {color.colorName}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-20 justify-center gap-x-5 gap-y-10 flex flex-wrap items-center">
                    <h1 className="text-3xl font-bold">No Favourites</h1>
                </div>
            )}
        </div>
    );
};

export default Favorait;
