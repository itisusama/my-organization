import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/navbar/MainNavbar";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <MainNavbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}