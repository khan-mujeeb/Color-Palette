import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";


const ColorBox = ({ shades, background, name }) => {
    const [shadesList, setShades] = React.useState([]);
    const [showAllShades, setShowAllShades] = React.useState(false);
    const [currentColor, setCurrentColor] = React.useState(background);

    React.useEffect(() => {
        setCurrentColor(background);
    }, [shades, background ]);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    const handleShowAllShades = (shade) => {
        setShowAllShades(!showAllShades);
        
    };

    return (
        <div className="flex flex-col gap-5 items-center justify-center w-full h-36 lg:max-3xl:h-full cursor-pointer">
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
                                setShowAllShades(!showAllShades);
                            } }
                            className="z-50 w-full h-full lg:max-3xl:h-1/6 flex justify-center items-center"
                            style={{ backgroundColor: shade }}
                        >
                            {background === shade ? (
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
                        <FaRegHeart className="text-xl" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="lg:max-3xl:block hidden font-semibold text-2xl">
                            {currentColor}
                        </h3>
                        <p className="lg:max-3xl:block hidden text-md">
                            {name}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorBox;
