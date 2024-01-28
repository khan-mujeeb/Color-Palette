import React from "react";
import styles from "../../styles/style";
import { useNavigate } from "react-router-dom";
import headerImg from "../../assets/headerImg.jpg";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex lg:max-3xl:flex-row  mt-20 flex-col h-[90%] items-center px-5">

            {/* description secction  */}
            <div className=" flex flex-col lg:max-3xl:w-[40%] gap-10 justify-center items-center px-5">
                <h1 className=" text-center lg:max-3xl:text-7xl text-3xl font-bold">
                    The superfast Color Palettes generator!
                </h1>
                <p className=" lg:max-3xl:text-xl text-lg text-center">
                    Create the perfect palettes or get inspired by thousands of
                    beautiful color palettes.
                </p>

                <div className="flex flex-col gap-5">
                    <button
                        className={`${styles.button}`}
                        onClick={() => {
                            navigate("/generate");
                        }}
                    >
                        Generate Palettes from Image
                    </button>
                    <button
                        onClick={() => {navigate("/explore");}}
                        className={`rounded-md p-2 font-semibold bg-white text-black border border-gray-400`}
                    >
                        Explore trending palettes
                    </button>
                </div>
            </div>


            <div className="flex justify-center items-center lg:max-3xl:w-[60%] lg:max-3xl:mt-0 mt-10  ">
                <img className=" w-full lg:max-3xl:w-[90%] lg:max-3xl:h-[70%]" src={headerImg} alt="header image" />
            </div>
        </div>
    );
};

export default Home;
