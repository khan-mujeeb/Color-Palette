import React from 'react'
import colors from '../../data/colors'
import SpaceBarAnimation from '../../components/SpaceBarAnimation.jsx'

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

// Generate and log a random color palette
// const randomPalette = generateRandomPalette();
// console.log(randomPalette);


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
    <div className='h-[90%] flex flex-col justify-center items-center gap-10 '
    
    >
      <div className='flex justify-evenly h-[70%]'>
      {
        randomPalette?.map((color, index) => (
          <div key={index} className="flex flex-col gap-2 items-center justify-center h-full">
            <div className=" w-60 h-full" style={{ backgroundColor: colors[color.category][color.shade] }}></div>
            <p className="text-xl font-semibold">{color.category} {color.shade}</p>
          </div>
        ))
      }
      </div>
      <SpaceBarAnimation />
    </div>
  )
}

export default Explore