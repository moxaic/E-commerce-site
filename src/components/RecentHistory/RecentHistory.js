import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecentHistory.module.css";

export default function RecentHistory() {
  return (
    <div className={styles.recent_search}>
      <h2>Recently viewed products</h2>
      <div>
        <div className={`${styles.scroll} ${styles.left}`}>◀</div>
        <Link className="link" to="/somewhere/specific">
          <div className={styles.product_card}></div>
        </Link>
        <Link className="link" to="/somewhere/specific">
          <div className={styles.product_card}></div>
        </Link>
        <Link className="link" to="/somewhere/specific">
          <div className={styles.product_card}></div>
        </Link>
        <Link className="link" to="/somewhere/specific">
          <div className={styles.product_card}></div>
        </Link>
        <Link className="link" to="/somewhere/specific">
          <div className={styles.product_card}></div>
        </Link>
        <div className={`${styles.scroll} ${styles.right}`}>▶</div>
      </div>
    </div>
  );
}
