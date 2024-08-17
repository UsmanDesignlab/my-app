import { Link } from "react-router-dom";
import { useState } from "react";
import "./head.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate the movement values
    const moveX = (clientX / windowWidth) * 30 - 10; // Adjust 20 for speed, -10 to center
    const moveY = (clientY / windowHeight) * 30 - 10; // Adjust 20 for speed, -10 to center

    setPosition({ x: moveX, y: moveY });
  };

  return (
    <div className="menu-container">
      <div className="logo">
        <h2>[&nbsp;USMAN STUDIO&nbsp;]</h2>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        <h2>{isOpen ? '[ CLOSE ]' : '[ MENU ]'}</h2>
      </div>
      <div className={`menu-div ${isOpen ? 'open' : 'closed'}`}>
      <div className="menu">
      <div
            className="pic-one"  onMouseMove={handleMouseMove}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`
            }}
      ></div>
      <div className="menu-li"  onMouseMove={handleMouseMove}>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="showcase">SHOWCASE</Link></li>
        <li><Link to="about">ABOUT</Link></li>
        <li><Link to="contact">CONTACT</Link></li>
      </ul>
      </div>
      </div>
       <div className="contact">
         <div className="info">
          <h4>HTIMEST@GMAIL.COM</h4>  
          <h4>+92 320 6206505</h4>
         </div>
         <div className="social">
         <a href="https://www.behance.net/UsmanDesignLab" target="_blank" rel="noopener noreferrer">
         BEHANCE
         </a>
         <a href="https://www.linkedin.com/in/muhammad-usman-b1b16429a/" target="_blank" rel="noopener noreferrer">
        LINKEDIN
        </a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        GITHUB
        </a>
         </div>
       </div>
      </div>
    </div>
  );
};

export default Header;

