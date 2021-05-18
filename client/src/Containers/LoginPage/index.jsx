import React, { useState } from "react";
import styles from "./styles.module.css";
import { loginFormSubmitHandler } from "../../helperMethods";

const LoginPage = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, SetRole] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value.trim());
        break;
      case "password":
        setPassword(value.trim());
        break;
      case "role":
        SetRole(value);
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };
    loginFormSubmitHandler(loginData, role);
  };
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.formContainer}>
        <form className={styles.loginForm} onSubmit={(e) => onSubmitHandler(e)}>
          <div
            className={`${styles.inputSection} ${
              error !== null && error.field === "email"
                ? styles.errorInput
                : null
            }`}
          >
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
            {error !== null && error.field === "password" ? (
              <span className={styles.errorInfo}>
                <img src="/assets/error.svg" alt="error-icon" />
                <span>{error.info}</span>
              </span>
            ) : null}
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
          <div className={styles.inputSection}>
            <label>
              <img src="/assets/role.svg" alt="email" />
              Role
            </label>
            <select
              name="role"
              className={styles.roleSelectionInput}
              onChange={(e) => onChangeHandler(e)}
              required
            >
              <option value="" disabled selected>
                Select Role...
              </option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
            </select>
          </div>
          <button
            className={`${styles.submitButton} btn btn-success`}
            type="submit"
          >
            SUBMIT
          </button>
          <span className={styles.resetPasswordText}>
            <a href="/maintainance">forgot password?</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
