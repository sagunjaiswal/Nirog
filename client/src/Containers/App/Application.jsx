import React from "react";
import styles from "./Application.module.css";
import Footer from "../../Components/Footer.jsx"
const Application = () => {
  return (
    <div>
      <h1 className={styles.Header}>
        Nirog Application-Live Consultation from the ease of Your home
      </h1>
      <p>This is the Container of the entire application</p>
      <Footer /> 
    </div>
  );
};

export default Application;
