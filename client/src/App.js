import { MainContent, Navbar } from "./components";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { LoginPage } from "./pages";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const checkToken = localStorage.getItem("isLoggedIn");
    if (checkToken) {
      dispatch({
        type: "INIT_USER_INFO",
      });
      navigate("/");
    }
  }, [dispatch, navigate]);

  return <div>{isLoggedIn ? <MainContent /> : <LoginPage />}</div>;
}

export default App;
