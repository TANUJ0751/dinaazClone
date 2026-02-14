import React from "react";
import sty_home from "./Home.module.css";
import AnimatedButton from "./AnimatedButton";
// import heroImg from "../assets/hero.png";
import girlImg from "../assets/doc-Photoroom 1.png";
import CallButton from "./CallButton";

const Home = () => {
  return (
    <div className={sty_home.homeMain}>
      {/* <img src={heroImg} alt="hero" /> */}
      <div className={sty_home.phase1}>
        <div className={sty_home.textArea}>
          <h1>
            Dermatologist-Led <br /> Hair & Skin Treatments <br /> You Can Trust
          </h1>
          <p>
            Medical-grade diagnosis and personalized treatment for hair loss,
            skin conditions, and aesthetic concerns; never salon-based or
            package-driven care.
          </p>
          <div className={sty_home.textArea_button}>
           <CallButton/>
           <AnimatedButton 
  bgColor="rgb(222, 148, 51)" 
  textColor="white" 
  hoverBg="rgb(205, 138, 49)"  
  hoverText="#ffffff" 
/>
            
          </div>
        </div>

        <div className={sty_home.tickerWrapper}>
          <div className={sty_home.ticker}>
            <span>✔ Award-Winning Dermatologist</span>
            <span>✔ 10+ Years of Ethical Clinical Practice</span>
            <span>✔ Nationally & Internationally Recognized</span>

            {/* Repeat content for smooth infinite scroll */}
            <span>✔ Award-Winning Dermatologist</span>
            <span>✔ 10+ Years of Ethical Clinical Practice</span>
            <span>✔ Nationally & Internationally Recognized</span>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------- */}

      <div className={sty_home.phase2}>
        <center>
          <h3>THE DOCTOR</h3>
          <h1>Treatment By An Award-Winning Dermatologist</h1>
        </center>

        <div className={sty_home.mainArea}>
          <div className={sty_home.section1}>
            <p>
              {" "}
              At Dinaaz Hair & Skin Clinic, every patient is treated under the
              leadership of Dr. Nazia Iqbal, a highly experienced Dermatologist,
              Trichologist, and Cosmetologist with over 10 years of doctor-led
              clinical practice. <br />
              Dr. Nazia Iqbal is nationally and internationally recognized for
              excellence in dermatology and aesthetic medicine, with proven
              expertise in:
              <ul>
                <li>Medical skin treatments</li>
                <li>Hair loss diagnosis and restoration</li>
                <li>Ethical aesthetic dermatology</li>
              </ul>
            </p>
          </div>

          <div className={sty_home.section2}>
            <img src={girlImg} alt="" />
          </div>

          <div className={sty_home.section3}>
            <p>
              Patients trust Dinaaz because medical decisions are always made by
              a qualified dermatologist, not consultants or sales staff.
            </p>
            <div style={{ border: "1px solid black", borderRadius: "50px", display: "inline-block", overflow: "hidden" }}>

                  <AnimatedButton 
  bgColor="#ffffff13" 
  textColor="black" 
  hoverBg="rgb(21, 144, 153)"  
  hoverText="#ffffff" 
  style={{ border: "1px solid black", borderRadius: "20px" }}
/>
           </div>
          </div>
        </div>
      </div>


      {/* ------------------------------------------------------------------------------------- */}
    
  

    </div>
  );
};

export default Home;
