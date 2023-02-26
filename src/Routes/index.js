import React from "react";
import { Routes, Route } from "react-router-dom";
import Navebar from "../Components/Navbar";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
const AppRoutes = () => {
  return (
    <div className="bg-gray-200">
      <Navebar />
      <div className="w-11/12 mx-auto  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRoutes;
