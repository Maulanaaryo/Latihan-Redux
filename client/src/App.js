import { MainContent, Navbar } from "./components";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { checkUserLogin } from "./reducers/userAuth";

function App() {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.isLogin);

  useEffect(() => {
    dispatch(checkUserLogin());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
