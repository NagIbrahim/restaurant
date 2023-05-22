import React from "react";
import { useContext } from "react";
// import { useState } from "react";
import { context } from "../context/Context";
import "./searchbar.css";

function Navbar({ allCategory, data }) {
  let { searchValue, setSearchvalue } = useContext(context);

  return (
    <div className="navbar">
      <form class="navbar-form">
        <input
          value={searchValue}
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchvalue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Navbar;
