import React from "react";
import styles from "./ProductsGrid.module.css";

export default function ProductsList() {
  return (
    <div className={styles.list_container}>
      <div className={styles.product_card}></div>
      <div className={styles.product_card}></div>
      <div className={styles.product_card}></div>
      <div className={styles.product_card}></div>
      <div className={styles.product_card}></div>
      <div className={styles.product_card}></div>
    </div>
  );
}
