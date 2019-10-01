import React from 'react';

import fb from 'assets/icons/facebook.svg';
import twitter from 'assets/icons/twitter.svg';
import instagram from 'assets/icons/instagram.svg';

import corporatePacket from 'assets/EOH-100-Corporate-Packet.pdf';

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
        <a href={corporatePacket}>Support Us</a>
        <p> | </p>
        <a href="mailto:eoh@ec.illinois.edu">Contact Us</a>
      </div>
    </div>
  );
  
  export default Footer;