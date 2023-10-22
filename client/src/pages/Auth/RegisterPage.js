import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) navigate("/");
  }, [navigate]);

  const register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/users", {
        username: username,
        password: password,
      });

      if (data) {
        dispatch({
          type: "LOGIN",
          payload: {
            userInfo: data.user,
          },
        });
        navigate("/");
      } else {
        console.error("Registration failed");
      }
      console.log("Response Data:", data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <form onSubmit={register}>
            <h2 className="mb-3">Register</h2>
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
              Already Have Account?{" "}
              <Link to="/login" className="account">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
