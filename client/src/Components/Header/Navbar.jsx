import React, { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import UserContext from "../../UserContext";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation(); //hook for fetching location dynamically

  const handleClick = () => {
    let prevClicked = isClicked;
    setIsClicked(!prevClicked);
  };

  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
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
        {userData.user ? (
          <li className={styles.navLinks} onClick={logout}>
            Log out
          </li>
        ) : (
          <>
            {location.pathname !== "/register" &&
            location.pathname !== "/user-registration" &&
            location.pathname !== "/doctor-registration" ? (
              <Link to="/register">
                <li className={styles.navLinks} onClick={register}>
                  Sign Up
                </li>
              </Link>
            ) : null}
            {location.pathname !== "/login" ? (
              <Link to="/login">
                <li className={styles.navLinks} onClick={login}>
                  Sign In
                </li>
              </Link>
            ) : null}
          </>
        )}
      </ul>
    </div>
  );
}
