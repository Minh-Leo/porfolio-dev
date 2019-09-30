import React from "react";
import {Link} from "react-router-dom";
import Icon from "../images/minhlogo.png";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Icon} alt='icon' className='image' />
      </div>
      <div style={{maxWidth: "200px"}} />
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>My Projects</Link>
        <Link to='/'>My CV</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
