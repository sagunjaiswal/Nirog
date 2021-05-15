import React, { useState } from "react";
import styles from "./styles.module.css";
import DoctorLoginForm from "../../Components/forms/Doctor/LoginForm/DoctorLoginForm";
import { loginFormSubmitHandler } from "../../helperMethods";

const LoginPage = () => {
  const [validationError, setValidationError] = useState(null);
  const __formSubmitHandler = (loginData) => {
    //call formSubmitHandler
    loginFormSubmitHandler();
  };
  return (
    <div className={styles.loginFormContainer}>
      <DoctorLoginForm
        submitHandler={__formSubmitHandler}
        error={validationError}
      />
    </div>
  );
};

export default LoginPage;
