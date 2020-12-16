import React from "react";
import styles from "./BestSelling.module.css";

export default function BestSelling() {
  return (
    <div className={styles.best_selling}>
      <h2>Best selling products</h2>
      <div>
        <div className={styles.product_card}></div>
        <div className={styles.product_card}></div>
        <div className={styles.product_card}></div>
        <div className={styles.product_card}></div>
      </div>
    </div>
  );
}
