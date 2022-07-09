import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const logo = "{SS}.";
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>{logo}</h1>
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
