import React from 'react';
import sty_circle from './Circle.module.css';

const Circle = ({ 
  firstLine, 
  highlight1, 
  secondLine, 
  highlight2 
}) => {
  return (
    <div className={sty_circle.textBackground}>
      <div className={sty_circle.smallCircle}>
        <h2 className={sty_circle.heading}>
          {firstLine} <span className={sty_circle.highlight}>{highlight1}</span>, 
          {secondLine} <br />
          <span className={sty_circle.highlight}>{highlight2}</span>
        </h2>
        
        <div className={sty_circle.line}></div>
      </div>
    </div>
  );
};

export default Circle;