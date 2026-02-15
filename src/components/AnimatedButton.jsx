import React, { useState } from "react";
import BookingForm from "./BookingForm"; 
import styles from "./AnimatedButton.module.css";


const AnimatedButton = ({ bgColor, textColor, hoverBg, hoverText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const defaultBg = bgColor || "#007a7a";
  const defaultText = textColor || "#ffffff";
  
  const finalHoverBg = hoverBg || defaultText;
  const finalHoverText = hoverText || defaultBg;

  const buttonStyle = {
    backgroundColor: isHovered ? finalHoverBg : defaultBg,
    color: isHovered ? finalHoverText : defaultText,
    
  };

  return (
    <div className={styles.container}>
      <div 
        className={styles.button} 
        onClick={togglePopup}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
      >
        <span>Book A Consultation</span>
        <div className={styles.arrowBox}>
          <svg 
            className={styles.arrow} 
            viewBox="0 0 16 16" 
            style={{ fill: isHovered ? finalHoverText : defaultText }}
          >
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
          </svg>
          <svg 
            className={styles.arrow} 
            viewBox="0 0 16 16" 
            style={{ fill: isHovered ? finalHoverText : defaultText }}
          >
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
          </svg>
        </div>
      </div>

      {isOpen && <BookingForm onClose={togglePopup} />}
    </div>
  );
};

export default AnimatedButton;