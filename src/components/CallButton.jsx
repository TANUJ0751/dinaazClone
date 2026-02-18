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
  width="26"
  height="26"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.3"   // 🔹 arrow thickness yahi se control hota hai
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M3 13L13 3M13 3H6M13 3V10" />
</svg>


        {/* Dusra Arrow */}
        <svg
  className={`${styles.arrowSvg} ${styles.arrow2}`}
  width="26"
  height="26"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.3"   // 🔹 arrow thickness yahi se control hota hai
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M3 13L13 3M13 3H6M13 3V10" />
</svg>

      </div>
    </button>
  );
};

export default CallButton;