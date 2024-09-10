import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import { FaSearchDollar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { TfiTicket } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";

const MainComponent = () => {
  return (
    <div className="main-content">
      <Navbar />
      <main className="content">
        <div className="grid">
          <div style={{ gridColumn: "span 1" }}>
            <div className="totalbalance-card">
              <div className="card total-balance">
                <div>
                  <h3>Total Balance</h3>
                  <p className="balance">3038 Credits</p>
                  <p>12 transactions in July</p>
                </div>
                <IoWalletOutline />
              </div>

              {/* Add Credits Card */}
              <div className=" add-credits">
                <h3
                  style={{
                    marginBottom: "0",
                    textAlign: "center",
                    marginTop: "2rem",
                  }}
                >
                  Add Credits
                </h3>
                <p className="offer">
                  <span style={{ color: "#3b5df6" }}>500%</span> off on minimum
                  purchase off <span>₹400</span>
                </p>
                <div className="credit-card-info">
                  <div className="credit-info">
                    <span className="amount">
                      ₹ <span>0.00</span>
                    </span>
                    <div className="credits">
                      <div style={{ textAlign: "center", color: "#3b82f6" }}>
                        0
                      </div>
                      <span>credits</span>
                    </div>
                  </div>
                  <button className="add-credits-btn">Add Credits</button>
                </div>

                <div className="credit-options">
                  <div>
                    <span>550Cr</span>. for
                    <span>₹500</span>
                  </div>
                  <div>
                    <span>1100Cr</span>. for
                    <span>₹1000</span>
                  </div>
                  <div>
                    <span>2200Cr</span>. for
                    <span>₹2000</span>
                  </div>
                  <div>
                    <span>11000Cr</span>. for
                    <span>₹10000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: "span 2" }}>
            <div className="totalCards">
              <div className="card ">
                <div className="card-header">
                  <h3>Total Analysis</h3>
                  <FaSearchDollar className="icons" />
                </div>
                <p className="number">11</p>
                <p className="subtext">
                  vs last week <span>0%</span>{" "}
                  <GoArrowUpRight style={{ color: "green" }} />
                </p>
              </div>

              <div className="card ">
                <div className="card-header">
                  <h3>Total Tickets</h3>
                  <TfiTicket className="icons" />
                </div>
                <p className="number">8</p>
                <p className="subtext">8 active tickets</p>
              </div>
            </div>
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
};
export default MainComponent;
