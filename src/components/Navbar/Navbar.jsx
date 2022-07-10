import React from "react";
import "./Navbar.css";
import { MdLightMode, MdNightlight } from "react-icons/md";

const Navbar = ({ toggleTheme, theme }) => {
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
        <li>
          <a onClick={toggleTheme}>
            {theme === "light" ? (
              <MdNightlight className="icon" size={30} />
            ) : (
              <MdLightMode className="icon" size={30} />
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
