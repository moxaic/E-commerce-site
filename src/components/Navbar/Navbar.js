import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link className="link" to="/">
        <div className={styles.logo}>LOGO</div>
      </Link>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="Search..."
      />
      <div>Contact Us</div>
      <div>Cart</div>
      <div>Sign In</div>
    </div>
  );
}
