import AuthContext from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes />
      </AuthContext>
    </BrowserRouter>
  );
};

export default App;
