import React from "react";
import styles from "./styles.module.css";

export default function DocCards() {
  return (
    <section className={styles.docCards}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\cough-svgrepo-com.svg"></img>
        </div>
        <h4>Physician</h4>
        <h6>
          <a href="#">CONSULT NOW</a>
        </h6>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\heart-doctor-svgrepo-com.svg"></img>
        </div>
        <h4>Cardiologist</h4>
        <h6>
          <a href="#">CONSULT NOW</a>
        </h6>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\stethoscope-doctor-svgrepo-com.svg"></img>
        </div>
        <h4>Veterinarian</h4>
        <h6>
          <a href="#">CONSULT NOW</a>
        </h6>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\syringe-svgrepo-com.svg"></img>
        </div>
        <h4>Surgeon</h4>
        <h6>
          <a href="#">CONSULT NOW</a>
        </h6>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            src=".\assets\docCards\illness-svgrepo-com.svg"
            alt="illness"
          ></img>
        </div>
        <h4>Dermatologist</h4>
        <h6>
          <a href="#">CONSULT NOW</a>
        </h6>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\gynae.svg" alt="gynae"></img>
        </div>
        <h4>Gynaecologist</h4>
        <h6>
          <a href="#">CONSULT NOW</a>
        </h6>
      </div>
    </section>
  );
}
