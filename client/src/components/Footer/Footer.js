import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-yellow-500 mt-24 p-4">
      <Link to="/shopAll">Shop All</Link>
      <Link
        className="text-gray-500 cursor-not-allowed"
        onClick={(e) => e.preventDefault()}
        to="/contact"
      >
        Contact
      </Link>
      <a href="http://www.instagram.com">Instagram</a>
      <Link
        className="text-gray-500 cursor-not-allowed"
        onClick={(e) => e.preventDefault()}
        to="/sale"
      >
        Sale
      </Link>
      <Link to="/men">Men</Link>
      <a href="http://www.pinterest.com">Pinterest</a>
      <Link
        className="text-gray-500 cursor-not-allowed"
        onClick={(e) => e.preventDefault()}
        to="/about"
      >
        About
      </Link>
      <Link to="/women">Women</Link>
      <a href="http://www.facebook.com">Facebook</a>
    </div>
  );
}

export default Footer;
