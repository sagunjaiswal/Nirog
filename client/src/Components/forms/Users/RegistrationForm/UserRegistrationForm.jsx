import React, { useState } from "react";
import { styles } from "./UserRegistrationForm.module.css";
import axios from "axios";

const UserRegistrationForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);
  //errors
  const [numberError, setNumberError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const objToSend = {
      name: name,
      number: number,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/register", objToSend)
      .then((res) => {
        console.log(res.data);
        console.log(objToSend);
      })
      .catch((err) => {
        console.log(err);
        // err.response.data.msg && setBackendError(err.response.data.msg);
      });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.trimLeft();
    if (name === "name") setName(trimmedValue);
    else if (name === "number") {
      console.log(value);
      if (isNaN(value)) {
        setNumberError("please enter numbers only");
      } else if (number.length > 10) {
        setNumberError("the number has to be of 10 digits only");
      } else {
        let numStr = "";
        for (var i = 0; i < trimmedValue.length; i++) {
          if (
            trimmedValue.charAt(i) >= "0".charAt(0) &&
            trimmedValue.charAt(i) <= "9".charAt(0)
          ) {
            numStr += trimmedValue.charAt(i);
            console.log(true);
          }
        }
        let num = Number(numStr);
        setNumber(num);
        console.log("Number -> " + number);
      }
    } else if (name === "email") setEmail(trimmedValue);
    else if (name === "password") setPassword(trimmedValue);
    else if (name === "confirmPassword") {
      setConfirmPassword(trimmedValue);
      if (password !== confirmPassword) setPasswordCheckError(true);
      else setPasswordCheckError(false);
    }
  };
  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <label>Name : </label>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      <label>Contact No. : </label>
      <input
        type="text"
        value={number}
        name="number"
        // pattern="[1-9]{1}[0-9]{9}"
        placeholder="Contact Number"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      {numberError.length ? (
        <div style={{ color: "red" }}>{numberError}</div>
      ) : null}
      <label>Email : </label>
      <input
        type="email"
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
      <label>Confirm Password : </label>
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="confirm password"
        onChange={(e) => onChangeHandler(e)}
        required
      />
      <button type="submit">SUBMIT</button>
      {passwordCheckError ? (
        <div style={{ color: "red" }}>Passwords dont match</div>
      ) : null}
    </form>
  );
};
export default UserRegistrationForm;
