import { instance } from "./instance";

class Auth {

  constructor() {
    this.instance = instance;
  }

  async login({ email, password }) {
    return this.instance.post(`auth/login`, { email, password });
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
