import { BASE_URL } from "./global/axios_base_url";
import axios from "axios";

export const passowrdValidationHandler = (password) => {
  if (password.length < 8 || password.length > 16)
    return { field: "password", info: "password format mismatch" };
  return null;
};

//desc:method for login-form submit to the backend
export const loginFormSubmitHandler = (
  loginData,
  role,
  history,
  setUserData
) => {
  let loginUrl = `${BASE_URL}/${
    role === "Doctor" ? "doctor/login" : "user/login"
  }`;

  axios
    .post(`${loginUrl}`, loginData)
    .then((res) => {
      console.log(res.data);
      console.log(loginData);
      setUserData({
        token: res.data.token,
        user: res.data.user,
      });
      localStorage.setItem("auth-token", res.data.token);
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
      // err.response.data.msg && setBackendError(err.response.data.msg);
    });
};

export const passwordVerifyHandler = (passowrd, retypedPwd) => {
  return passowrd === retypedPwd;
};
