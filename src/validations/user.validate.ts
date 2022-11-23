import * as Yup from "yup";
import "yup-phone";

export const userSchema = Yup.object().shape({
  phone: Yup.string().required("Phone is required").phone(),
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
});
