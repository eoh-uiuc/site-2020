import React from 'react';
import { Link } from 'react-router-dom';

import fb from 'assets/icons/facebook.svg';
import twitter from 'assets/icons/twitter.svg';
import instagram from 'assets/icons/instagram.svg';

import './styles.scss';

const Footer = () => (
    <div className="footer">
      <div className="links">
        <a href="https://www.facebook.com/EngineeringOpenHouse/" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" />
        </a>
        <a href="https://twitter.com/IllinoisEOH" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/eoh_illinois/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
      <div className="lower-links">
        <Link to="/sponsor">Support Us</Link>
        <p> | </p>
        <a href="mailto:eoh@ec.illinois.edu">Contact Us</a>
      </div>
    </div>
  );
  
  export default Footer;