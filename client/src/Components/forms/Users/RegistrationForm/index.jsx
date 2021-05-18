import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import { passwordVerifyHandler } from "../../../../helperMethods";
import axios from "axios";

const UserRegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifiedPwd, setVerifiedPwd] = useState("");
  const [isPwdVerified, setIsPwdVerified] = useState(true);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    if (!isPwdVerified) {
      setError({
        field: "password",
        info: "Password did not match",
      });
      setVerifiedPwd("");
    }
  }, [isPwdVerified]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsPwdVerified(passwordVerifyHandler(password, verifiedPwd));
    if (isPwdVerified === false) {
      const userData = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:5000/user/register", userData)
        .then((res) => {
          alert("🎉Registration Succesfull!");
          console.log(res.data);
          console.log(userData);
          history.push("/login"); //redirect to login page
        })
        .catch((err) => {
          console.log(err);
          console.log(
            "🚀 ~ file: index.jsx ~ line 39 ~ onSubmitHandler ~ err",
            err.response.data
          );
          // err.response.data.msg && setBackendError(err.response.data.msg);
          setError(err.response.data);
        });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();
    switch (name) {
      case "email":
        setEmail(trimmedValue);
        break;
      case "password":
        setPassword(trimmedValue);
        break;
      default:
        setVerifiedPwd(trimmedValue);
        break;
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.loginForm} onSubmit={(e) => onSubmitHandler(e)}>
        <div
          className={`${styles.inputSection} ${
            error !== null && error.field === "email" ? styles.errorInput : null
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
          {error !== null && error.field === "email" ? (
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
            minLength="8"
            maxLength="16"
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
        {password.length >= 8 ? (
          <div className={styles.inputSection}>
            <label>
              <img src="/assets/lock.svg" alt="email" />
              Confirm Password
            </label>
            <input
              name="verifyPassword"
              type="password"
              placeholder="Verify Password..."
              value={verifiedPwd}
              minLength="8"
              maxLength="16"
              onChange={(e) => onChangeHandler(e)}
              required
            />
          </div>
        ) : null}
        <button
          className={`${styles.submitButton} btn btn-success`}
          type="submit"
        >
          SUBMIT
        </button>
        {/* <span style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "0" }}>Already have an account?</p>
          <a href="/login" style={{ fontSize: "24px" }}>
            Login
          </a>
        </span> */}
      </form>
    </div>
  );
};
export default UserRegistrationForm;
