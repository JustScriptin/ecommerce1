import React from "react";
import { Link } from "react-router-dom";

function HeadingHome() {
  return (
    <div className="flex justify-center flex-col items-center my-16">
      <h1 className="font-medium text-5xl">FREE SHIPPING</h1>
      <h2 className="font-medium text-xl">
        ON ORDERS OVER $50 - USE COUPON CODE OVER50
      </h2>
      <div className="mt-10">
        <Link className="border-yellow-600 border-2 mx-3 p-1" to="/women">
          Shop Women
        </Link>
        <Link className="border-yellow-600 border-2 mx-3 p-1" to="/men">
          Shop Men
        </Link>
        <Link
          className="border-gray-500 border-2 mx-3 p-1 text-gray-500 cursor-not-allowed"
          onClick={(e) => e.preventDefault()}
          to="/sale"
        >
          Shop Sale
        </Link>
      </div>
    </div>
  );
}

export default HeadingHome;
