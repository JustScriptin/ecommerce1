import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpeg";

function NavBar() {
  return (
    <div className="grid grid-cols-7 p-2 bg-yellow-500 pl-40">
      <div className="">
        <Link to="/">
          <img className="inline-block w-12 h-6 mr-5" src={logo} alt="logo" />
        </Link>
        <Link to="/shopAll">Shop All</Link>
      </div>
      <Link className="" to="/men">
        Men
      </Link>
      <Link className="" to="/women">
        Women
      </Link>
      <Link
        className="text-gray-500 cursor-not-allowed"
        to="/sale"
        onClick={(e) => e.preventDefault()}
      >
        Sale
      </Link>
      <Link
        className="text-gray-500 cursor-not-allowed"
        to="/About"
        onClick={(e) => e.preventDefault()}
      >
        About
      </Link>
      <Link
        className="text-gray-500 cursor-not-allowed"
        to="/contact"
        onClick={(e) => e.preventDefault()}
      >
        Contact
      </Link>
      <div className="">
        <img className="inline-block w-12 h-6 mr-5" src={logo} alt="logo" />
        <Link
          className="text-gray-500 cursor-not-allowed"
          to="/login"
          onClick={(e) => e.preventDefault()}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
