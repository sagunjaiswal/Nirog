export const loginFormValidator = (password) => {
  if (password.length < 8 || password.length > 16)
    return { field: "password", info: "password format mismatch" };
  return null;
};
