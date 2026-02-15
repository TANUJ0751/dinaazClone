import React from 'react';
import styles from './StorySection.module.css';
import AnimatedButton from './AnimatedButton';
import img from "../assets/image 7.png"
import CallButton from './CallButton';

const StorySection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Left Content Column */}
        <div className={styles.contentCol}>
          <div className={styles.head}>
          <span className={styles.subheading}>ABOUT US</span>
          <h2 className={styles.heading}>The Story Behind Dinaaz</h2>
          </div>
          <p className={styles.description}>
            Dinaaz Hair & Skin Clinic was founded by Mr. Munna, known as the 
            "real-life Munna Bhai", after experiencing early hair loss himself. 
            After navigating misleading treatments and expensive promises, he 
            envisioned a clinic built on:
          </p>
          
          <ul className={styles.pointsList}>
            <li>Honest medical advice</li>
            <li>Affordable, science-backed care</li>
            <li>Respect for patient trust</li>
          </ul>
          
          <p className={styles.footerText}>
            Dinaaz was created to make ethical dermatological care accessible to everyone.
          </p>
          
         <CallButton/>
        </div>

        {/* Right Image Column */}
        <div className={styles.imageCol}>
          {/* <div className={styles.photoFrame}> */}
            <img 
              src={img} 
              alt="Founders with Award" 
              className={styles.actualImage}
            />
          {/* </div> */}
        </div>

      </div>
    </section>
  );
};

export default StorySection;