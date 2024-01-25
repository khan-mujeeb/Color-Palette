import React, { useEffect } from "react";
import { usePalette } from 'color-thief-react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./loader/Loader";

const ColorPalette = () => {

    const selectedImage = useSelector((state) => state.image.selectedImage);
    

    let crossOrigin = "Anonymous"
    let quality = 10
    const { data, loading, error } = usePalette(selectedImage, 6, "hex", { crossOrigin, quality})

    
    
    return (
        
        loading ? (<Loader />) 
        
        : 

        (
            <div className="flex gap-2 justify-center">
                {
                    data?.map((color, index)=> {
                        return (
                            <div key={index} className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer w-40 h-40 rounded-md flex items-end justify-center" style={{backgroundColor: color}}>
                                <p className="p-1 font-semibold opacity-75 text-center backdrop-blur-md bg-textBg w-full text-black">{color}</p>
                            </div>
                        )
                        })
                }
            
        </div>
        )
    );
};

export default ColorPalette;
