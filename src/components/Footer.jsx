import React from 'react';
import logo from '../assets/logo.png'; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  const date = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Voile Logo" draggable="false"  />
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <h4>ABOUT US</h4>
          <ul>
            <li>SHIPPING METHODS</li>
            <li>PAYMENT METHODS</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS OF USE</li>
          </ul>
        </div>

        <div className="footer-center">
          <h4>STORE</h4>
          <p>
            PARIS 3273<br />
            TEL: 210777827289<br />
            EMAIL: info@voile.com
          </p>
          
        </div>

        <div className="footer-right">
          <h4>SOCIALS</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
         
        </div>
         
      </div>

      <div className='copyright-container'>
          <p className="copyright">
            &copy; {date} Voile. Made by C. Katsaros.
          </p>
          </div>
    </footer>
  );
}

export default Footer;
