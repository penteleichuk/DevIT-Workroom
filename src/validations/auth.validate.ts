import * as Yup from "yup";
import "yup-phone";

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters")
    .max(36, "Password cannot exceed more than 36 characters"),
});
