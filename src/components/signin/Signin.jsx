import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "../context/Context";
import "./signin.css";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

function Signin() {
  let navigate = useNavigate();
  let { signinValue, setSigninValue, users } = useContext(context);
  let findUser = users?.find((user) => user?.email === signinValue?.siEmail);
  let [newSigninValue, setNewSigninValue] = useState({
    newSiEmail: "",
    newSiPassword: "",
  });
  let [findUserState, setFindUserState] = useLocalStorage(
    findUser?.email,
    findUser
  );
  let handleChange = (e) => {
    setNewSigninValue({ ...newSigninValue, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      users.some(
        (user) =>
          user?.email === newSigninValue?.newSiEmail &&
          user?.password === newSigninValue?.newSiPassword
      )
    ) {
      navigate("/");
      setSigninValue({
        siEmail: newSigninValue?.newSiEmail,
        siPassword: newSigninValue?.newSiPassword,
      });
    } else {
      alert("This user is not exist!");
    }
  };
  // useEffect(() => {
  //   findUser = users.find((user) => user.email === signinValue.siEmail);
  //   setFindUserState(findUser);
  // }, []);
  return (
    <div id="signin">
      <form id="signin-f" onChange={handleChange} onSubmit={handleSubmit}>
        <input
          placeholder="E-Mail..."
          type="email"
          name="newSiEmail"
          id=""
          value={newSigninValue.newSiEmail}
        />
        <input
          placeholder="Password..."
          type="password"
          name="newSiPassword"
          id=""
          value={newSigninValue.newSiPassword}
        />
        <button>Sign in</button>
        <Link to="/signup">Dont have an account ?</Link>
      </form>
    </div>
  );
}

export default Signin;
