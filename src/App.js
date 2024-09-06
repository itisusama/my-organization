import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
     <div className="app-container">
      <BrowserRouter>
        <MainNavbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}