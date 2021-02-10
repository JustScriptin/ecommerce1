import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import StickySocials from "../StickySocials/StickySocials";
import ShowSortedItems from "../ShowSortedItems/ShowSortedItems";
require("dotenv").config();

function Women() {
  const [womenAttrs, setWomenAttrs] = useState([]);

  const getwomenAttrs = async () => {
    try {
      const res = await fetch(`http://localhost:3009/api/women`);
      const json = await res.json();
      console.log(json);
      setWomenAttrs(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getwomenAttrs();
  }, []);
  return (
    <div>
      <NavBar />
      <StickySocials />
      <h1 className="font-medium text-5xl underline text-yellow-500 text-center my-36">
        WOMEN'S
      </h1>
      {womenAttrs.map((attrs, index) => {
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

export default Women;
