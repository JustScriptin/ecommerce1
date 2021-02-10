import React from "react";
import img1 from "./assets/img1.jfif";
import img2 from "./assets/img2.jfif";
import img3 from "./assets/img3.jfif";

function ImagesHome() {
  return (
    <div className="grid grid-col-3 grid-flow-col mb-16">
      <img className="max-h-96 bg-cover" src={img1} alt="" />
      <img className="max-h-96 bg-cover" src={img2} alt="" />
      <img className="max-h-96 bg-cover" src={img3} alt="" />
    </div>
  );
}

export default ImagesHome;
