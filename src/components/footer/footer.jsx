import "./footer.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-one">
          <h2>WE ARE USMAN,
          BUT SOMETHING ELSE!</h2>
        </div>
        <div className="footer-two">
          <div className="ft-one">
            <h2>We strive for the extraordinary in every project fueled by a tremendous passion for design</h2>
          </div>
          <div className="ft-two ">
            <h2>HTIMEST@GMAIL.COM</h2>
             <h2>+92-320-6206505</h2>
          </div>
        </div>
        <div className="head">
          <h1>USMAN</h1>
        </div>
        <div className="privacy">
          <div className="cookies">
            <h2>PRIVACY POLICY</h2>
            <h2>COOKIE POLICY </h2>
          </div>
          <div className="links">
            <h2><a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer">
         BEHANCE
         </a></h2>
         <h2><a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer">
         LINKEDIN
         </a></h2>
         <h2><a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer">
         GITHUB
         </a></h2>
          </div>
        </div>
    </div>
  )
}

export default Footer;