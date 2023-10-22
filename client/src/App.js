import { MainContent } from "./components";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    console.log(checkLogin);
    if (checkLogin) {
      dispatch({
        type: "USER_INFO",
      });
    }
  }, [dispatch]);
  console.log(isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <MainContent isLoggedIn={isLoggedIn} /> : <MainContent />}
    </div>
  );
}

export default App;
