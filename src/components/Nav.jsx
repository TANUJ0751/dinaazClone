import React, { useState } from 'react'
import sty_nav from "./Nav.module.css"
import AnimatedButton from './AnimatedButton'
import logo from "../assets/logo.png"



const Nav = () => {
  const [x ,setx] = useState(false);
  return (
    <div className={sty_nav.Navmain} >
      <img src={logo} alt="" />
      <div onClick={()=> setx(!x)} >
           <AnimatedButton 
  bgColor="rgb(222, 148, 51)" 
  textColor="white" 
  hoverBg="rgb(205, 138, 49)"  
  hoverText="#ffffff" 
/>

      </div>
    </div>
  )
}

export default Nav
