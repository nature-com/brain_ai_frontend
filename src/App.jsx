import "./App.css";
import { Routes, Route } from "react-router-dom";
import OutsideLayout from "./ui/layout/outside-layout";
import Home from "./pages/Home/home.content";
import Registration from "./pages/Registration/registration.index";
import About from "./pages/About/about";
import Product from "./pages/Product/product";
import Faqarea from "./pages/Faq/faq";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Dashboard from "./pages/Dashboard/dashboard";
import Tooldetails from "./pages/ToolDetails/tooldetails";
import Payment from "./pages/Registration/payment";
import PaymentRedirect from "./pages/stripe/PaymentRedirect";
import TermsCondtions from "./pages/TermsCondtions/TermsCondtions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import InsideLayout from "./ui/layout/inside-layout";
import Reviews from "./pages/Reviews/Reviews";
import YourAccount from "./pages/YourAccount/YourAccount";
import Tools from "./pages/Tools/Tools";
import PaymentPlan from "./pages/PaymentPlan/PaymentPlan";
import DashboardTwo from "./pages/Dashboard/dashboardTwo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OutsideLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/registration" element={<OutsideLayout />}>
        <Route index element={<Registration />} />
      </Route>
      <Route path="/about" element={<OutsideLayout />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/product" element={<OutsideLayout />}>
        <Route index element={<Product />} />
      </Route>
      <Route path="/faq" element={<OutsideLayout />}>
        <Route index element={<Faqarea />} />
      </Route>
      <Route path="/blog" element={<OutsideLayout />}>
        <Route index element={<Blog />} />
      </Route>
      <Route path="/contact" element={<OutsideLayout />}>
        <Route index element={<Contact />} />
      </Route>
      {/* <Route path="/dashboard" element={<InsideLayout />}>
        <Route index element={<Dashboard />} />
      </Route> */}
      <Route path="/dashboard" element={<InsideLayout />}>
        <Route index element={<DashboardTwo />} />
      </Route>
      <Route path="/your-account" element={<InsideLayout />}>
        <Route index element={<YourAccount />} />
      </Route>
      <Route path="/tools" element={<OutsideLayout />}>
        <Route index element={<Tools />} />
      </Route>
      <Route path="/payment-plan" element={<OutsideLayout />}>
        <Route index element={<PaymentPlan />} />
      </Route>
      <Route path="/tooldetails/:id" element={<InsideLayout />}>
        <Route index element={<Tooldetails />} />
      </Route>
      <Route path="/payment" element={<OutsideLayout />}>
        <Route index element={<Payment />} />
      </Route>
      <Route path="/payment-redirect" element={<OutsideLayout />}>
        <Route index element={<PaymentRedirect />} />
      </Route>
      <Route path="/terms-and-condtions" element={<OutsideLayout />}>
        <Route index element={<TermsCondtions />} />
      </Route>
      <Route path="/privacy-policy" element={<OutsideLayout />}>
        <Route index element={<PrivacyPolicy />} />
      </Route>
      <Route path="/reviews" element={<OutsideLayout />}>
        <Route index element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
