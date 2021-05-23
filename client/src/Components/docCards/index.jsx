import React from "react";
import styles from "./styles.module.css";

export default function DocCards() {
  return (
    <section className={styles.docCards}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\cough-svgrepo-com.svg"></img>
        </div>
        <p>Title</p>
        <button>CONSULT NOW</button>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\heart-doctor-svgrepo-com.svg"></img>
        </div>
        <h2>Title</h2>
        <p>Text</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\stethoscope-doctor-svgrepo-com.svg"></img>
        </div>
        <h2>Title</h2>
        <p>Text</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src=".\assets\docCards\syringe-svgrepo-com.svg"></img>
        </div>
        <h2>Title</h2>
        <p>Text</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            src=".\assets\docCards\illness-svgrepo-com.svg"
            alt="illness"
          ></img>
        </div>
        <h2>Title</h2>
        <p>Text</p>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          {/* <img src=".\assets\docCards\vagina.svg" alt="period"></img> */}
        </div>
        <h2>Title</h2>
        <p>Text</p>
      </div>
    </section>
  );
}
