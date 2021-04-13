import React, { useState } from "react";
import axios from "axios";
import { styles } from "./UserLoginForm.module.css";

const UserLoginForm = () => {
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
      });
  };
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <label>Enter email id :</label>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      <label>Password : </label>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};
