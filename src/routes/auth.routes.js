import { Route } from "react-router-dom";
import { AuthConsumer } from "../providers/auth.provider";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthConsumer>
      {({ isAuthenticated, signinRedirect }) => (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? <Component {...props} /> : signinRedirect()
          }
        />
      )}
    </AuthConsumer>
  );
};
