import React from "react";
import styles from "../styles/style";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
const Navbar = () => {
    const navigate = useNavigate();
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

    return (
        <nav className="w-full flex justify-between py-2 px-5 z-10 shadow-md items-center">
            <h1
                className="text-2xl font-bold cursor-pointer"
                onClick={() => {
                    navigate("/");
                }}
            >
                palette{" "}
                <span className=" font-semibold text-3xl text-blue-700">
                    Pro
                </span>{" "}
            </h1>
            {!user ? (
                <button
                    className={`${styles.button}`}
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Login
                </button>
            ): (
                <div className="flex gap-10 items-center">
                    <div
                    className=" font-semibold text-lg cursor-pointer"
                    onClick={() => {navigate("/favourite")}}
                    >Favourite</div>

                    <button
                    className={`${styles.button}`}
                    onClick={() => {
                        auth.signOut();
                        navigate("/");
                    }}
                >
                    Logout
                </button>
                    
                </div>
            )}
        </nav>
    );
};

export default Navbar;
