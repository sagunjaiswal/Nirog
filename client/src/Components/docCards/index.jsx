import React from "react";
import styles from "./styles.module.css";

export default function DocCards() {
  return (
    <section className={styles.docCards}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\cough-svgrepo-com.svg"></img>
        </div>
        <p>Physician</p>
        <p>CONSULT NOW</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\heart-doctor-svgrepo-com.svg"></img>
        </div>
        <h2>Cardiologist</h2>
        <p>CONSULT NOW</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\stethoscope-doctor-svgrepo-com.svg"></img>
        </div>
        <h2>Veterinarian</h2>
        <p>CONSULT NOW</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\syringe-svgrepo-com.svg"></img>
        </div>
        <h2>Surgeon</h2>
        <p>CONSULT NOW</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            src=".\assets\docCards\illness-svgrepo-com.svg"
            alt="illness"
          ></img>
        </div>
        <h3>Dermatologist</h3>
        <p>CONSULT NOW</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          {/* <img src=".\assets\docCards\vagina.svg" alt="period"></img> */}
        </div>
        <h3>Gynaecologist</h3>
        <p>CONSULT NOW</p>
      </div>
    </section>
  );
}
