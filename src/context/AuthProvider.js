import {AuthProvider} from "oidc-react";
import {config} from "../config";

const AuthContext = ({children}) => {
    return <AuthProvider config={config}>{children}</AuthProvider>;
};

export default AuthContext;