import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const OutsideLayout = () => {
  return (
    <div className="container-fluid overflow-hidden p-0">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default OutsideLayout;
