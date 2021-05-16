import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPageContainer}>
      <Link to="/doctor-registration">
        <div className={styles.card} title="Click to register as doctor">
          <img src="/assets/stethoscope.svg" alt="Doctor" />
          <span className={styles.infoText}>
            <p>Sign up as Doctor</p>
          </span>
        </div>
      </Link>
      <Link to="/user-registration">
        <div className={styles.card} title="Click to register as patient">
          <img src="/assets/personBlack.svg" alt="Doctor" />
          <span className={styles.infoText}>
            <p>Sign up as Patient</p>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default RegistrationPage;
