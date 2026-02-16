import React, { useEffect, useState } from "react";
import styles from "./Homepart2.module.css";
import backImg from "../assets/Property 1=rest.png";
import img1 from "../assets/Property 1=image 12.png";
import img2 from "../assets/Property 1=image 13.png";
import img3 from "../assets/Property 1=image 14.png";
import ImageCard from "./ImageCard";
import star from "../assets/star.png";
import Circle from "./Circle";
import AnimatedButton from "./AnimatedButton";
import MedicalCard from "./MedicalCard";
import cardImg1 from "../assets/cardImg1.png";
import cardImg2 from "../assets/cardImg2.png";
import cardImg3 from "../assets/cardImg3.png";
import cardImg4 from "../assets/cardImg4.png";
import Review from "./Review";
import phase31 from "../assets/phase31.png";
import phase32 from "../assets/phase32.png";
import multiImg from "../assets/multiImg.png";
import hairIcon from "../assets/icons.png";
import TreatmentCard from "./TreatmentCard";
import phase5Img from "../assets/img.png";
import phase5_circle from "../assets/Group 9.png";
import Steps from "./Steps";
import StorySection from "./StorySection";
import input from "../assets/Frame 1707335232.png";
import input_secImg1 from "../assets/Group 8.png";
import input_secImg2 from "../assets/Group 9 (1).png";
import phase6img from "../assets/Ellipse 16.png";
import phase6img2 from "../assets/Ellipse 16 (1).png";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import multiImgPhone from "../assets/result.png"
import skinimg from "../assets/girlSkin.png"
import washimg from "../assets/wash.png" 

const HomePart2 = () => {
  const images = [phase31, phase32];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images[0] ? images[1] : images[0]));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.HomePart2_main}>
      <div className={styles.phase1}>
        <div className={styles.pahse3Main}>
          <div className={styles.phase1_mainTextArea}>
            <div className={styles.phase1_textarea1}>
              <p>THE REAL PROBLEM</p>
              <h1>Why Most Hair & Skin Treatments Fail</h1>
            </div>


             <div className={styles.imageArea}>
            <div className={styles.imagePart1}>
              <div className={styles.CircleText}>
                <img src={circle1} alt="" />
              </div>
              <div className={styles.img1}>
                <ImageCard
                  backImg={backImg}
                  frontImg={img1}
                  text=" salon treatments with no diagnosis"
                />
              </div>
            </div>
            <div className={styles.imagePart2}>
              <div className={styles.img2}>
                <ImageCard
                  backImg={backImg}
                  frontImg={img2}
                  text=" Expensive procedures without understanding the root cause"
                />
              </div>
              <div className={styles.img3}>
                <ImageCard
                  backImg={backImg}
                  frontImg={img3}
                  text="One-size-fits-all packages "
                />
              </div>
            </div>
          </div>

            <div className={styles.phase1_textarea2}>
              <div className={styles.infoSection}>
                <p className={styles.introText}>
                  Many patients come to us after trying:
                </p>
                <ul className={styles.treatmentList}>
                  <li>Salon treatments with no diagnosis</li>
                  <li>One-size-fits-all packages</li>
                  <li>
                    Expensive procedures without understanding the root cause
                  </li>
                </ul>
                <p className={styles.summaryText}>
                  Skin and hair problems often look similar but require very
                  different medical treatments. Without proper diagnosis,
                  results are unpredictable, and sometimes harmful.
                </p>
              </div>
            </div>
          </div>

          <img src={star} alt="" className={styles.startImg} />

      
        </div>
      </div>

      {/* ----------------------------------------------------------------------- */}

      <div className={styles.phase2}>
        <div className={styles.phase2_head}>
          <div className={styles.phase2_circle}>
            <img src={circle2} alt="" />
          </div>

          <div className={styles.phase2text}>
            <h3>KEY DIFFERENCES</h3>
            <h1>What Sets Us Apart</h1>
          </div>
        </div>

        <div className={styles.phase2ImageSection}>
          <MedicalCard
            title="Ethical Medical Advice"
            description="Sometimes, the right decision is not to treat, and we’re honest about that."
            img={cardImg1} 
          />
          <MedicalCard
            title="Ethical Medical Advice"
            description="Sometimes, the right decision is not to treat, and we’re honest about that."
            img={cardImg2} 
          />
          <MedicalCard
            title="Ethical Medical Advice"
            description="Sometimes, the right decision is not to treat, and we’re honest about that."
            img={cardImg3}
          />
          <MedicalCard
            title="Ethical Medical Advice"
            description="Sometimes, the right decision is not to treat, and we’re honest about that."
            img={cardImg4} 
          />
        </div>

        <center className={styles.phase2Button}>
          <AnimatedButton
            bgColor="rgb(222, 148, 51)"
            textColor="white"
            hoverBg="rgb(205, 138, 49)"
            hoverText="#ffffff"
          />
        </center>
      </div>

      {/* --------------------------------------------------------------------- */}

      <div className={styles.phase3}>
        <div className={styles.phase3section1}>
          <p>TESTIMONIALS</p>
          <h1>
            What Our Patients Say About Our Services
          </h1>
        </div>

        <div className={styles.phase3section2}>
          <div className={styles.container}>
            {/* LEFT SIDE */}
            <div className={styles.left}>
              <Review />
            </div>

            {/* CENTER */}
            <div className={styles.center}>
              <div className={styles.quoteTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="60"
                  fill="currentColor"
                  class="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>

              <p className={styles.text}>
                Comparing to other clinics I don’t know but personally I
                preferred this clinic so I took consultation and it was so good
                later I took hair transplantation and also gfc I can see good
                grow
              </p>

              <div className={styles.quoteBottom}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="60"
                  fill="currentColor"
                  class="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
                  <div className={styles.reviewItemText}>
                                  <h4>Sandeep IV</h4>
                                  <p>4.9 ⭐ | 26/12/2025</p>
                                </div>
              <div className={styles.arrows}>
                <button className={styles.arrow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="26"
                    fill="#0c5858"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </button>
                <button className={styles.arrow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="26"
                    fill="#0c5858"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.right}>
              <div style={{ textAlign: "center", padding: "50px" }}>
                <img
                  src={currentImage}
                  alt="Current"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "10px",
                    transition: "opacity 0.7s ease-in-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>


{/* --------------------------------------------------------------------------         */} 


        <div className={styles.phase3section3}>
          <div className={styles.textArea}>
            <p>RESULTS</p>
            <h1>
              Our Results Speacks <br /> For Themselves
            </h1>
          </div>
          <div className={styles.imgDiv}>
            <img src={multiImg} alt="" className={styles.desktopImg} />
            <img src={multiImgPhone} className={styles.mobileImg} alt="Mobile" />
          </div>
        </div>





        <div className={styles.phase4}>
          <div className={styles.phase4TextArea}>
            <p>SERVICES</p>
            <h1> Treatments Available </h1>
          </div>
          <div className={styles.phase4Card}>
            <TreatmentCard
              icon={hairIcon}
              title1="Hair"
              title2="Treatment"
              listItems={[
                "Hair loss diagnosis & treatment",
                "PRP therapy",
                "Hair restoration solutions",
                "Scalp & trichology care",
              ]}
            />

            <TreatmentCard
              icon={skinimg}
              title1="Skin"
              title2="Treatment"
              listItems={[
                "Acne & acne scar treatment",
                "Pigmentation & melasma",
                "Medical skin conditions (eczema, psoriasis)",
                "Anti-aging & skin rejuvenation",
              ]}
            />

            <TreatmentCard
              icon={washimg}
              title1="Aesthetic"
              title2="Dermatology"
              listItems={[
                "Botox & fillers (medically guided)",
                "Non-surgical facial enhancements",
                "Skin tightening & rejuvenation",
               
              ]}
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------ */}

      <div className={styles.phase5}>
        <div className={styles.phase5Circle}>
          <img src={phase5_circle} alt="" />
        </div>
        <div className={styles.phase5TextArea}>
          <div className={styles.phase5Text}>
            <p>OUR PROCESS</p>
            <h1>What to Expext At  Dinaaz </h1>
          </div>
        </div>

        <div className={styles.pahse5Seaction1}>
          <div className={styles.pahse5Seaction1_img}>
            <img src={phase5Img} alt="" />
          </div>
          <div className={styles.pahse5Seaction1_step}>
            <Steps />
          </div>
        </div>

        <center className={styles.pahse5Seaction1_button}>
          <AnimatedButton
            bgColor="rgb(222, 148, 51)"
            textColor="white"
            hoverBg="rgb(205, 138, 49)"
            hoverText="#ffffff"
          />
        </center>


        <div className={styles.pahse5Seaction2}>
          <div className={styles.pahse5Seaction2_img}>
            <StorySection />
          </div>
        </div>


        

        <div className={styles.pahse5Seaction3}>
          <div className={styles.input_secImg1}>
            <img src={input_secImg1} alt="" />
          </div>
          <div className={styles.input_secImg2}>
            <img src={input_secImg2} alt="" />
          </div>

          <div className={styles.pahse5Seaction3Head}>
            {" "}
            <div className={styles.pahse5Seaction3_Text}>
              <span>CONSULT US</span>
              <h1>
                Not Sure What <br /> Tretment You Need?
              </h1>
              <p>
                Hair and skin concerns can be confusing . A proper diagnosis can
                save time, <br /> money,and prevent unnecessary procedures
              </p>
            </div>
          </div>
          <center>
            {" "}
            <div className={styles.pahse5Seaction3_input}>
              <img src={input} alt="" />
            </div>
          </center>

          <center>
            {" "}
            <div className={styles.pahse5Seaction3_button}>
              <AnimatedButton
                bgColor="rgb(222, 148, 51)"
                textColor="white"
                hoverBg="rgb(205, 138, 49)"
                hoverText="#ffffff"
              />
            </div>{" "}
          </center>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------  */}

      <div className={styles.phase6}>
        <div className={styles.phase6Box}>
          <div className={styles.phase6Box_text}>
            <h1>
              Your Skin & Hair Deserve Medical Expertise , Not Experiments
            </h1>
            <AnimatedButton
              bgColor="#ffffff"
              textColor="black"
              hoverBg="#ffffff"
              hoverText="black"
            />
          </div>
          <div className={styles.phase6Box_img}>
            {/* <img src={phase6img} alt=""  />  */}
            <img src={phase6img} alt="Laptop View" className={styles.phase6Img_Desktop} />
  
 
  <img src={phase6img2} alt="Mobile View" className={styles.phase6Img_Mobile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart2;
