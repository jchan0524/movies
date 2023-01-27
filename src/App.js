import React, { createContext, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Producer from "./pages/Producer";
import Header from "./Components/Header";
import Stage from "./pages/Stage";
import Production from "./pages/Production";
import InvestorDashboard from "./pages/InvestorDashboard";
import DocumentUpload from "./pages/DocumentUpload";
import Log from "./pages/Log";

export const LoginContext = createContext();

function App() {
  return (
    <BrowserRouter>
    <Header/>
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/producer" element={<Producer />} />
          <Route path ='/stage' element={<Stage/>} />
          <Route path ='/production' element={<Production/>}/>
          <Route path="/investor" element={<InvestorDashboard/>}/>
          <Route path="/document" element={<DocumentUpload/>}/>
          <Route path="/signin" element={<Log/>}/>
        </Routes>

        
      
    </BrowserRouter>
  );
}

export default App;
