import React from "react";
import styles from "./TopCategories.module.css";
import { Link } from "react-router-dom";

export default function TopCategories() {
  return (
    <div className={styles.top_categories}>
      <h2>Top Categories</h2>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <Link className="link" to="/electric-guitar">
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="category"
            />
            <h3 className={styles.category_name}>Electric Guitars</h3>
          </Link>
        </div>

        <div className={styles.grid_item}>
          <Link className="link" to="/acoustic-guitar">
            <img
              className={styles.image}
              src="https://c0.wallpaperflare.com/preview/522/496/896/guitar-musical-instrument-leisure-activities-stand.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>Acoustic Guitars</h3>
          </Link>
        </div>
        <div className={styles.grid_item}>
          <Link className="link" to="/midi-keyboard">
            <img
              className={styles.image}
              src="https://wallpapercave.com/wp/wp2465235.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>MIDI Keyboards</h3>
          </Link>
        </div>
        <div className={styles.grid_item}>
          <Link className="link" to="/monitor-speaker">
            <img
              className={styles.image}
              src="https://cdn.wallpapersafari.com/49/55/leCodV.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>Monitor Speakers</h3>
          </Link>
        </div>
        <div className={styles.grid_item}>
          <Link className="link" to="/audio-interface">
            <img
              className={styles.image}
              src="https://thumbs.dreamstime.com/b/musical-instruments-bass-drum-barrel-acoustic-guitar-bass-guitar-black-background-music-concept-90151034.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>Audio Interfaces</h3>
          </Link>
        </div>
        <div className={styles.grid_item}>
          <Link className="link" to="/microphone">
            <img
              className={styles.image}
              src="https://www.hdwallpapers.in/download/music_guitar_8_4k_hd_music-HD.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>Microphones</h3>
          </Link>
        </div>
        <div className={styles.grid_item}>
          <Link className="link" to="/electronic-and-acoustic-drum-kit">
            <img
              className={styles.image}
              src="https://wallpaperboat.com/wp-content/uploads/2019/04/acoustic-guitar-053.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>
              Electronic and Acoustic Drum Kits
            </h3>
          </Link>
        </div>
        <div className={styles.grid_item}>
          <Link className="link" to="/guitar-amplifier-and-processors">
            <img
              className={styles.image}
              src="https://wallpapercave.com/wp/KyIavcG.jpg"
              alt="category"
            />
            <h3 className={styles.category_name}>
              Guitar Amplifiers and Processors
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
