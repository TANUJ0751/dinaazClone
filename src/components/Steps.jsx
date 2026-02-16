import React, { useState } from "react";
import styles from "./Steps.module.css";

const stepsData = [
  {
    number: "01",
    title: "Medical Consultation",
    description: "A detailed evaluation by a dermatologist.",
  },
  {
    number: "02",
    title: "Accurate Diagnosis",
    description: "Understanding the root cause of your concern.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description: "Only treatments that are medically necessary.",
  },
  {
    number: "04",
    title: "Ongoing Care & Follow-Ups",
    description: "Focused on long-term skin and hair health.",
  },
];

const Steps = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleClick = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      {stepsData.map((step, index) => (
        <div
          key={step.number}
          className={`${styles.step} ${hasAnimated ? styles.animate : ""}`}
          style={{ "--i": index }}
        >
        
          {index !== stepsData.length - 1 && (
            <div className={styles.line_container}>
               <div className={styles.line_bg}></div> {/* Grey Line */}
               <div className={styles.line_active}></div> {/* Teal Moving Line */}
            </div>
          )}

          {/* Circle Number */}
          <div className={styles.circle}>{step.number}</div>

          {/* Text Content */}
          <div className={styles.content}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;