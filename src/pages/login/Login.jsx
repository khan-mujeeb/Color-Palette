import React from "react";
import {auth} from "../../firebase/firebase.js";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import loginBanner from "../../assets/login-banner.jpg";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, provider);
        navigate("/");
    } catch (error) {
        console.error("An error occured", error);
    }
};


    return (
        <div className="flex h-full bg-cyan-50">
            <div className="flex flex-1 items-center justify-center">
                <div className=" bg-white shadow-lg duration-150 flex items-center justify-center gap-3 g-black/[0.05] w-80  text-black hover:text-white py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 cursor-pointer group"
                onClick={signInWithGoogle}
                >
                    <FaGoogle size={22} />
                    <p>Login with Google</p>
                </div>
            </div>

            <div
                className="flex-1  bg-contain bg-no-repeat bg-right-top h-full lg:block"
                style={{
                    backgroundImage: `url(${loginBanner})`,
                }}
            ></div>
        </div>
    );
};

export default Login;
