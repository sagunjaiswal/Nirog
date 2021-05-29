import React from "react";
import styles from "./contactUsForm.module.css";

export default function ContactUsForm() {
  return (
    <div className={styles.form}>
      <select
        className={styles.formInput}
        placeholder="How can we help you ?* "
      >
        <option selected disabled value="0">
          How can we help you ?*
        </option>
        <option value="1">
          I need some help with the online appointmenet booking.
        </option>
        <option value="2">
          I found incorrect/outdated information on a page.
        </option>
        <option value="3">The website is not working the way it should.</option>
        <option value="4">I woulld like to give feedback/suggestions.</option>
      </select>
      <input className={styles.formInput} placeholder="Full Name* " />
      <input className={styles.formInput} placeholder="Email Address" />
      <input className={styles.formInput} placeholder="Mobile number" />
      <textarea
        className={styles.formInput}
        placeholder="Type in your message..."
      />
      <button type="submit" className={styles.submitButton}>
        SUBMIT
      </button>
    </div>
  );
}
