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
      <Route path="/dashboard" element={<OutsideLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/tooldetails/:id" element={<OutsideLayout />}>
        <Route index element={<Tooldetails />} />
      </Route>
      
    </Routes>
  );
}

export default App;
