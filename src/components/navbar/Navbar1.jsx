import React from "react";
import { Link } from "react-router-dom";
import "./navbar1.css";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./logo3.jpg";

function Navbar1() {
  return (
    <header>
      <div className="header_container">
        <div className="header_logo">
          <Link>
            <img className="header_img" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header_menu">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </div>

        <div className="header_cart">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>

          <Link to="/signup">login/Sign up</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar1;
