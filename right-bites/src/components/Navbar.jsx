import React from "react";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Right Bites</div>
      <ul className="navbar-links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/food"}>Menu</Link>
        </li>
        <li>
          <Link to={"#about"}>About</Link>
        </li>
        <li>
          <Link to={"#contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
