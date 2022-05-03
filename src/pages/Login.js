import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import { authApi } from "src/api";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Copyright } from "src/components";
import { FormProvider, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import { loginSchema } from "src/schema";
import { stringUtils } from "src/utils";

export default function Login() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const errorField = (name) => {
    return errors[name] && errors[name].message;
  };

  const onSubmit = useCallback(
    async (data) => {
      const { login, password } = data;

      const requestBody = {
        password,
      };
      // check login if is email
      if (await stringUtils.isEmail(login)) {
        requestBody.email = login;
      } else {
        requestBody.username = login;
      }

      console.log(requestBody)

      await authApi
        .login({ ...requestBody })
        .then((response) => {
          if (response.status === 200) {
            navigate("..");
          } else {
            enqueueSnackbar(response?.data.errors[0].message, {
              variant: "error",
            });
          }
        })
        .catch((err) => {
          const { errors = [] } = err.response?.data;
          errors?.forEach((error) =>
            enqueueSnackbar(error.msg, { variant: "error" })
          );
        });
    },
    [navigate, enqueueSnackbar]
  );

  const onError = (error) => {
    console.error(error);
    Object.keys(error).forEach((key) => {
      enqueueSnackbar(error[key].message, { variant: "error" });
    });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FormProvider {...methods}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit, onError)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username/Email"
                {...register("login")}
                error={!!errorField("login")}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                {...register("password")}
                label="Password"
                type="password"
                error={!!errorField("password")}
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => navigate("../register")} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* Login with wso2 or register */}
              <Grid container direction="row" columnSpacing={2} my={2}>
                <Grid item xs>
                  <Button variant="outlined" color="primary" fullWidth>
                    Login by WSO2
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" fullWidth>
                    Register with WSO2
                  </Button>
                </Grid>
              </Grid>

              <LoadingButton
                loading={isSubmitting}
                type="submit"
                variant="contained"
                fullWidth
              >
                Sign In
              </LoadingButton>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  );
}
