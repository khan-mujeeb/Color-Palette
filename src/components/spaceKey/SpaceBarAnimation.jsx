import "./SpaceBarAnimation.css";
import { useEffect } from "react";

const SpaceBarAnimation = ({ setRandomPalette, generateRandomPalette }) => {
    const handleClick = () => {
        setRandomPalette(generateRandomPalette());

        // Set a timeout to blur the button after 500 milliseconds
        setTimeout(() => {
            const button = document.getElementById("spacebarButton");
            if (button) {
                button.blur();
            }
        }, 100);
    };

    useEffect(() => {
        const button = document.getElementById("spacebarButton");

        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                button.focus();
            }
        };
        const handleKeyUp = (event) => {
            if (event.code === "Space") {
                button.blur();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp); 
        };
        
        
    }, []);

    return (
        <div className="container">
            <div className="flex flex-col gap-5 justify-center items-center">
                <input
                    id="spacebarButton"
                    onClick={handleClick}
                    className="spacebar lg:max-3xl:text-xl text-sm"
                    type="button"
                    value="SPACEBAR"
                />
                <p className="">Press Spacebar to generate a new palette</p>
            </div>
        </div>
    );
};

export default SpaceBarAnimation;
