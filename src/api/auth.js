import { instance } from ".";

class Auth {
  constructor() {
    this.instance = instance;
  }

  async login({ email, password }) {
    return this.instance.post(`auth/login`, { email, password });
  }

  async register({ email, password, fullname }) {
    return this.instance.post(`auth/register`, {
      email,
      password,
      fullname,
    });
  }
}

export default Auth;
