import { StoreProvider } from "easy-peasy";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import Slide from "@mui/material/Slide";
import AuthContext from "./context/AuthProvider";
import Routes from "./routing/routes";
import store from "./stores";
import ThemeConfig from "./theme";

const App = () => {
  return (
    <StoreProvider store={store}>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={5000}
        disableWindowBlurListener
        preventDuplicate
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
      >
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
