import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { setAuthToken } from "../utils/api";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
    } catch (error) {
      alert("Login error:", error);
    }
  };
  const loginUser = async (email, password) => {
    try {
      if (typeof window !== "undefined") {
        if (localStorage.getItem("user") && localStorage.getItem("authToken")) {
          localStorage.removeItem("user");
          localStorage.removeItem("authToken");
        }
      }

      const response = await axios.post(`${process.env.API_URL}auth/login`, {
        email,
        password,
      });

      setAuthToken(response.data.data.access_token);
      const user = response.data.data;

      if (typeof window !== "undefined") {
        const stringifiedUserData = JSON.stringify(response.data);
        localStorage.setItem("user", stringifiedUserData);
        localStorage.setItem("authToken", response.data.data.access_token);
        if (user?.user?.is_admin) {
          navigate("/dashboard/users/");
        } else {
          navigate("/");
        }
      }

      return response.data;
    } catch (error) {
      if (
        error?.response?.statusText === "Unauthorized" ||
        error?.response?.data?.message === "Unauthenticated."
      ) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("user");
          localStorage.removeItem("authToken");
          window.location.reload();
        }
      }
      toast.error("Setting user in local storage error:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-header">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mb-4"
                      placeholder="Enter email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mb-4"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </form>
                <p className="text-center mt-3">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
