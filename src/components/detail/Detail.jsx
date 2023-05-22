import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.js";
import "./detail.css";

function Detail() {
  const { id } = useParams();
  let choosenItem = data?.find((item) => {
    return item.id === id;
  });

  console.log("data are :", data);
  return (
    <div className="detail">
      <h5>{choosenItem.title} </h5>

      <article>{choosenItem.description}</article>
      <p>{choosenItem.price}</p>
    </div>
  );
}

export default Detail;
