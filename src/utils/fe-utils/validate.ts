import { toastError } from "./toast";

export const validateSignupInfo = (state: {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
}) => {
  const { name, password, confirmPassword, email } = state;
  if (!name.trim() || !password.trim() || !confirmPassword.trim() || !email.trim) {
    toastError("All Fields are required");
    return true;
  }
  if (password.trim() !== confirmPassword.trim()) {
    toastError("Password and Confirm Passwords are not the same");
    return true;
  }
  if (password.length < 6) {
    toastError("Password must be 6 characters long");
    return true;
  }
  return false;
};
