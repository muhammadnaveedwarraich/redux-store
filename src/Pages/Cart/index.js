import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAll, removeProduct } from "../../Store/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const CartProducts = useSelector((state) => state.Productscart);
  console.log(CartProducts);

  return (
    <div className="h-screen">
      {CartProducts.length > 0 ? (
        <div>
          {CartProducts.map((item) => (
            <div
              key={item.id}
              className="flex bg-white p-8 mb-3 space-y-3 mt-4 justify-between items-center"
            >
              <img className="w-16 h-16" src={item.image} />
              <p className="text-center text-sm">{item.title}</p>
              <p className="text-center text-sm">{item.price}$</p>
              <div className="flex justify-center ">
                <button
                  className="text-white bg-violet-700 p-2 px-4 text-sm rounded-lg"
                  onClick={() => {
                    dispatch(removeProduct(item));
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-3">
            <button
              className="bg-violet-800 p-3 text-white rounded-md "
              onClick={() => {
                dispatch(removeAll());
              }}
            >
              Remove All
            </button>
            <Link to={"/"} className="bg-violet-800 p-4 text-white rounded-md ">
              Back to Store{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-7/12 mx-auto">
          <img
            className=" w-full mt-4 "
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          />
          <div className="mt-4 flex justify-end">
            <Link to={"/"} className="bg-violet-800 p-3 text-white rounded-md ">
              Back to Store{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
