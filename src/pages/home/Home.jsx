import React from "react";
import styles from "../../styles/style";
import { useNavigate } from "react-router-dom";
import headerImg from "../../assets/headerImg.jpg";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-[90%] px-5">
            <div className="flex flex-col w-[40%] gap-10 justify-center items-center">
                <h1 className=" text-center text-7xl font-bold">
                    The superfast Color Palettes generator!
                </h1>
                <p className=" text-xl text-center">
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
            <div className="flex-6 flex justify-center items-center h-full">
                <img className="" src={headerImg} alt="header image" />
            </div>
        </div>
    );
};

export default Home;
