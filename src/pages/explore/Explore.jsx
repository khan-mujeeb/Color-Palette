import React from 'react'
import colors from '../../data/colors'
import SpaceBarAnimation from '../../components/spaceKey/SpaceBarAnimation.jsx'
import AdsenseComponent from '../../hooks/adsense/AdsenseComponent.jsx'
const Explore = () => {

  const [randomPalette, setRandomPalette] = React.useState(generateRandomPalette());

  function generateRandomPalette() {
    const palette = [];

    // Get random colors from each category
    const categories = Object.keys(colors);
    for (let i = 0; i < 6; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const shades = Object.keys(colors[category]);
        const shade = shades[Math.floor(Math.random() * shades.length)];
        palette.push({ category, shade });
    }

    return palette;
}


React.useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      setRandomPalette(generateRandomPalette());
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

// const radialGradient = `radial-gradient(circle, ${randomPalette.map(color => colors[color.category][color.shade]).join(', ')})`;




  return (
    <div className='h-[90%] w-full flex flex-col lg:max-3xl:justify-center lg:max-3xl:items-center gap-10 '
    
    >
      <AdsenseComponent adClient= {import.meta.env.VITE_APP_AD_CLIENT} adSlot={import.meta.env.VITE_APP_AD_SLOT} adFormat="auto" />
      <div className='flex w-full lg:max-3xl:flex-row flex-col lg:max-3xl:px-10  h-[70%]'>
      {
        randomPalette?.map((color, index) => (
          <div key={index} className="flex flex-col gap-5  items-center justify-center w-full h-36 lg:max-3xl:h-full">
            <div className="w-full h-full" style={{ backgroundColor: colors[color.category][color.shade] }}></div>
            <p className="lg:max-3xl:block hidden text-xl font-semibold">{color.category} {color.shade}</p>
          </div>
        ))
      }
      </div>
      <SpaceBarAnimation setRandomPalette={setRandomPalette} generateRandomPalette={generateRandomPalette}/>
    </div>
  )
}

export default Explore