import React, { useContext } from "react";
import { useEffect } from "react";
import Baner from "../components/baner/Baner";
import { context } from "../components/context/Context";

function Home() {
  let { findUser, setFindUserState, users, signinValue } = useContext(context);

  useEffect(() => {
    findUser = users.find((user) => user.email === signinValue.siEmail);
    setFindUserState(findUser);
  }, []);
  return (
    <div>
      <Baner />
    </div>
  );
}

export default Home;
