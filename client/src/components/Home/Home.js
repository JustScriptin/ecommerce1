import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HeadingHome from "../HeadingHome/HeadingHome";
import ImagesHome from "../ImagesHome/ImagesHome";
import Footer from "../Footer/Footer";
import StickySocials from "../StickySocials/StickySocials";
import ShowSortedItems from "../ShowSortedItems/ShowSortedItems";
import productImage from "./assets/productImage.jfif";
require("dotenv").config();

function Home() {
  const [homeAttrs, setHomeAttrs] = useState([]);

  const getHomeAttrs = async () => {
    try {
      const res = await fetch(`http://localhost:3009/api/home`);
      const json = await res.json();
      console.log(json);
      setHomeAttrs(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getHomeAttrs();
  }, []);
  return (
    <div>
      <NavBar />
      <StickySocials />
      <HeadingHome />
      <ImagesHome />
      <h1 className="font-medium text-5xl underline text-yellow-500 text-center my-36">
        NEW ARRIVALS
      </h1>
      {homeAttrs.map((attrs, index) => {
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

export default Home;
