import React from "react";
import "./Footer.css";
import gitHub from "../assets/github-mark.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-light">
        <a
          className="footerContainer"
          href="https://github.com/russell-gh/hospitality-hunt"
        >
          <div>Hospitality Hunt &nbsp;</div>
          <img src={gitHub} alt="GitHub logo" />
        </a>
        <div>&#169; 2023</div>
      </footer>
    </>
  );
};

export default Footer;
