// src/components/UploadImageSection.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../store/slice/paletteSlice";

const UploadImageSection = () => {
    const dispatch = useDispatch();
    const selectedImage = useSelector((state) => state.image.selectedImage);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                dispatch(setImage(reader.result));
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div className="imageSection">
                {selectedImage && (
                    <img
                        className="h-96"
                        src={selectedImage}
                        alt="Selected"
                    />
                )}
            </div>

            {!selectedImage && (
                
                    <input
                        className="flex gap-2"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                
            )}
        </div>
    );
};

export default UploadImageSection;
