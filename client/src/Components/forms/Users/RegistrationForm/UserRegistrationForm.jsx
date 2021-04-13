import React, { useState } from "react";
import { styles } from "./UserRegistrationForm.module.css";
import axios from "axios";

const UserRegistrationForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (e) => {};
  const onChangeHandler = (e) => {};
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <label>Name : </label>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      <label>Contact No. : </label>
      <input
        type="text"
        placeholder="Contact Number"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      <label>Email : </label>
      <input
        type="email"
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
    </form>
  );
};
