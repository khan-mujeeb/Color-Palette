import React from 'react'
import ColorPalette from '../components/ColorPalette.jsx'
import UploadImageSection from '../components/UploadImageSection.jsx'
import promotion from "../assets/promotion.webp"

const Generate = () => {
  return (
    <div className='h-[90%] flex flex-col'>

      <div className="flex h-full">
        <div className="w-[50%] flex flex-col gap-10 items-center justify-center">
          <img className=' w-96' src={promotion} alt="" />
          <h1 className=' text-5xl text-center font-semibold'>Extract Color Palette from Image</h1>
        </div>

        <UploadImageSection />

      </div>
      
      <ColorPalette />
    </div>
  )
}

export default Generate
