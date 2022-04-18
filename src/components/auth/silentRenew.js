import { AuthConsumer } from "../../providers/auth.provider";

export const SilentRenew = () => (
  <AuthConsumer>
    {({ signinSilentCallback }) => {
      signinSilentCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

/**
 *  Is going to be used by the event addAccessTokenExpired configured on the AuthService.
 */