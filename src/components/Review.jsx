import React, { useEffect, useState } from "react";
import styles from "./Review.module.css";
import image from "../assets/Ellipse 13.png"

const Review = () => {
  const [positionSet, setPositionSet] = useState('pos1');

  const reviews = [
    { id: 1, name: "Sandeep I" },
    { id: 2, name: "Sandeep II" },
    { id: 3, name: "Sandeep III" },
    { id: 4, name: "Sandeep IV" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionSet(prev => prev === 'pos1' ? 'pos2' : 'pos1');
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className={styles.circleWrapper}>
      <div className={`${styles.circle} ${styles[positionSet]}`}>
        {reviews.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.profile} ${styles[`p${index + 1}`]} ${styles[positionSet]}`}
          >
            <div className={styles.reviewItem}>
              <img
                src={image}
                alt=""
              />
              <div className={styles.reviewItemText}>
                <h4>{item.name}</h4>
                <p>4.9 ⭐ | 26/12/2025</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Review;
