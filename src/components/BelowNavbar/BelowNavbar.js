import React from "react";
import styles from "./BelowNavbar.module.css";

export default function BelowNavbar() {
  return (
    <div className={styles.additional_info}>
      <div>Guitar</div>
      <div>Bass</div>
      <div>Microphone</div>
      <div>Amplifier</div>
      <div>Interface</div>
    </div>
  );
}
