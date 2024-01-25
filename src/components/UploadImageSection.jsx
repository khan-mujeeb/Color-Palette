import React from "react";
import { useState } from "react";

const UploadImageSection = () => {
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

    return (
        <div className="w-full flex justify-center items-center">
            <div className="imageSection"></div>

            <div className="flex h-64 flex-col w-96 shadow-lg  justify-center items-center  rounded-lg gap-8">
                <input 
                    className="flex gap-2"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                <button className="text-xl px-5 py-2 roundex-xl bg-blue-600 rounded-sm text-white font-semibold">
                    Upload
                </button>

                {/* <div className=" flex flex-col justify-center items-center">
                    <p className=" text-2xl font-semibold">or Drop a file,</p>

                    <div>
                        <p>
                            paste image or <span>url</span>{" "}
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default UploadImageSection;
