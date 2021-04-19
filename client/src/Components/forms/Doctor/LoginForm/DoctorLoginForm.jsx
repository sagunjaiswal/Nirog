import React, { useState } from "react";
import styles from "./DoctorLoginForm.module.css";

const DoctorLoginForm = ({ submitHandler, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value.trim());
        break;
      default:
        setPassword(value.trim());
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    submitHandler(loginData);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.loginForm} onSubmit={(e) => onSubmitHandler(e)}>
        <div className={styles.inputSection}>
          <label>
            <img src="/assets/person.svg" alt="email" />
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email id..."
            value={email}
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div
          className={`${styles.inputSection} ${
            error !== null && error.field === "password"
              ? styles.errorInput
              : null
          }`}
        >
          <label>
            <img src="/assets/lock.svg" alt="email" />
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => onChangeHandler(e)}
            required
          />
          {error !== null && error.field === "password" ? (
            <span className={styles.errorInfo}>
              <img src="/assets/error.svg" alt="error-icon" />
              <span>{error.info}</span>
            </span>
          ) : null}
        </div>
        <button
          className={`${styles.submitButton} btn btn-success`}
          type="submit"
        >
          SUBMIT
        </button>
        <span className={styles.resetPasswordText}>
          <a href="/">forgot password?</a>
        </span>
      </form>
    </div>
  );
};

export default DoctorLoginForm;
