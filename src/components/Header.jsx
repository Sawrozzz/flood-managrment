import React from "react";
import "./header.css";
import Logo from "../assets/logo.svg";
import { FaBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chatbot from "../pages/chatbot/Chatbot";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to='/' className="logo">
          <img src={Logo} alt="" />
        </Link>
        <div className="icons">
          <input type="text" placeholder="Search" />
          <FaSearch className="search" />
          <FaBell />
        </div>

        <Chatbot />
      </div>
    </div>
  );
};

export default Header;
