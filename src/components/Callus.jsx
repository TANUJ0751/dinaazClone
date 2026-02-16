import React, { useState } from "react";
import styles from "./AnimatedButton.module.css"; 

const Callus = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Colors
  const defaultBg = "rgb(222, 148, 51)";
  const hoverBg = "rgb(205, 138, 49)";

  const buttonStyle = {
    backgroundColor: isHovered ? hoverBg : defaultBg,
    color: "#ffffff",
    padding: "0 12px",
    minWidth: "174px",
    height: "48px",
    display: "flex",
    alignItems: "center",     
    justifyContent: "center",  
    borderRadius: "50px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    gap: "8px"
  };

  return (
    <a href="tel:+911234567890" style={{ textDecoration: "none" }}> 
      <div 
        className={styles.button} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
      >
        <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>Call Us</span>
        
        <div className={styles.arrowBox}>

          <svg className={styles.arrow} viewBox="0 0 16 16" style={{ fill: "white", width: "14px", height: "14px" }}>
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
          </svg>
          <svg className={styles.arrow} viewBox="0 0 16 16" style={{ fill: "white", width: "14px", height: "14px" }}>
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Callus;