import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import {NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex items-center justify-around max-w-[100%] w-[100%] pt-[2rem]">
      <div className="max-w-[30%] w-[10%]">
        <img className="w-[4rem]" src={logo} alt="logo" />
      </div>
      <div className="max-w-[70%] w-[53%]">
        <ul className="flex justify-between items-center">
          <li className="text-[16px] font-[Inter] font-[700] leading-[19.36px]">
            <NavLink  className={({ isActive }) =>
              isActive ? "text-[#CC9615]" : "text-[#FFFFFF]"
            }  to="/">Home</NavLink>
          </li>
          <li className="text-[16px] font-[Inter] font-[700] leading-[19.36px] text-black">
            <NavLink className={({ isActive }) =>
              isActive ? "text-[#CC9615]" : "text-[#FFFFFF]"
            }  to="/whyChooseUs">Why Choose Us</NavLink>
          </li>
          <li className="text-[16px] font-[Inter] font-[700] leading-[19.36px]">
            <NavLink className={({ isActive }) =>
              isActive ? "text-[#CC9615]" : "text-[#FFFFFF]"
            }  to="/practiceArea">Practice Area</NavLink>
          </li>
          <li className="text-[16px] font-[Inter] font-[700] leading-[19.36px]">
          <NavLink className={({ isActive }) =>
              isActive ? "text-[#CC9615]" : "text-[#FFFFFF]"
            }  to="/counselling">Counseling</NavLink>
          </li>
          <li className="text-[16px] font-[Inter] font-[700] leading-[19.36px]">
            <NavLink className={({ isActive }) =>
              isActive ? "text-[#CC9615]" : "text-[#FFFFFF]"
            }  to="/faqs">FAQs</NavLink>
          </li>
          <NavLink className={({ isActive }) =>
              isActive ? "text-[#CC9615]" : "text-[#FFFFFF]"
            }  to="/contact">
          <Button text="Contact Us"/>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
