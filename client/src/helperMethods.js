import { BASE_URL } from "./global/axios_base_url";
import axios from "axios";

export const passowrdValidationHandler = (password) => {
  if (password.length < 8 || password.length > 16)
    return { field: "password", info: "password format mismatch" };
  return null;
};

//desc:method for login-form submit to the backend
export const loginFormSubmitHandler = (loginData, role) => {
  let loginUrl = `${BASE_URL}/${
    role === "Doctor" ? "doctor/login" : "user/login"
  }`;

  axios
    .post(`${loginUrl}`, loginData)
    .then((res) => {
      alert("Login Successful");
    })
    .catch((err) => {
      alert("Login unsuccessful");
    });
};

export const passwordVerifyHandler = (passowrd, retypedPwd) => {
  return passowrd === retypedPwd;
};
