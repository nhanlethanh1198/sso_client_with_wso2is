import React from "react";
import AuthService from "../services/auth.service";

const AuthContext = React.createContext({
  siginRedirectCallback: () => ({}),
  logout: () => ({}),
  signoutRedirectCallback: () => ({}),
  isAuthenticated: () => ({}),
  signinRedirect: () => ({}),
  signinSilentCallback: () => ({}),
  createSigninRequest: () => ({}),
});

export const AuthConsumer = AuthContext.Consumer;

function AuthProvider(props) {
  const authService = new AuthService();

  return (
    <AuthContext.Provider
      value={{
        siginRedirectCallback: authService.siginRedirectCallback,
        logout: authService.logout,
        signoutRedirectCallback: authService.signoutRedirectCallback,
        isAuthenticated: authService.isAuthenticated,
        signinRedirect: authService.signinRedirect,
        signinSilentCallback: authService.signinSilentCallback,
        createSigninRequest: authService.createSigninRequest,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
