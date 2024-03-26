import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/register`,
        formData
      );
      const stringifiedUserData = JSON.stringify(response.data);
      localStorage.setItem("user", stringifiedUserData);
      localStorage.setItem("authToken", response.data.data.access_token);
      if (typeof window !== "undefined") {
        const stringifiedUserData = JSON.stringify(response.data);
        localStorage.setItem("user", stringifiedUserData);
        localStorage.setItem("authToken", response.data.data.access_token);
        navigate("/");
      }
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
                <h3>Register</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="form-control mb-4"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email Address"
                      className="form-control mb-4"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="form-control mb-4"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="password_confirmation"
                      placeholder="Please Confirm your Password"
                      className="form-control mb-4"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </form>
                <p className="text-center mt-3">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
