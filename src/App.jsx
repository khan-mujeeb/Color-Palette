import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Explore from "./pages/explore/Explore.jsx";
import Generate from "./pages/generate/Generate.jsx";
import Favourite from "./pages/favorait/Favorait.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {

    
    
    return (
        <div className="w-screen h-screen box-border overflow-x-hidden ">
            
            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/generate" element={<Generate />} />
                    <Route path= "/favourite" element= {<Favourite/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

