import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-small justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-4 font-[playfair-display] mt-[20px]">
         
          <NavLinks />
          <li>
            <Link to="/" className="py-7 inline-block" style={{textDecoration: "none", color: "black"}}>
              Our Portfolio
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 inline-block" style={{textDecoration: "none", color: "black"}}>
              Technologies
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 inline-block" style={{textDecoration: "none", color: "black"}}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
    
          <NavLinks />

          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Our Portfolio
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Technologies
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
