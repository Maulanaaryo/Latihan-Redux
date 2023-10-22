import { MainContent} from "./components";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { LoginPage } from "./pages";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkToken = localStorage.getItem("isLoggedIn");
    console.log("checkToken:", checkToken);
    if (checkToken) {
      dispatch({
        type: "INIT_USER_INFO",
      });
    }
  }, [dispatch]);
  console.log("IsLoggedIn state:", isLoggedIn);

  return (
    <div>
      {isLoggedIn ? <MainContent /> : <LoginPage />}
    </div>
  );
}

export default App;
