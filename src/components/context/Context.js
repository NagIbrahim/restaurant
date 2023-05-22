import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { createContext, useReducer, useContext, useState } from "react";

import { cartReducer } from "./Reducers";
// import data from "../data.js";

const data = [
  {
    cat: "breakfast ",
    title: "naglaa",
    description: "xxxxxg",
    image: "b1.jpg",
    price: "10",
    inStock: [1, 2, 3, 4, 5],
  },
  {
    cat: "breakfast ",
    title: "ahmad",
    description: "klsmm",
    image: "b5.jpg",
    price: "5",
    inStock: [1, 2, 3, 4, 5],
  },
  {
    cat: "breakfast ",
    title: "meal-name",
    description: "klsmm",
    image: "b13.jpg",
    price: "15",
    inStock: [1, 2, 3, 4, 5],
  },
  {
    cat: "lunch ",
    title: "meal-name",
    description: "klmo",
    image: "l10.jpg",
    price: "16",
    inStock: [1, 2, 3, 4, 5],
  },
  {
    cat: "lunch ",
    title: "meal-name",
    description: "opqrs",
    image: "l6.jpg",
    price: "13",
    inStock: [1, 2, 3, 4, 5],
  },
  {
    cat: "lunch ",
    title: "meal-name",
    description: "opqrs",
    image: "l9.jpg",
    price: "19",
    inStock: [1, 2, 3, 4, 5],
  },

  {
    cat: "dinner ",
    title: "meal-name",
    description: "opqrs",
    image: "d1.jpg",
    price: "7",
    inStock: [1, 2, 3, 4, 5],
  },

  {
    cat: "dinner ",
    title: "meal-name",
    description: "opqrs",
    image: "d5.jpg",
    price: "14",
    inStock: [1, 2, 3, 4, 5],
  },

  {
    cat: "dinner ",
    title: "meal-name",
    description: "opqrs",
    image: "d7.jpg",
    price: "21",
    inStock: [1, 2, 3, 4, 5],
  },
];

export const context = createContext();

const Context = ({ children }) => {
  const products = data;
  const [searchValue, setSearchvalue] = useState("");
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  let [signupValue, setSignupValue] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    street: "",
    plz: "",
    tel: "",
    cart: [],
  });
  let [users, setUsers] = useLocalStorage("users", []);
  let [signinValue, setSigninValue] = useLocalStorage("signinValue", {
    siEmail: "",
    siPassword: "",
  });
  let findUser = users.find((user) => user.email === signinValue.siEmail);

  let [findUserState, setFindUserState] = useLocalStorage(
    "findUserState",
    findUser
  );
  // useEffect(() => {
  //   findUser = users.find((user) => user.email === signinValue.siEmail);
  //   setFindUserState(findUser);
  // }, []);

  return (
    <context.Provider
      value={{
        state,
        dispatch,
        searchValue,
        setSearchvalue,
        signupValue,
        setSignupValue,
        users,
        setUsers,
        signinValue,
        setSigninValue,
        findUserState,
        setFindUserState,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const CartState = () => {
  return useContext(context);
};

export default Context;
