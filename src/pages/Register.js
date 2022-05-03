import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "src/api";
import { Copyright } from "src/components";
import { registerSchema } from "src/schema";

import { FormProvider, useForm } from "react-hook-form";

export default function Register() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
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
      const { username, fullname, email, password } = data;
      await authApi
        .register({ username, fullname, email, password })
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
            Register new Account
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
                label="Username"
                {...register("username")}
                autoComplete="username"
                error={!!errorField("username")}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                {...register("email")}
                autoComplete="email"
                error={!!errorField("email")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Fullname"
                {...register("fullname")}
                error={!!errorField("fullname")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                {...register("password")}
                error={!!errorField("password")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Confirm your password"
                type="password"
                {...register("confirm_password")}
                error={!!errorField("confirm_password")}
              />
              <Grid container justifyContent={"flex-end"}>
                <Grid item>
                  <Link onClick={() => navigate("../login")} variant="body2">
                    {"You have an account? Sign In now!"}
                  </Link>
                </Grid>
              </Grid>
              {/* Login with wso2 or register */}
              <Grid container direction="row" columnSpacing={2} my={2} mt={1}>
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
                Register
              </LoadingButton>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  );
}
