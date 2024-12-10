import React from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import Food from "./components/Food";

import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/food" element={<Food />} />
      </Routes>
      <footer id="footer">
        <p>Restaurant Website &copy; all rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
