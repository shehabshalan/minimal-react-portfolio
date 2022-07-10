import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Contact from "./components/Contact/Contact";
const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <div className={`${theme} app`}>
      <main>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
