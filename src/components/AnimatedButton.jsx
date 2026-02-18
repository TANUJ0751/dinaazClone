// import React, { useState } from "react";
// import { createPortal } from "react-dom"; // Portal import kiya
// import BookingForm from "./BookingForm";
// import sty_ani from "./AnimatedButton.module.css";
// // import logo from "../assets/arrowLogo.svg"

// const AnimatedButton = ({ bgColor, textColor, hoverBg, hoverText, fontSize }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const togglePopup = () => setIsOpen(!isOpen);

//   const defaultBg = bgColor || "#007a7a";
//   const defaultText = textColor || "#ffffff";

//   const finalHoverBg = hoverBg || defaultText;
//   const finalHoverText = hoverText || defaultBg;

//   const buttonStyle = {
//     backgroundColor: isHovered ? finalHoverBg : defaultBg,
//     color: isHovered ? finalHoverText : defaultText,
//     fontSize: fontSize || "clamp(13px, 2vw, 15px)",
//     cursor: "pointer"
//   };

//   return (
//     <div className={styles.container}>
//       {/* Button Section */}
//       <div
//         className={styles.button}
//         onClick={togglePopup}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={buttonStyle}
//       >
//         <span>Book A Consultation</span>

//         <div className={styles.arrowBox}>
            
     
//           <svg
//             className={styles.arrow}
//             viewBox="0 0 16 16"
//             style={{ fill: isHovered ? finalHoverText : defaultText }}
//           >
//             <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
//           </svg>
//           <svg
//             className={styles.arrow}
//             viewBox="0 0 16 16"
//             style={{ fill: isHovered ? finalHoverText : defaultText }}
//           >
//             <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
//           </svg>
//         </div>
//       </div>

//       {/* Popup Section: Isse createPortal mein wrap kiya hai */}
//       {isOpen && createPortal(
//         <BookingForm onClose={togglePopup} />,
//         document.body // Yeh popup ko hierarchy se nikaal kar seedha body mein daal dega
//       )}
//     </div>
//   );
// };

// export default AnimatedButton;





// ---------------------------------------------------------------------------------------



// import React, { useState } from "react";
// import { createPortal } from "react-dom";
// import BookingForm from "./BookingForm";
// import sty_ani from "./AnimatedButton.module.css";
// // import logo from "../assets/arrowLogo.svg"; 

// const AnimatedButton = ({ bgColor, textColor, hoverBg, hoverText, fontSize }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const togglePopup = () => setIsOpen(!isOpen);

//   const defaultBg = bgColor || "#007a7a";
//   const defaultText = textColor || "#ffffff";

//   const finalHoverBg = hoverBg || defaultText;
//   const finalHoverText = hoverText || defaultBg;

//   const buttonStyle = {
//     backgroundColor: isHovered ? finalHoverBg : defaultBg,
//     color: isHovered ? finalHoverText : defaultText,
//     fontSize: fontSize || "clamp(13px, 2vw, 15px)",
//     cursor: "pointer"
//   };

//   // Image color handle karne ke liye filter (optional)
//   // Agar aapka SVG black hai aur use white karna hai hover par, toh CSS filter use hota hai.
//   // Filhal simple img tag use kiya hai jaisa aapne pucha.

//   return (
//     <div className={sty_ani.container}>
//       {/* Button Section */}
//       <div
//         className={sty_ani.button}
//         onClick={togglePopup}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={buttonStyle}
//       >
//         <span  className={sty_ani.book} >Book A Consultation</span>

//         <div className={sty_ani.arrowBox}>
  
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="22"
//   height="22"
//   fill="none"
//   stroke={isHovered ? finalHoverText : defaultText}
//   strokeWidth="1"   // 👈 yaha se bold control hoga
//   viewBox="0 0 16 16"
//   className={sty_ani.arrow}
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M3 13L13 3M13 3H6M13 3V10"
//   />
// </svg>


// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="22"
//   height="22"
//   fill="none"
//   stroke={isHovered ? finalHoverText : defaultText}
//   strokeWidth="1"   // 👈 yaha se bold control hoga
//   viewBox="0 0 16 16"
//   className={sty_ani.arrow}
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     d="M3 13L13 3M13 3H6M13 3V10"
//   />
// </svg>


// </div>


//       </div>

//       {/* Popup Section */}
//       {isOpen && createPortal(
//         <BookingForm onClose={togglePopup} />,
//         document.body
//       )}
//     </div>
//   );
// };

// export default AnimatedButton;








// ------------------------------------------------------------------------------------------

import React, { useState } from "react";
import { createPortal } from "react-dom";
import BookingForm from "./BookingForm";
import sty_ani from "./AnimatedButton.module.css";
// import logo from "../assets/arrowLogo.svg"; 

const AnimatedButton = ({ 
  bgColor, 
  textColor, 
  hoverBg, 
  hoverText, 
  fontSize,
  buttonText = "Book A Consultation"  // 👈 Naya prop add kiya - default text
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  const defaultBg = bgColor || "#007a7a";
  const defaultText = textColor || "#ffffff";

  const finalHoverBg = hoverBg || defaultText;
  const finalHoverText = hoverText || defaultBg;

  const buttonStyle = {
    backgroundColor: isHovered ? finalHoverBg : defaultBg,
    color: isHovered ? finalHoverText : defaultText,
    fontSize: fontSize || "clamp(13px, 2vw, 15px)",
    cursor: "pointer"
  };

  return (
    <div className={sty_ani.container}>
      {/* Button Section */}
      <div
        className={sty_ani.button}
        onClick={togglePopup}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
      >
        {/* 👈 Yaha dynamic text use kiya */}
        <span className={sty_ani.book}>{buttonText}</span>

        <div className={sty_ani.arrowBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            stroke={isHovered ? finalHoverText : defaultText}
            strokeWidth="1"
            viewBox="0 0 16 16"
            className={sty_ani.arrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13L13 3M13 3H6M13 3V10"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            stroke={isHovered ? finalHoverText : defaultText}
            strokeWidth="1"
            viewBox="0 0 16 16"
            className={sty_ani.arrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13L13 3M13 3H6M13 3V10"
            />
          </svg>
        </div>
      </div>

      {/* Popup Section */}
      {isOpen && createPortal(
        <BookingForm onClose={togglePopup} />,
        document.body
      )}
    </div>
  );
};

export default AnimatedButton;
