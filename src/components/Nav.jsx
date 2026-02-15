import React, { useState } from 'react'
import sty_nav from "./Nav.module.css"
import AnimatedButton from './AnimatedButton'
import logo from "../assets/logo.png"
import Callus from './Callus'



const Nav = () => {
  const [x, setx] = useState(false);
  return (
    <div className={sty_nav.Navmain}>
      <img src={logo} alt="logo" />
      
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
          <Callus />
        </div>
      </div>
    </div>
  )
}

export default Nav
