import React from 'react';
import styles from './Callbutton.module.css';

const CallButton = () => {
  return (
    <button className={styles.btnClinic}>
      <span>Call The Clinic</span>
      
      <div className={styles.iconContainer}>
        {/* Pehla Arrow */}
        <svg 
          className={`${styles.arrowSvg} ${styles.arrow1}`} 
          width="24" height="24" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>

        {/* Dusra Arrow */}
        <svg 
          className={`${styles.arrowSvg} ${styles.arrow2}`} 
          width="24" height="24" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
    </button>
  );
};

export default CallButton;