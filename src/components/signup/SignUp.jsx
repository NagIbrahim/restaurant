import React, { useEffect, useState } from "react";
import "./signup.css";
import { useContext } from "react";
import { context } from "../context/Context";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";

function SignUp() {
  let {
    signupValue,
    setSignupValue,
    setSigninValue,
    users,
    setUsers,

    signinValue,
  } = useContext(context);
  let findUser = users?.find((user) => user.email === signinValue.siEmail);

  let [findUserState, setFindUserState] = useLocalStorage(
    findUser?.email,
    findUser
  );
  let [rePassword, setRePassword] = useState("");
  let [passwordNotMatch, setPasswordNotMatch] = useState("");
  let [passwordReq, setPasswordReq] = useState("");

  let handleChangeSignup = (e) => {
    setSignupValue({ ...signupValue, [e.target.name]: e.target.value });
    console.log("Hi from handleChangeSignup");
  };

  let handleSubmitSignup = (e) => {
    e.preventDefault();
    console.log("hi from handelsubmit");
    if (users?.some((user) => user.email === signupValue.email)) {
      alert("This user is already exist !");
    } else {
      setUsers([...users, signupValue]);

      setSignupValue({
        username: "",
        email: "",
        password: "",
        city: "",
        street: "",
        plz: "",
        tel: "",
        cart: [],
      });
      setRePassword("");
      alert("Your registration is successfully done");
      setPasswordNotMatch("");
      setPasswordReq("");
      setSigninValue({
        email: signupValue.email,
        password: signupValue.password,
      });
      console.log("signinValue is :", signinValue);
    }
  };

  // useEffect(() => {
  //   findUser = users.find((user) => user.email === signinValue.siEmail);
  //   setFindUserState(findUser);
  // }, []);
  return (
    <div className="f-container">
      <form id="signup" onSubmit={handleSubmitSignup}>
        <span className="s-f">
          <input
            className="s-p"
            required
            onChange={handleChangeSignup}
            value={signupValue.username}
            type="text"
            name="username"
            placeholder="Enter your full name..."
          />
          <input
            className="s-p"
            required
            onChange={handleChangeSignup}
            value={signupValue.email}
            type="email"
            name="email"
            placeholder="Enter you E-Mail..."
          />
        </span>
        <span className="s-f">
          <input
            className="s-p"
            onChange={handleChangeSignup}
            value={signupValue.password}
            type="password"
            name="password"
            placeholder="Enter your Password..."
          />
          <input
            className="s-p"
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            type="password"
            name="rePassword"
            placeholder="Repeat your Passowrd..."
          />
        </span>
        <h4>{passwordNotMatch}</h4>
        <h4>{passwordReq}</h4>

        <input
          className="f"
          required
          onChange={handleChangeSignup}
          value={signupValue.city}
          type="text"
          name="city"
          placeholder="Enter City..."
        />
        <input
          className="f"
          required
          onChange={handleChangeSignup}
          value={signupValue.street}
          type="text"
          name="street"
          placeholder="Enter Street..."
        />
        <input
          className="f"
          required
          onChange={handleChangeSignup}
          value={signupValue.plz}
          type="text"
          name="plz"
          placeholder="Enter PLZ..."
        />

        <input
          className="f"
          required
          onChange={handleChangeSignup}
          value={signupValue.tel}
          type="tel"
          name="tel"
          placeholder="Enter mobile-Nr..."
        />
        <button id="f-btn">Sign up</button>
        <Link to="/signin">Already have an account ?</Link>
      </form>
    </div>
  );
}

export default SignUp;
