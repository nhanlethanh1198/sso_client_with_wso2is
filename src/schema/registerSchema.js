import * as y from "yup";

const registerSchema = y.object({
  fullname: y.string().required(),
  email: y.string().email().required(),
  password: y.string().required(),
  confirm_password: y
    .string()
    .oneOf([y.ref("password"), null], "Password does not match"),
});

export default registerSchema;