import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import StickySocials from "../StickySocials/StickySocials";
import ShowSortedItems from "../ShowSortedItems/ShowSortedItems";
require("dotenv").config();

function ShopAll() {
  const [shopAllAttrs, setShopAllAttrs] = useState([]);

  const getShopAllAttrs = async () => {
    try {
      const res = await fetch(`http://localhost:3009/api/shopAll`);
      const json = await res.json();
      console.log(json);
      setShopAllAttrs(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getShopAllAttrs();
  }, []);
  return (
    <div>
      <NavBar />
      <StickySocials />
      <h1 className="font-medium text-5xl underline text-yellow-500 text-center my-36">
        SHOP ALL
      </h1>
      {shopAllAttrs.map((attrs, index) => {
        return (
          <ShowSortedItems
            key={index}
            name={attrs.name}
            price={attrs.price}
            img={attrs.img}
          />
        );
      })}
      <div className="flex justify-center">
        <Link className="border-yellow-600 border-2 mx-3 p-1" to="/shopAll">
          Shop All
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ShopAll;
