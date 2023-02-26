import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navebar = () => {
  const state = useSelector((state) => state.Productscart);
  return (
    <div className="bg-gray-500  text-white flex justify-between items-start p-3">
      <div className="flex items-center gap-5">
        <h1>Redux Store</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"cart"}>Cart</Link>
      </div>
      <Link to={"cart"}>Cart Item:{state.length}</Link>
    </div>
  );
};

export default Navebar;
