import { instance } from "./instance";

class Auth {

  constructor() {
    this.instance = instance;
  }

  async login(data) {
    return this.instance.post(`auth/login`, data);
  }

  async register({ email, password, fullname, username }) {
    return this.instance.post(`auth/register`, {
      username,
      email,
      password,
      fullname,
    });
  }
}

export default Auth;
