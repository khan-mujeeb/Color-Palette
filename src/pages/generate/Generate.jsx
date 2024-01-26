import React from "react";
import ColorPalette from "../../components/ColorPalette.jsx";
import UploadImageSection from "../../components/UploadImageSection.jsx";
import promotion from "../../assets/promotion.webp";
import { useSelector } from "react-redux";

const Generate = () => {
  const selectedImage = useSelector((state) => state.image.selectedImage);
  const palette = useSelector((state) => state.image.palette);



  return (
    <div
      className="h-[90%] flex flex-col gap-10 justify-center items-center relative"
      // style={{
      //   backgroundImage: `url(${selectedImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      

      {!selectedImage && (
        <div className="flex flex-col gap-10 items-center justify-center">
          <img className="h-96" src={promotion} alt="" />
          <h1 className=" text-5xl text-center font-semibold">
            Extract Color Palette from Image
          </h1>
        </div>
      )}

      <UploadImageSection />
      <ColorPalette />
    </div>
  );
};

export default Generate;
