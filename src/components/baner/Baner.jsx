import React from "react";
import { Link } from "react-router-dom";
import "./baner.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import b1 from "./images/b1.jpg";
import b2 from "./images/b2.jpg";

import d3 from "./images/d3.jpg";

function Baner() {
  return (
    <div className="baner">
      <sidebar>
        <h3>Welcome to our restaurant</h3>
        <button>
          <Link to={`/menu`}>See our Menu</Link>
        </button>
      </sidebar>
      <div className="carusel-container">
        <Carousel>
          <Carousel.Item interval={700}>
            <img className="d-block w-100" src={b1} alt="First slide" />
            <Carousel.Caption>
              <h3>Delicious</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img className="d-block w-100" src={b2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Healthy </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img className="d-block w-100" src={d3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Frish</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Baner;
