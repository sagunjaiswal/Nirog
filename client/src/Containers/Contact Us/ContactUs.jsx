import React from "react";
import styles from "./styles.module.css";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <>
      <img
        src=".\assets\feedback.jpg"
        alt="contact us"
        className={styles.contactUsImage}
      />
      <div className={styles.container}>
        <div className={styles.form}>
          <ContactUsForm />
        </div>
        <div className={styles.box}>
          <div className={styles.boxChild}>
            <h3 className={styles.boxHeading}>Headline 1</h3>
            <p className={styles.boxText}>
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nam tempore velit voluptatibus aperiam
            </p>
          </div>
          <div className={styles.boxChild}>
            <h3 className={styles.boxHeading}>Headline 2</h3>
            <p className={styles.boxText}>
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nam tempore velit voluptatibus aperiam
            </p>
          </div>

          <div className={styles.boxChild}>
            <h3 className={styles.boxHeading}>Headline 3</h3>
            <p className={styles.boxText}>
              Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nam tempore velit voluptatibus aperiam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
