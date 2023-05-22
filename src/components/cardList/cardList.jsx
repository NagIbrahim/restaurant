import React, { useContext } from "react";
// import { context } from "../../Context";

import { context } from "../context/Context";
import "./cardList.scss";
import Card from "../../components/card/card.jsx";

const CardList = ({ data, value }) => {
  let { searchValue } = useContext(context);
  let newData = data
    .filter((item) => item.cat.includes(value))
    .filter((item) => item.title.includes(searchValue.toLowerCase()));
  return (
    <div className="card-list">
      {newData.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
};

export default CardList;
