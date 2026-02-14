import React from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popupCard} onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button at Top Right */}
        <button className={styles.closeBtn} onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={styles.cardContent}>
          {/* Left Side: Branding */}
          <div className={styles.leftSection}>
            <div className={styles.brandingText}>
              <h1 className={styles.italicTitle}>Glow.</h1>
              <h1 className={styles.italicTitle}>Grow.</h1>
              <h1 className={styles.italicTitle}>Transform.</h1>
              <p className={styles.subTitle}>Book An Appointment Today!</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className={styles.rightSection}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>

              <div className={styles.inputGroup}>
                <label>Email ID</label>
                <input type="email" placeholder="Enter your email ID" />
              </div>

              <button type="submit" className={styles.bookBtn}>
                Book A Call <span>↗</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;