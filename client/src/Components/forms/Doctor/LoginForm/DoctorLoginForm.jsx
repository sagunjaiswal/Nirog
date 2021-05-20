import React, { useState, useContext } from "react";
import styles from "./DoctorLoginForm.module.css";
import axios from "axios";
import UserContext from "../../../../UserContext";
import { useHistory } from "react-router-dom";

const DoctorLoginForm = ({ submitHandler, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendError, setBackendError] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

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
    const objToSend = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/doctor/login", objToSend)
      .then((res) => {
        console.log(res.data);
        console.log(objToSend);
        setUserData({
          token: res.data.token,
          user: res.data.user,
        });
        localStorage.setItem("auth-token", res.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        err.response.data.msg && setBackendError(err.response.data.msg);
      });
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
