import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import MultiStep from "./pages/MultiStep";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MultiStep />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
