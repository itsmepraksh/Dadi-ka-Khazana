 
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact"; 
import Product from "../pages/Product"; 
import ProductDetails from "../pages/ProductDetails"; 
import Recipes from "../pages/Recipes";
import LoginRegisterPage from "../pages/LoginRegisterPage"; 
import Profile from "../pages/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/product" element={<Product/>} /> 
      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/product/detail/:name" element={<ProductDetails/>} /> 
      <Route path="/login" element={<LoginRegisterPage/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
};

export default MainRoutes;
