import React from "react";
import { GoBell } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="user-info">
        <GoBell size={20} />
        <FaUserCircle className="icon" />
        <span style={{ fontWeight: "bold" }}>Mohit</span>
        <IoIosArrowDown />
      </div>
    </header>
  );
};

export default Navbar;
