import { AuthConsumer } from "../../providers/auth.provider";

export const Logout = () => {
  <AuthConsumer>
    {({ logout }) => {
      logout();
      return <span>loading</span>;
    }}
  </AuthConsumer>;
};
