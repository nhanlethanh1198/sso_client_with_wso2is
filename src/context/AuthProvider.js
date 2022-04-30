import {AuthProvider} from "@asgardeo/auth-react";
import config from "../config";

const AuthContext = ({children}) => {
    return <AuthProvider config={config}>{children}</AuthProvider>;
};

export default AuthContext;