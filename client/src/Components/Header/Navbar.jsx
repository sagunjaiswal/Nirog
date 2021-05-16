import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamburgerClicked, sethamburgerClicked] = useState(false);

  const handleClick = () => {
    let prevhamburgerClickedStatus = hamburgerClicked;
    sethamburgerClicked(!prevhamburgerClickedStatus);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className={styles.navbarLogo}>
          Nirog<i className="fas fa-stethoscope"></i>
        </h1>
      </Link>
      <div className={styles.menuIcon} onClick={handleClick}>
        {/* {[fa, fa_question].join(' ')} */}
        {/* <i className={hamburgerClicked ? `styles.[fas, fa_times].join(' ')` : `styles.[fas, fa_bars].join(' )`}></i> */}
        {/* <i className={hamburgerClicked ? `${styles.fas} ${styles.fa-times}` : `${styles.fas} ${styles.fa-bars}`}></i> */}
        <i className={hamburgerClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul
        className={
          hamburgerClicked
            ? `${styles.navMenu} ${styles.active}`
            : styles.navMenu
        }
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={styles.navLinks}>About Us</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={styles.navLinks}>Offers</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={styles.navLinks}>Contact Us</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={styles.navLinks}>Lab Tests</li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={styles.navLinks}>Sign Up</li>
        </Link>
      </ul>
    </div>
  );
}
