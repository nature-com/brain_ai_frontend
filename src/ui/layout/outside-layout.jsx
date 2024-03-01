import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../../pages/ScrollToTop/ScrollToTop";
import { useState } from "react";
const OutsideLayout = () => {
  return (
    <div>
      <div className="container-fluid overflow-hidden p-0">
        <Header />
        <ScrollToTop />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default OutsideLayout;
