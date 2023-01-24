import React, { createContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Producer from "./pages/Producer";
import Header from "./Components/Header";
import Stage from "./pages/Stage";

export const LoginContext = createContext();

function App() {
  return (
    <BrowserRouter>
    {/* <Header> */}
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/production" element={<Producer />} />
          <Route path ='/stage' element={<Stage/>} />
        </Routes>

        {/* </Header> */}
      
    </BrowserRouter>
  );
}

export default App;
