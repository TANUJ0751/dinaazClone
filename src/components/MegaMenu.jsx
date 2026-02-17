import React from 'react';
import styles from './MegaMenu.module.css';

const MegaMenu = () => {
  return (
    <div className={styles.megaMenuWrapper}>
      <div className={styles.megaContent}>
        
        {/* Column 1: Hair Treatments */}
        <div className={styles.megaColumn}>
          <h3 className={styles.columnTitle}>
            Hair Treatments <span className={styles.diagonalArrow}>↗</span>
          </h3>
          <ul className={styles.list}>
            <li><a href="/hair-fixing">Hair Fixing <span className={styles.icon}>✨</span></a></li>
            <li><a href="/hair-transplant">Hair Transplant <span className={styles.icon}>✨</span></a></li>
            <li><a href="/hair-prp">Hair PRP Plus <span className={styles.icon}>✨</span></a></li>
            <li><a href="/st-plus">Dinaaz ST Plus <span className={styles.icon}>✨</span></a></li>
          </ul>
        </div>

        {/* Column 2: Hair Treatments Continued */}
        <div className={styles.megaColumn}>
          <h3 className={styles.emptyHeader}>&nbsp;</h3>
          <ul className={styles.list}>
            <li><a href="/cover">Dinaaz Cover <span className={styles.icon}>✨</span></a></li>
            <li><a href="/regrow">Dinaaz Regrow <span className={styles.icon}>✨</span></a></li>
            <li><a href="/qr678">QR 678® Hair Therapy <span className={styles.icon}>✨</span></a></li>
            <li><a href="/stem-cell">Stem Cell Hair Therapy <span className={styles.icon}>✨</span></a></li>
          </ul>
        </div>

        {/* Column 3: Skin Treatments */}
        <div className={styles.megaColumn}>
          <div className={styles.verticalDivider}></div>
          <h3 className={styles.columnTitle}>
            Skin Treatments <span className={styles.diagonalArrow}>↗</span>
          </h3>
          {/* Aap yahan Skin ke links add kar sakte hain */}
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;