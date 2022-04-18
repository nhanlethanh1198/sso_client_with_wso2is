import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/auth.provider";
import { Routes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter children={Routes} basename={"/"} />
    </AuthProvider>
  );
}

export default App;
