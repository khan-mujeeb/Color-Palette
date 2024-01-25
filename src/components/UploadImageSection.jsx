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
                {selectedImage && <img className="h-64 w-96" src={selectedImage} alt="Selected" />}
            </div>

            {
                !selectedImage && (
                    <div className="flex h-64 flex-col w-96 shadow-lg  justify-center items-center  rounded-lg gap-8">
                <input
                    className="flex gap-2"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {/* <button className="text-xl px-5 py-2 roundex-xl bg-blue-600 rounded-sm text-white font-semibold">
                    Upload
                </button> */}
            </div>
                )
            }
        </div>
    );
};

export default UploadImageSection;
