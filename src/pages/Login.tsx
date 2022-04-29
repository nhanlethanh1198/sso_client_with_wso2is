import { FunctionComponent, ReactElement, ReactNode } from "react";

interface AuxProps {
  children?: ReactNode;
}

const LoginPage: FunctionComponent<AuxProps> = (props): ReactElement => {
  return (
    <div>
      <h1>Login</h1>
      {props.children}
    </div>
  );
};

export default LoginPage;
