import { IDENTITY_CONFIG, METADATA_OIDC } from "../utils/auth.const";
import { UserManager, WebStorageStateStore, Log } from "oidc-client";

export default class AuthService {
  UserManager;

  constructor() {
    this.UserManager = new UserManager({
      ...IDENTITY_CONFIG,
      userStore: new WebStorageStateStore({ store: window.sessionStorage }),
      metadata: {
        ...METADATA_OIDC,
      },
    });

    //   Logger
    Log.logger = console;
    Log.level = Log.DEBUG;

    this.UserManager.events.addUserLoaded((user) => {
      if (window.location.href.indexOf("signin-oidc") !== -1) {
        this.navigateToScreen();
      }
    });

    this.UserManager.events.addSilentRenewError((e) => {
      console.log("Silent renew error: ", e.message);
    });

    this.UserManager.events.addAccessTokenExpired(() => {
      console.log("Token expired");
      this.signinSilent();
    });
  }

  signinRedirectCallback = () => {
    this.UserManager.signinRedirectCallback().then(() => {
      "";
    });
  };

  getUser = async () => {
    const user = await this.UserManager.getUser();
    if (!user) {
      return await this.UserManager.signinRedirectCallback();
    }
    return user;
  };

  parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  siginRedirect = () => {
    localStorage.setItem("redirectUri", window.location.pathname);
    this.UserManager.siginRedirect();
  };

  navigateToScreen = () => {
    window.location.replace("/en/dashboard");
  };

  isAuthenticated = () => {
    const oidcStorage = JSON.parse(
      sessionStorage.getItem(
        `oidc.user:${process.env.REACT_APP_AUTH_URL}:${process.env.REACT_APP_IDENTITY_CLIENT_ID}`
      )
    );

    return !!oidcStorage && !!oidcStorage.access_token;
  };

  signinSilent = () => {
    this.UserManager.signinSilent()
      .then((user) => {
        console.log(`Signed in: ${user}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  signinSilentCallback = () => {
    this.UserManager.signinSilentCallback();
  };

  createSginInRequest = () => {
    return this.UserManager.createSginInRequest();
  };

  logout = () => {
    this.UserManager.signoutRedirect({
      id_token_hint: localStorage.getItem("id_token"),
    });

    this.UserManager.clearStaleState();
  };

  signoutRedirectCallback = () => {
    this.UserManager.signoutRedirectCallback().then(() => {
      localStorage.clear();
      window.location.replace(process.env.REACT_APP_PUBLIC_URL);
    });

    this.UserManager.clearStaleState();
  };
}
