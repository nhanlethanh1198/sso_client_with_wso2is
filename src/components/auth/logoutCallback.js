import { AuthConsumer } from "../../providers/auth.provider";

export const LogoutCallback = () => (
  <AuthConsumer>
    {({ signinRedirectCallback }) => {
      signinRedirectCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
/**
 * After logout the server is going to redirect the user to the post_logout_redirect_uri property of 
 * the IDENTITY_CONFIG where the logoutCallback is going to delete the cookie from the identity server 
 * and the localStorage cleaning the browser, and redirect the user to the REACT_APP_PUBLIC_URL defined in our .env file
 */