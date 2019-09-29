import React from "react";
import { Link } from "react-router-dom";
import Icon from "../images/icon.jpg";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Icon} alt="icon" className="image" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">My Projects</Link>
        <Link className="lin" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
