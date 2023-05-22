import React, { useContext } from "react";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import Baner from "../components/baner/Baner";
import { context } from "../components/context/Context";

function Home() {
  let { users, signinValue } = useContext(context);

  let findUser = users.find((user) => user.email === signinValue.siEmail);
  let [findUserState, setFindUserState] = useLocalStorage(
    findUser?.email,
    findUser
  );
  // useEffect(() => {
  //   findUser = users.find((user) => user.email === signinValue.siEmail);
  //   setFindUserState(findUser);
  // }, []);
  return (
    <div>
      <Baner />
    </div>
  );
}

export default Home;
