import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";
import Login from "../../pages/Auth/login";
import { useState } from "react";
const InsideLayout = () => {
    const token = localStorage.getItem("userToken");
    console.log(!token);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    if (!token) {
        return (
            <Login
                openLoginModal={openLoginModal}
                setOpenLoginModal={setOpenLoginModal}
            />
        );
    }
    return (
        <div className="container-fluid overflow-hidden p-0">
            <Header />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default InsideLayout;
