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

export const doctorRegistrationHandler = (doctorData) => {
  axios
    .post("http://localhost:5000/doctor/register", doctorData)
    .then((res) => {
      console.log(res.data);
      console.log(doctorData);
    })
    .catch((err) => {
      console.log(err);
      alert("Sorry!Can not Register");
      // err.response.data.msg && setBackendError(err.response.data.msg);
    });
};
