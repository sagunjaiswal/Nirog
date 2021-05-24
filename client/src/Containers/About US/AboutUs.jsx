import React from "react";
import styles from "./styles.module.css";

export default function AboutUs() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="aboutUs">
        <img src=".\assets\aboutUs.svg" alt="about us image" />
      </div>
      <div className="aboutUs">
        DocTalk is on a goal to make doctor consulatataions accessible.
      </div>
    </div>
  );
}
