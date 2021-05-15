import React, { useState } from "react";
import styles from "./DoctorLoginForm.module.css";
import axios from "axios";

const DoctorLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const objToSend = {
      email: email,
      password: password,
    };
    axios
      .post("", objToSend)
      .then((res) => {
        console.log(res.data);
        console.log(objToSend);
      })
      .catch((err) => {
        console.log(err);
        console.log(objToSend);
      });
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label>Enter email id :</label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={(e) => onChangeHandler(e)}
          required
        />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => onChangeHandler(e)}
          required
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default DoctorLoginForm;
