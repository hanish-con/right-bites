import React from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import Food from "./components/Food";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/food"}>Food Menu</Link>
            </li>
            <li>
              <Link to={"#"}>Contact Us</Link>
            </li>
          </ul>
          <h1 className="logo">Tasty</h1>
        </div>
      </nav>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </main>
      <footer id="footer">
        <p>Restaurant Website &copy; all rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
