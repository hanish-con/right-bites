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
      <footer className="footer mt-2">
        <div class="footer-container">
          <div class="footer-column">
            <h3>About Us</h3>
            <p>
              At Right Bites, we inspire healthy living through simple and
              delicious recipes. Join us in making wholesome eating fun and
              accessible.
            </p>
          </div>
          <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#welcome">Home</a>
              </li>
              <li>
                <a href="#recipes">Recipes</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#tips">Healthy Tips</a>
              </li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Follow Us</h3>
            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Right Bites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
