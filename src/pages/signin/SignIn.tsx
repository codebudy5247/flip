import { useCallback, useState, useEffect, useMemo } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
// form
import { useForm, SubmitHandler, Controller } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Iconify from '../../components/Iconify';

type FormValuesProps = UserProfile;

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesProps>();

  const onSubmit: SubmitHandler<FormValuesProps> = async (data1) => {};
  return (
    <>
      <Grid container alignItems="center" direction="column">
        <Card
          sx={{
            p: 5,
            mt: 20,
            boxShadow: 10,
            width: "30%",
            border: "1px solid white",
            borderRadius: "2%",
          }}
        >
          <Fab color="primary" size="large">
            <LockOutlinedIcon fontSize="large" />
          </Fab>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "grid",
                rowGap: 3,
              }}
            >
              <TextField label="Email" id="email" variant="outlined" />
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
              />
            </Box>
            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton size="large" type="submit" variant="contained">
                Submit
              </LoadingButton>
            </Stack>
          </form>
        </Card>
      </Grid>
    </>
  );
};

export default SignIn;
