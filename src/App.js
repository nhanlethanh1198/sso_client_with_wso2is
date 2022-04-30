import { BrowserRouter } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
import AuthContext from "./context/AuthProvider";
import Routes from "./routes";
import ThemeConfig from "./theme";

const App = () => {
  return (
    <ThemeConfig>
      {/* <ScrollToTop /> */}
      <BrowserRouter>
        <AuthContext>
          <Routes />
        </AuthContext>
      </BrowserRouter>
    </ThemeConfig>
  );
};

export default App;
