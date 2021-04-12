import React from "react";
import { styles } from "./DoctorLoginForm.module.css";

const DoctorLoginForm = () => {
  const onChangeHandler = (e) => {};
  const onSubmitHandler = (e) => {};
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

export default DoctorLoginForm;
