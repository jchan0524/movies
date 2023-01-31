import React, { createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Producer from "./pages/Producer";
import Header from "./Components/Header";
import Stage from "./pages/Stage";
import Production from "./pages/Production";
import InvestorDashboard from "./pages/InvestorDashboard";
import DocumentUpload from "./pages/DocumentUpload";

export const LoginContext = createContext();

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producer" element={<Producer />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/production" element={<Production />} />
        <Route path="/investor" element={<InvestorDashboard />} />
        <Route path="/document" element={<DocumentUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
