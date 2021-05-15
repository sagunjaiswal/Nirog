import { BASE_URL } from "./global/axios_base_url";

export const loginFormValidator = (password) => {
  if (password.length < 8 || password.length > 16)
    return { field: "password", info: "password format mismatch" };
  return null;
};

//desc:method for login-form submit to the backend
export const loginFormSubmitHandler = () => {
  console.log("Login form submit handler method called");
};
