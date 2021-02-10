import React from "react";
import { Link } from "react-router-dom";

function ShowSortedItems(props) {
  const name = "cool";
  return (
    <div className="inline-block h-1/2 w-1/4">
      <h1 className="font-medium text-5xl underline text-yellow-500 text-center my-36">
        {props.heading}
      </h1>
      <div className="flex items-center flex-col mb-12">
        <img className="w-60 h-60" src={props.img} />
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default ShowSortedItems;
