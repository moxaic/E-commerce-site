import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div class={styles.image_banners}>
      <img
        src="https://wallpaperboat.com/wp-content/uploads/2019/04/electric-guitar-001.jpg"
        alt="advertisement"
      />
      <img
        src="https://wallpaperboat.com/wp-content/uploads/2019/04/fender-guitar-016.jpg"
        alt="advertisement"
      />
      <img
        src="https://www.desktopbackground.org/p/2014/10/22/844016_full-hd-1080p-guitar-wallpapers-backgrounds-hd-guitar-photos_2560x1600_h.jpg"
        alt="advertisement"
      />
    </div>
  );
}
