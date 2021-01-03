import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "./images/logo.png";
import "./assets/styles/navbar.css";

const NavItem = (props) => {
  const { to, children } = props;
  return (
    <NavLink className="nav-item" to={to}>
      {children}
    </NavLink>
  );
};

const NavBar = (props) => (
  <nav className="nav-bar">
    <NavItem to="/">Home</NavItem>
    {/* <NavItem to="/team">Our Team</NavItem> */}
    <NavItem to="/console">Console</NavItem>
    <div className="nav-bar-logo-container">
      <NavLink to="/console">
        <img className="nav-bar-logo" src={Logo} alt="logo" />
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
