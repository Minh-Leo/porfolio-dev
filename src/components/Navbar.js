import React from "react";
import {Link} from "react-router-dom";
import Icon from "../images/minhlogoblack.png";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Icon} alt='icon' className='image' />
      </div>
      <div
        style={{
          width: "30vw",
          borderBottom: "1px solid #393939"
        }}
      />
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>My Projects</Link>
        <Link to='/'>My Resume</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
