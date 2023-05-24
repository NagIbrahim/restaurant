import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { context } from "../context/Context";

import "./cart.css";

import { AiFillDelete } from "react-icons/ai";
import useLocalStorage from "use-local-storage";
function Cart() {
  let { signinValue, users, setSigninValue } = useContext(context);
  let findUser = users?.find((user) => user.email === signinValue.siEmail);

  let [findUserState, setFindUserState] = useLocalStorage(
    findUser?.email,
    findUser
  );

  const [total, setTotal] = useState(
    findUserState?.cart.reduce(
      (acc, curr) => acc + Number(curr.price) * curr.quan,
      0
    )
  );
  let handleDelete = (index) => {
    let newItems = findUserState?.cart.filter((item, i) => i !== index);
    setFindUserState({ ...findUserState, cart: newItems });
    setTotal(
      newItems.reduce((acc, curr) => acc + Number(curr.price) * curr.quan, 0)
    );
  };

  let handlePlus = (index) => {
    let newItem = findUserState?.cart.map((it, ind) =>
      index === ind ? { ...it, quan: it.quan + 1 } : it
    );
    setTotal(
      newItem?.reduce((acc, curr) => acc + Number(curr.price) * curr.quan, 0)
    );
    setFindUserState({ ...findUserState, cart: newItem });
  };
  let handleMinus = (product, index) => {
    let newItem = findUserState?.cart.map((it, ind) => {
      if (index === ind && it.quan > 1) {
        return { ...it, quan: it.quan - 1 };
      }
      return it;
    });
    setTotal(
      newItem?.reduce((acc, curr) => acc + Number(curr.price) * curr.quan, 0)
    );
    if (product.quan === 1) {
      let filterRemove = findUserState?.cart.filter(
        (ite, inx) => inx !== index
      );
      setFindUserState({ ...findUserState, cart: filterRemove });
      setTotal(
        filterRemove?.reduce(
          (acc, curr) => acc + Number(curr.price) * curr.quan,
          0
        )
      );
      return;
    }
    setFindUserState({ ...findUserState, cart: newItem });
  };

  // useEffect(() => {
  //   setTotal(
  //     cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
  //   );
  // }, [cart]);

  return (
    <div className="products-container">
      <div className="product-list">
        {findUserState?.cart.map((product, index) => (
          <div className="product-item" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div>
              <span>{product.title}</span>
            </div>
            <div className="cart_btns">
              <button onClick={() => handleMinus(product, index)}>-</button>
              <h4>{product.quan}</h4>
              <button onClick={() => handlePlus(index)}>+</button>
            </div>
            <div>${product.price} </div>

            <div>
              <button id="del" onClick={() => handleDelete(index)}>
                <AiFillDelete fontSize="1.2vw" color="orange" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="filters summary">
        <span className="title">
          Subtotal ({findUserState?.cart.length}) items
        </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <button id="check" disabled={findUserState?.cart.length === 0}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
