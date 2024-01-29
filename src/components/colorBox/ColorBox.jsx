import React from "react";
import { FaCopy } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import {addToFav} from "../../firebase/firebaseUtils";
import { set } from "firebase/database";

const ColorBox = ({ shades, background, name, shadeNames, category }) => {
    
    const [favColors, setFavColors] = React.useState(false);
    const [showAllShades, setShowAllShades] = React.useState(false);
    const [currentColor, setCurrentColor] = React.useState(background);
    const [currentName, setCurrentName] = React.useState(name);

    React.useEffect(() => {
        setCurrentColor(background);
        setCurrentName(name);
    }, [shades, background]);

    console.log(shadeNames)

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    const handleShowAllShades = (shade) => {
        setShowAllShades(!showAllShades);
    };



    const favClickHandler = () => {
        toast("Added to favorites", {
            icon: "❤️"
        })
        setFavColors(!favColors);
        addToFav(currentColor, name);
    };

    return (
        <div className="flex flex-col items-center justify-center  w-full h-36 lg:max-3xl:h-full ">
            <div>
                <Toaster />
            </div>

            {showAllShades ? (
                <div className="flex lg:max-3xl:flex-col h-full w-full">
                    {shades?.map((shade, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setCurrentColor(shade);
                                setCurrentName(`${category} ${shadeNames[index]}`);
                                setShowAllShades(!showAllShades);
                            }}
                            className="z-50 w-full h-full lg:max-3xl:h-1/6 flex justify-center items-center cursor-pointer"
                            style={{ backgroundColor: shade }}
                        >
                            {currentColor === shade ? (
                                <p className=" font-semibold lg:max-3xl:block hidden text-md">
                                    Current Color
                                </p>
                            ) : (
                                <p className=" lg:max-3xl:block hidden text-md">
                                    {shade}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="flex flex-col items-center justify-around w-full h-full group"
                    style={{ backgroundColor: currentColor }}
                >
                    <div className="flex lg:max-3xl:flex-col gap-5 group-hover:visible invisible transition-all">
                        <IoGridSharp
                            className="text-2xl"
                            onClick={handleShowAllShades}
                        />
                        <FaCopy
                            className="text-xl"
                            onClick={() => {
                                handleColorClick(currentColor);
                            }}
                        />

                        {
                            favColors ? (<FaHeart className="text-xl cursor-pointer" />): (<FaRegHeart
                                className="text-xl cursor-pointer"
                                onClick={() => {
                                    favClickHandler();
                                }}
                            />)
                        }
                        

                        
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="lg:max-3xl:block hidden font-semibold text-2xl">
                            {currentColor}
                        </h3>
                        <p className="lg:max-3xl:block hidden text-md">
                            {currentName}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorBox;
