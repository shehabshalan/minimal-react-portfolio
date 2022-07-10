import React, { useState } from "react";
import "./Navbar.css";
import { MdLightMode, MdNightlight, MdMenu, MdClose } from "react-icons/md";

const mobileMenu = (toggleTheme, theme) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="mobile-menu">
      <div className="mobile-menu-toggle" onClick={toggle}>
        <MdMenu size={30} />
      </div>
      {isOpen && (
        <div className="mobile-menu-content" onClick={toggle}>
          <ul>
            <li>
              <div className="mobile-menu-toggle-close">
                <MdClose size={30} />
              </div>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
        </div>
      )}
    </header>
  );
};

const Navbar = ({ toggleTheme, theme }) => {
  const logo = "{SS}.";
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>{logo}</h1>
        </div>
        {mobileMenu(toggleTheme, theme)}
        {/* desktop menu */}
        <ul className="nav-list">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
    </header>
  );
};

export default Navbar;
