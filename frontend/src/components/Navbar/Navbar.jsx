import React from "react";
import Logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <a href="/#" className="nav__logo">
          <img src={Logo} alt="logo" />
          Albums
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
