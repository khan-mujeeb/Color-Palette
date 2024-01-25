import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Explore from "./pages/Explore.jsx";
import Generate from "./pages/Generate.jsx";

export default function App() {
    return (
        <div className="w-screen h-screen box-border overflow-x-hidden">
            
            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/generate" element={<Generate />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

