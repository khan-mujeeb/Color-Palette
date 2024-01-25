import React, { useEffect } from "react";
import { usePalette } from 'color-thief-react'
import { useState } from "react";
import img from "../assets/promotion.webp"

const ColorPalette = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    let crossOrigin = "Anonymous"
    let quality = 10
    const { data, loading, error } = usePalette(img, 6, "hex", { crossOrigin, quality})

    useEffect(() => {
        console.log(data)
        console.log(loading)
        console.log(error)
    }
    , [loading])
    
    return (
        
        <div className="flex gap-2 justify-center">
            <div className="bg-green-600 w-40 h-40 rounded-md">vd</div>
            <div className="bg-yellow-600 w-40 h-40 rounded-md">vd</div>
            <div className="bg-orange-600 w-40 h-40 rounded-md">vd</div>
            <div className="bg-purple-600 w-40 h-40 rounded-md">vd</div>
            <div className="bg-red-600 w-40 h-40 rounded-md">vd</div>
            <div className="bg-blue-600 w-40 h-40 rounded-md">vd</div>
        </div>
    );
};

export default ColorPalette;
