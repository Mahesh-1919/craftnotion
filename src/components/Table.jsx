import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";

const Table = () => {
  return (
    <div className="recent-analysis">
      <div className="table-header">
        <h3>Recent Analysis</h3>
        <button className="run-analysis-btn">
          <IoRocketOutline />
          Run Analysis
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Analysis ID</th>
            <th>Date</th>
            <th>Input File</th>
            <th>Output File</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {["ANL55258", "ANL84290", "ANL10929", "ANL44414", "ANL43799"].map(
            (id) => (
              <tr key={id}>
                <td className="analysis-id">#{id}</td>
                <td>29th Aug, 2024</td>
                <td className="file-link">
                  <button>View</button>
                </td>
                <td className="file-link">
                  <button>View</button>
                </td>
                <td>Intermarket Analysis</td>
                <td>
                  <IoEyeOutline className="icon" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
