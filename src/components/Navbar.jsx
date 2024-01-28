import React from "react";
import styles from "../styles/style";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuHidden, setMenuHidden] = React.useState(true);

    const toggleMenu = () => {
        console.log("clicked");
        console.log(isMenuHidden);
        setMenuHidden(!isMenuHidden);
    };
    const [user, setUser] = React.useState(false);

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user.uid) {
                setUser(true);
            } else {
                setUser(false);
            }
        });
    }, []);

    const onCLickHandler = (path) =>{
        console.log("clicked");
        setMenuHidden(true);
        navigate(path);
    }

    return (
        <nav className=" z-50 absolute flex flex-wrap items-center justify-between w-full py-2 md:py-4 px-4 text-lg text-gray-700 bg-white shadow-md">
            <h1
                className="md:text-2xl text-xl font-bold cursor-pointer"
                onClick={() => {
                    onCLickHandler("/");
                    
                }}
            >
                palette{" "}
                <span className=" font-semibold md:text-3xl text-2xl text-blue-700">
                    Pro
                </span>{" "}
            </h1>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="menu-button"
                className="h-6 w-6 cursor-pointer md:hidden block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleMenu}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>

            <div
                className={`w-full md:flex md:items-center md:w-auto ${
                    isMenuHidden ? "hidden" : ""
                }`}
                id="menu"
            >
                <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:items-center md:gap-10 md:pt-0">
                    <li>
                        {user && (
                            <div
                                className=" font-semibold text-lg cursor-pointer"
                                onClick={() => {
                                    
                                    onCLickHandler("/favourite");
                                }}
                            >
                                Favourite
                            </div>
                        )}
                    </li>

                    <li>
                        {!user ? (
                            <button
                                className={`${styles.button}`}
                                onClick={() => {
                                    onCLickHandler("/login");
                                }}
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                className={`${styles.button}`}
                                onClick={() => {
                                    auth.signOut();
                                    onCLickHandler("/");
                                }}
                            >
                                Logout
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
