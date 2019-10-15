import React from "react";
import {NavLink} from "react-router-dom";
import Icon from "../images/minhlogoblack.png";

function Navbar() {
  return (
    <nav>
      <div>
        <img src={Icon} alt='icon' className='image' />
      </div>
      <div
        style={{
          width: "20vw",
          borderBottom: "1px solid #393939"
        }}
      />
      <div className='nav-links'>
        <NavLink exact to='/' activeClassName='current'>
          Home
        </NavLink>
        <NavLink exact to='/projects' activeClassName='current'>
          My Projects
        </NavLink>
        <NavLink exact to='/resume' activeClassName='current'>
          My Resume
        </NavLink>
        <NavLink exact to='/about' activeClassName='current'>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
