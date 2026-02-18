import React, { useState } from 'react'
import sty_nav from "./Nav.module.css"
import AnimatedButton from './AnimatedButton'
import logo from "../assets/logo.svg"
import logo2 from "../assets/navLogo (3).png"




const Nav = () => {
  const [x, setx] = useState(false);
  return (
    <div className={sty_nav.Navmain}>
      <div className={sty_nav.navLogo}>


        <img src={logo2} alt="" className={sty_nav.logo2} />
        <img src={logo} alt="logo" className={sty_nav.logo1} />

      </div>
      <div className={sty_nav.navActions} onClick={() => setx(!x)}>
        {/* Desktop Button Container */}
        <div className={sty_nav.desktopOnly}>
          <AnimatedButton
            bgColor="rgb(222, 148, 51)"
            textColor="white"
            hoverBg="rgb(205, 138, 49)"
            hoverText="#ffffff"
          />
        </div>

        {/* Mobile Button Container */}
        <div className={sty_nav.mobileOnly}>
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

export default Nav
