// src/components/UploadImageSection.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../store/slice/paletteSlice";
import { TbPhotoSearch } from "react-icons/tb";
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
        <div className=" bg-gray-50  mt-10 w-full flex justify-center items-center">
            <div className="imageSection">
                {selectedImage && (
                    <img
                        className=" lg:max-3xl:h-96 max-h-96  h-96"
                        src={selectedImage}
                        alt="Selected"
                    />
                )}
            </div>

            {!selectedImage && (
                <label className=" bg-white justify-between items-center flex gap-2   p-4 w-72 shadow-md border border-gray-200 relative rounded-md">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
                    />
                    <span className="">
                        Browse image
                    </span>
                    <TbPhotoSearch className="text-2xl" />
                </label>
            )}
        </div>
    );
};

export default UploadImageSection;
