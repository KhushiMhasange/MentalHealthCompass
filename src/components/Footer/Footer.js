import React from "react";
import "./Footer.css";
import logo from '../../img/MHLogo.png'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="info-container">
          <p>Our website is dedicated to providing resources, support, and information on mental health and suicide prevention. We're here to help you take the first step towards healing and recovery, professional help recommend in case of severe issues.</p>
        </div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
