const {REACT_APP_CLIENT_ID, REACT_APP_SIGN_IN_REDIRECT_URI, REACT_APP_SIGN_OUT_REDIRECT_URI} = process.env;

const config = {
    clientID: REACT_APP_CLIENT_ID,
    baseUrl: "",
    signInRedirectURL: REACT_APP_SIGN_IN_REDIRECT_URI,
    signOutRedirectURL: REACT_APP_SIGN_OUT_REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
};

export default config;
