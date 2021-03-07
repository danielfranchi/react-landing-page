import React from "react";
import Logo from "../../images/Logo/Logo";
import Button from "../Button/Button";

import "../../styles/Header/Header.css";

const Header = () => {
  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <Logo />
        </div>

        <nav className="menu-nav" data-testid="list">
          <ul>
            <li data-testid="item">About</li>
            <li>Help</li>
            <li>Features</li>
            <li>Signup</li>
          </ul>
        </nav>

        <div className="btn">
          <Button text="Request Demo" color="#212353" background="FFFFFF" />
        </div>
      </div>
    </header>
  );
};

export default Header;
