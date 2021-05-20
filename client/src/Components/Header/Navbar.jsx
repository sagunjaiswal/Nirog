import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation(); //hook for fetching location dynamically

  const handleClick = () => {
    let prevClicked = isClicked;
    setIsClicked(!prevClicked);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h1 className={styles.navbarLogo}>
          Nirog<i className="fas fa-stethoscope"></i>
        </h1>
      </Link>
      <div className={styles.menuIcon} onClick={handleClick}>
        {/* {[fa, fa_question].join(' ')} */}
        {/* <i className={isClicked ? `styles.[fas, fa_times].join(' ')` : `styles.[fas, fa_bars].join(' )`}></i> */}
        {/* <i className={isClicked ? `${styles.fas} ${styles.fa-times}` : `${styles.fas} ${styles.fa-bars}`}></i> */}
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul
        className={
          isClicked ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <Link to="/maintainance">
          <li className={styles.navLinks}>About Us</li>
        </Link>
        <Link to="/maintainance">
          <li className={styles.navLinks}>Offers</li>
        </Link>
        <Link to="/maintainance">
          <li className={styles.navLinks}>Contact Us</li>
        </Link>
        <Link to="/maintainance">
          <li className={styles.navLinks}>Lab Tests</li>
        </Link>
        {location.pathname !== "/register" &&
        location.pathname !== "/user-registration" &&
        location.pathname !== "/doctor-registration" ? (
          <Link to="/register">
            <li className={styles.navLinks}>Sign Up</li>
          </Link>
        ) : null}
        {location.pathname !== "/login" ? (
          <Link to="/login">
            <li className={styles.navLinks}>Sign In</li>
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
