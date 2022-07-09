import * as React from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./App.css";
const App = () => {
  return (
    <main className="container">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
};

export default App;
