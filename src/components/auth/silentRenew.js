import { AuthConsumer } from "../../providers/auth.provider";

export const SilentRenew = () => (
  <AuthConsumer>
    {({ signinSilentCallback }) => {
      signinSilentCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
