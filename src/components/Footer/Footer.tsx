import React from "react";
import ImgFooter from "../../images/Footer/ImgFooter";
import Button from "../Button/Button";

import "../../styles/Footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <div id="footer-text">
        <div id="footer-h1">
          <h1>Try for free!</h1>
          <p>Get limited 1 week free try our features!</p>
        </div>
        <div id="footer-btn">
          <Button text="Learn more" color='#FFFFFF' background='#F063B8'/>
          <Button text="Request Demo" color='#212353' background='FFFFFF'/>
        </div>
      </div>

      <footer id="footer-container">
        <ImgFooter />
      </footer>
    </div>
  );
};

export default Footer;
