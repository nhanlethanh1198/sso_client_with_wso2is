import * as y from "yup";

const loginSchema = y.object({
  login: y.string().required(),
  password: y.string().required(),
});

export default loginSchema;
