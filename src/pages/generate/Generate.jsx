import React from "react";
import ColorPalette from "../../components/ColorPalette.jsx";
import UploadImageSection from "../../components/UploadImageSection.jsx";
import promotion from "../../assets/promotion.webp";
import { useSelector } from "react-redux";
import AdsenseComponent from "../../hooks/adsense/AdsenseComponent.jsx";

const Generate = () => {
  const selectedImage = useSelector((state) => state.image.selectedImage);
  const palette = useSelector((state) => state.image.palette);



  return (
    <div
      className="h-[90%] flex flex-col gap-10 justify-center items-center relative"
      
    >

<AdsenseComponent adClient= {import.meta.env.VITE_APP_AD_CLIENT} adSlot={import.meta.env.VITE_APP_AD_SLOT} adFormat="auto" />
      

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
