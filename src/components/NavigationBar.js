import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css";
export const NavigationBar = () => {
  const navigate=useNavigate();
  return (
    <div className="nav-wrapper">
      <h2 onClick={()=>navigate("/")}>TopGuns Bank</h2>
      <nav>
      {/* <link to="/">
        Customer Information
      </link> */}
        <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/scb">SCB</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
