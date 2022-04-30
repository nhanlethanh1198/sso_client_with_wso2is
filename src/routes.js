import {
    About,
    Contact, Dashboard, ForgotPassword, Home, Login, NotFound, Profile, Register, ResetPassword, Settings, VerifyEmail,
    VerifyEmailFailure,
    VerifyEmailResend,
    VerifyEmailResendSuccess,
    VerifyEmailSuccess
} from "@/pages";
import { useRoutes } from "react-router-dom";

const Routes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
    {
        path: "/verify-email",
        element: <VerifyEmail />,
    },
    {
        path: "/verify-email-failure",
        element: <VerifyEmailFailure />,
    },
    {
        path: "/verify-email-resend",
        element: <VerifyEmailResend />,
    },
    {
        path: "/verify-email-resend-success",
        element: <VerifyEmailResendSuccess />,
    },
    {
        path: "/verify-email-success",
        element: <VerifyEmailSuccess />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};


export default Routes;