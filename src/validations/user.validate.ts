import * as Yup from "yup";
import "yup-phone";

export const userSchema = Yup.object().shape({
  phone: Yup.string().required("Phone is required").phone(),
  code: Yup.string()
    .required("Code is required")
    .min(4, "Invalid code")
    .max(4, "Invalid code"),
  name: Yup.string()
    .required("Name is required")
    .max(40, "Name cannot exceed more than 40 characters"),
  skype: Yup.string().max(19, "Skype cannot exceed more than 19 characters"),
  position: Yup.string().max(
    35,
    "Position cannot exceed more than 35 characters"
  ),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password length should be at least 6 characters")
    .max(36, "Password cannot exceed more than 36 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .min(6, "Password length should be at least 6 characters")
    .max(36, "Password cannot exceed more than 36 characters")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});
