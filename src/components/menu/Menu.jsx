import "./menu.scss";
import React, { useContext, useEffect, useState } from "react";
import Searchbar from "../searchbar/Searhbar.jsx";
import Option from "../options/option.jsx";

import data from "../../data/data.js";

import CardList from "../cardList/cardList.jsx";
import { context } from "../context/Context";

function Menu() {
  let { signinValue, users, setFindUserState, setSigninValue, findUserState } =
    useContext(context);
  let [value, setValue] = useState("");

  const allCategory = ["all", ...new Set(data.map((item) => item.cat))];

  let findUser = users.find((user) => user.email === signinValue.siEmail);

  useEffect(() => {
    findUser = users.find((user) => user.email === signinValue.siEmail);
    setFindUserState(findUser);
  }, []);

  return (
    <div className="menu">
      <Searchbar allCategory={allCategory} data={data} />
      <Option setValue={setValue} />
      <CardList data={data} value={value} />
    </div>
  );
}

export default Menu;
