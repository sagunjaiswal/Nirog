import React from "react";
import styles from "./styles.module.css";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <>
      <img src=".\assets\feedback.jpg" alt="contact us" />
      <div className="">
        <ContactUsForm />
      </div>
      <div></div>
    </>
  );
}
