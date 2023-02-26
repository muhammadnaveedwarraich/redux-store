import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setApiData(data);
  };
  const tostift = () => {
    toast.success("Product Added Success  !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid  grid-cols-4	 gap-3 mt-6   ">
      {apiData.map((item) => (
        <div key={item.id} className="bg-white p-8 mb-3 space-y-3">
          <div className="flex items-center justify-center p-3">
            <img className="w-32 h-32" src={item.image} />
          </div>
          <p className="text-center text-sm">{item.title}</p>
          <p className="text-center text-sm">{item.price}$</p>
          <div className="flex justify-center ">
            <button
              className="text-white bg-violet-700 p-2 px-4 text-sm rounded-lg"
              onClick={() => {
                dispatch(addProduct(item));
                tostift();
              }}
            >
              Add Item
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Home;
