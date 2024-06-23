import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa"; // Import FaInstagram for Instagram icon
import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>Parvathi</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          {/* Replace SiLinkedin with FaInstagram for Instagram link */}
          <a href="https://www.instagram.com/parvathi_bathpowder" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@Parvathibathpowder" target="_blank" rel="noopener noreferrer">
                    <BsYoutube />
                    </a>
          {/* <FaFacebookF /> */}
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          
        </div>
        <div className="footer-section-columns">
          <span>+91 9177724244</span>
          <span>parvathibathpowder@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
