import React from "react";
import styles from "./Application.module.css";
import Footer from "../../Components/Footer.jsx";
import Navbar from "../../Components/Navbar.jsx";
import Accordion from "../../Components/faqs/Accordion.jsx"

const Application = () => {
  return (
    <div>
    {/* // <div className={styles.application}> */}
      <Navbar/>
      <Accordion/>
      <Footer /> 
    </div>
  );
};

export default Application;
