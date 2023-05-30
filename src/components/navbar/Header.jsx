import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { context } from "../context/Context";
import "./header.css";
import logo from "./logo3.jpg";
import { useContext } from "react";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const Header = () => {
  let { signinValue, users, setSigninValue } = useContext(context);
  let findUser = users?.find((user) => user?.email === signinValue?.siEmail);

  let [findUserState, setFindUserState] = useLocalStorage(
    findUser?.email,
    findUser
  );
  let handleDelete = (index) => {
    let newItems = findUserState?.cart.filter((item, i) => i !== index);
    setFindUserState({ ...findUserState, cart: newItems });
  };

  // useEffect(() => {
  //   setFindUserState(findUser);
  // }, []);
  // const {
  //   state: { cart },
  //   dispatch,
  // } = CartState();

  return (
    <Navbar variant="dark" style={{ height: 100 }}>
      <Container>
        <Navbar.Brand className="logo">
          <Link to="/">
            <img className="logo_img" src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>

        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Link className="menu-btn" to="/menu">
            Menu
          </Link>
        )}
        <Nav>
          {findUser && (
            <Dropdown alignRight>
              <Dropdown.Toggle variant="success">
                <FaShoppingCart
                  color="white"
                  style={{ marginLeft: "10px" }}
                  fontSize="25px"
                />
                <Badge>{findUserState?.cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {findUserState?.cart.length > 0 ? (
                  <>
                    {findUserState?.cart.map((prod, index) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.name}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.name}</span>
                          <span>$ {prod.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer", color: "green" }}
                          onClick={() => handleDelete(index)}
                        />
                      </span>
                    ))}

                    <Link to="/cart">
                      <Button
                        style={{
                          width: "95%",
                          margin: "0 10px",
                          backgroundColor: "green",
                        }}
                      >
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          )}

          <div id="sign">
            {findUser ? (
              <Link
                to="/signin"
                onClick={() => setSigninValue({ siEmail: "", siPassword: "" })}
              >
                Sign out
              </Link>
            ) : (
              <Link to="/signin">Login</Link>
            )}

            <span>{findUser?.username}</span>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
