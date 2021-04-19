import React from "react";
import LandingPage from "../../Components/LandingPage";
import styles from "./Application.module.css";

const Application = () => {
  return (
    <div className={styles.AppContainer}>
      <LandingPage />
    </div>
  );
};

export default Application;
