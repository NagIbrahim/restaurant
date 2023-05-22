import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { CartState, context } from "../context/Context";
import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

import "./card.css";

function Card({ item }) {
  let { signinValue, users, setFindUserState, setSigninValue, findUserState } =
    useContext(context);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // this the new part
  const [isOpen, setIsOpen] = useState(false); // State to track pop-up window

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  let findUser = users.find((user) => user.email === signinValue.siEmail);

  useEffect(() => {
    findUser = users.find((user) => user.email === signinValue.siEmail);
    setFindUserState(findUser);
  }, []);

  return (
    <div className="card_">
      {/* Card content */}
      <img src={item.image} alt="item.name" />
      <div className="card_body">
        <div className="card_txt">
          <span className="card_title">{item.title}</span>
          {/* <p>{item.cat}</p> */}

          {/* <span className="card_price">${item.price}</span> */}
        </div>

        <div className="btn_">
          {/* <button>
            <Link to={`/menu/${item.id}`}>More</Link>
          </button> */}

          <button onClick={toggleModal}>More</button>
          {cart.some((p) => p.id === item.id) ? (
            findUserState && (
              <button
                className="danger_"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  })
                }
              >
                Remove from Cart
              </button>
            )
          ) : findUserState ? (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
            >
              add to cart
            </button>
          ) : (
            <button>sign in</button>
          )}
          {/* <button>add to cart</button> */}
        </div>
      </div>

      {isOpen && (
        <Modal
          onClose={toggleModal}
          title={item.title}
          description={item.description}
        />
      )}
    </div>
  );
}

export default Card;
