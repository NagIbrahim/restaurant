import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { context } from "../context/Context";
import "./signin.css";

function Signin() {
  let navigate = useNavigate();
  let { signinValue, setSigninValue, users, findUser, setFindUserState } =
    useContext(context);
  let handleChange = (e) => {
    setSigninValue({ ...signinValue, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      users.some(
        (user) =>
          user.email === signinValue.siEmail &&
          user.password === signinValue.siPassword
      )
    ) {
      navigate("/");
    } else {
      alert("This user is not exist!");
    }
  };
  useEffect(() => {
    findUser = users.find((user) => user.email === signinValue.siEmail);
    setFindUserState(findUser);
  }, []);
  return (
    <div id="signin">
      <form id="signin-f" onChange={handleChange} onSubmit={handleSubmit}>
        <input type="email" name="siEmail" id="" />
        <input type="password" name="siPassword" id="" />
        <button>Sign in</button>
        <Link to="/signup">Dont have an account ?</Link>
      </form>
    </div>
  );
}

export default Signin;
