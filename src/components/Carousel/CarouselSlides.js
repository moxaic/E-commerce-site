import React from "react";
import styles from "./Carousel.module.css";

export default function CarouselSlides({ active, landingData }) {
  return (
    <>
      {landingData.map((data, index) => {
        return (
          <div
            className={active === index ? styles.active : styles.inactive}
            key={index}
          >
            <img src={data.src} alt={data.alt} />
          </div>
        );
      })}
    </>
  );
}
