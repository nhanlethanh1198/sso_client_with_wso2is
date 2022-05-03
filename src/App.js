import { StoreProvider } from "easy-peasy";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthProvider";
import Routes from "./routes";
import store from "./stores";
import ThemeConfig from "./theme";

const App = () => {
  return (
    <StoreProvider store={store}>
      <SnackbarProvider>
        <ThemeConfig>
          <BrowserRouter>
            <AuthContext>
              <Routes />
            </AuthContext>
          </BrowserRouter>
        </ThemeConfig>
      </SnackbarProvider>
    </StoreProvider>
  );
};

export default App;
