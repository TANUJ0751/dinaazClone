import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styles from './DisNav.module.css'
import logo from "../assets/logo.png"
import logo2 from "../assets/navLogo (3).png"
// import Callus from './Callus'
import AnimatedButton from './AnimatedButton'
import MegaMenu from './MegaMenu'

const DisNav = () => {
  const [showServices, setShowServices] = useState(false);

  // Toggle function jo click par state badlegi
  const handleServicesClick = (e) => {
    e.preventDefault(); // Page reload hone se rokne ke liye
    setShowServices(!showServices);
  };

  return (
    <div className={styles.Navmain}>
      <div className={styles.navLogo}>
        <img src={logo2} alt="" className={styles.logo2} />
        <img src={logo} alt="logo" className={styles.logo1} />
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Home
          </Link>
        </li>
        <li><a href="/about">About Us</a></li>

        {/* onClick Event use kiya gaya hai */}
        <li className={styles.dropdown}>
          <a
            href="#"
            className={styles.navItem}
            onClick={handleServicesClick}
          >
            Services
            <span className={`${styles.arrowDown} ${showServices ? styles.rotate : ''}`}></span>
          </a>

          {/* Agar showServices true hai tabhi MegaMenu dikhega */}
          {showServices && (
            <div className={styles.megaMenuWrapper}>
              <MegaMenu />
            </div>
          )}
        </li>

        <li><a href="/results">Results</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>

      <div className={styles.navActions}>
        <div className={styles.desktopOnly}>
          <AnimatedButton bgColor="rgb(222, 148, 51)" textColor="white" />
        </div>
        <div className={styles.mobileOnly}>
         <AnimatedButton
          buttonText = "Call Us" 
            bgColor="rgb(222, 148, 51)"
            textColor="white"
            hoverBg="rgb(205, 138, 49)"
            hoverText="#ffffff"
          />
        </div>
      </div>
    </div>
  )
}

export default DisNav