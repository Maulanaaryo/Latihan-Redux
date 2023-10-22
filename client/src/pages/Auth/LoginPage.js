import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:3000/users?username=${username}`
      );
      if (!data.length) {
        console.error("User not found");
      } else {
        const user = data[0];
        if (user.password !== password) {
          console.error("Invalid Password");
        } else {
          dispatch({
            type: "AUTH",
            payload: {
              userInfo: user,
            },
          });
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <form onSubmit={login}>
            <h2 className="mb-3">Login</h2>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-4">
              Continue
            </button>

            <p className="mt-2">
              Don't have an account?{" "}
              <Link to="/register" className="account">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
