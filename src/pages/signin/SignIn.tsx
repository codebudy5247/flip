import { useCallback, useState, useEffect, useMemo } from "react";
import { useSnackbar } from "notistack";
// form
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  TextField,
  Fab,
  IconButton,
  InputAdornment,
  Alert,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Iconify from "../../components/Iconify";
import { styled } from "@mui/material/styles";
import { useSigninMutation } from "../../Services/AuthApi";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { tokenData } from "../../Redux/authSlice";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setpassword(event.target.value);
  };

  const [signInUser] = useSigninMutation();

  const onSubmit = async () => {
    const user: UserProfile = {
      Password: password,
      Email_id: email,
    };

    let userSigninResponse: any = await signInUser(user);
    if (userSigninResponse.data.msg === "Login successfull!") {
      localStorage.setItem("Token", userSigninResponse.data?.token);
      dispatch(tokenData(userSigninResponse.data?.token));
      enqueueSnackbar("Login Successfully!", {
        variant: "success",
      });
      navigate("/");
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container alignItems="center" direction="column">
          <Card
            sx={{
              p: 5,
              mt: 20,
              // boxShadow:5,
              width: ["70%", "30%", "30%", "30%", "3s0%"],
              border: "1px solid white",
              borderRadius: "1%",
            }}
          >
            <Grid container alignItems="center" direction="column">
              <Fab color="primary" size="large">
                <LockOutlinedIcon fontSize="large" />
              </Fab>
              <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                Sign In
              </Typography>
              <Typography variant="h4" sx={{ mb: 4, mt: 2 }}>
                Hi, Welcome Back
              </Typography>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 3,
                }}
              >
                <TextField
                  label="Email"
                  id="email"
                  variant="outlined"
                  onChange={onChangeEmail}
                />
                <TextField
                  label="Password"
                  id="password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <Iconify
                            icon={
                              showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onChange={onChangePassword}
                />
              </Box>
              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton size="large" type="submit" variant="contained">
                  Submit
                </LoadingButton>
              </Stack>
            </form>
            <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
              Don’t have an account? {""}
              <Link variant="h6" to="/signup" component={RouterLink}>
                Get started
              </Link>
            </Typography>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SignIn;
