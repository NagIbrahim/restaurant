import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
import { CartState, context } from "../context/Context";
import { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

import "./card.css";
import useLocalStorage from "use-local-storage";

function Card({ item }) {
  let { signinValue, users, setSigninValue } = useContext(context);
  let findUser = users?.find((user) => user.email === signinValue.siEmail);

  let [findUserState, setFindUserState] = useLocalStorage(
    findUser?.email,
    findUser
  );
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();

  // this the new part
  const [isOpen, setIsOpen] = useState(false); // State to track pop-up window

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  let handleAddToCart = () => {
    // Herre is case we have the product in the cart
    if (findUserState?.cart.some((ite) => Number(ite.id) === Number(item.id))) {
      let newItems = findUserState?.cart.map((it) =>
        Number(it.id) === Number(item.id) ? { ...it, quan: it.quan + 1 } : it
      );
      setFindUserState({ ...findUserState, cart: newItems });
      return;
    }
    setFindUserState({
      ...findUserState,
      cart: [...findUserState?.cart, item],
    });
  };
  let handleDelete = () => {
    let newItems = findUserState?.cart?.filter(
      (it) => Number(item.id) !== Number(it.id)
    );
    setFindUserState({ ...findUserState, cart: newItems });
  };

  // useEffect(() => {
  //   setFindUserState(findUser);
  // }, []);

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
          {findUserState?.cart?.some(
            (ite) => Number(ite.id) === Number(item.id)
          ) ? (
            <button className="danger_" onClick={handleDelete}>
              Remove from cart
            </button>
          ) : findUserState ? (
            <button onClick={handleAddToCart}>Add to cart</button>
          ) : (
            <button>Sign in</button>
          )}

          {/* {cart.some((p) => p.id === item.id) ? (
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
          )} */}
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
