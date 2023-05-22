import React from "react";
import "./option.css";

function Option({ setValue }) {
  return (
    <div className="btn-container">
      <button onClick={() => setValue("")}>All</button>
      <button onClick={() => setValue("breakfast")}>breakfast</button>
      <button onClick={() => setValue("lunch")}>lunch</button>
      <button onClick={() => setValue("dinner")}>dinner</button>
    </div>
  );
}

export default Option;
