import React from "react";
import "./SpaceBarAnimation.css";
const SpaceBarAnimation = ({setRandomPalette, generateRandomPalette}) => {
    return (
        <div className="container ">
            <div className="flex flex-col gap-5 justify-center items-center">
                <input 
                onClick={() => setRandomPalette(generateRandomPalette())}
                className="spacebar" type="button" value="SPACEBAR" />
                <p>Press Spacebar to generate new palette</p>
            </div>
        </div>
    );
};

export default SpaceBarAnimation;
