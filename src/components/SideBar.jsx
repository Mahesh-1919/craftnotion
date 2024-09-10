import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import { IoCubeOutline } from "react-icons/io5";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <LiaStarOfLifeSolid />
        <h2>Analytics Platform</h2>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className="active">
          <IoCubeOutline />
          Dashboard
        </a>
        <a href="#">
          <FaSearchDollar className="icon" />
          Analysis
        </a>
        <a href="#">
          <IoWalletOutline className="icon" />
          Wallet
        </a>
      </nav>
      <div className="sidebar-footer">
        <div className="support">
          <a href="#">
            <MdOutlineSupportAgent className="icon" />
            Support
          </a>
          <span>8</span>
        </div>

        <a href="#">
          <HiOutlineArrowRightStartOnRectangle className="icon" />
          Sign Out
        </a>
      </div>
    </div>
  );
};

export default SideBar;
