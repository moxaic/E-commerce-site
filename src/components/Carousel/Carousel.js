import React, { useEffect, useState } from "react";
import CarouselSlides from "./CarouselSlides";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const carouselInfo = [
    {
      src:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/538a50bc-ccf9-4fd7-902c-69658ee473a8/dc0nr2u-a70f94f4-95f3-4ad9-9609-1c439d313548.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTM4YTUwYmMtY2NmOS00ZmQ3LTkwMmMtNjk2NThlZTQ3M2E4XC9kYzBucjJ1LWE3MGY5NGY0LTk1ZjMtNGFkOS05NjA5LTFjNDM5ZDMxMzU0OC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4g0xnTCJCFCegBiJtugkCn_cZ__4aMD8I3ymfQ6gCls",
      alt: "naruto",
    },
    {
      src: "https://i.ytimg.com/vi/-I7pty3LU98/maxresdefault.jpg",
      alt: "naruto",
    },
    {
      src:
        "https://c4.wallpaperflare.com/wallpaper/954/695/773/uzumaki-naruto-hyuuga-hinata-anime-wallpaper-preview.jpg",
      alt: "naruto",
    },
    {
      src:
        "https://wonderfulengineering.com/wp-content/uploads/2016/01/Naruto-Wallpaper-2.jpg",
      alt: "naruto",
    },
    {
      src:
        "https://wi.wallpapertip.com/wsimgs/23-233208_eraserhead-01-acoustic-guitar-wallpaper-hd-1080p.jpg",
      alt: "naruto",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselLength] = useState(carouselInfo.length);

  useEffect(() => {
    const timer = setTimeout(nextSlide, 4000);
    return () => clearTimeout(timer);
  });

  function nextSlide() {
    let index = activeIndex;
    let length = carouselLength;

    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }

    setActiveIndex(index);
  }

  function prevSlide() {
    let index = activeIndex;
    let length = carouselLength;

    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }

    setActiveIndex(index);
  }

  return (
    <div className={styles.carousel_container}>
      <CarouselSlides active={activeIndex} landingData={carouselInfo} />
      <div className={`${styles.control} ${styles.prev}`} onClick={prevSlide}>
        ◀
      </div>
      <div className={`${styles.control} ${styles.next}`} onClick={nextSlide}>
        ▶
      </div>
    </div>
  );
}
