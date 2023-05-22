import React from "react";
import { useEffect, useState } from "react";
import { CartState, dispatch } from "../context/Context";

import "./cart.css";

import { AiFillDelete } from "react-icons/ai";
function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="products-container">
      <div className="product-list">
        {cart.map((product, index) => (
          <div className="product-item" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div>
              <span>{product.title}</span>
            </div>
            <div>${product.price} </div>

            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                <AiFillDelete fontSize="1.2vw" color="green" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <button disabled={cart.length === 0}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Cart;
