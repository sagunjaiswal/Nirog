import React, { useState } from "react";
import styles from "./styles.module.css";
import DoctorLoginForm from "../../Components/forms/Doctor/LoginForm/DoctorLoginForm";
import { loginFormValidator } from "../../helperMethods";

const LoginPage = () => {
  const [validationError, setValidationError] = useState(null);
  const __formSubmitHandler = (loginData) => {
    setValidationError(loginFormValidator(loginData.password)); //validate password

    //call formSubmitHandler
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
