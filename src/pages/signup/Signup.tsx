import { useCallback, useEffect, useMemo } from "react";
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InstagramIcon from '@mui/icons-material/Instagram';

type FormValuesProps = UserProfile;
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesProps>();

  const onSubmit: SubmitHandler<FormValuesProps> = async (data1) => {};

  return (
    <>
      <Grid container alignItems="center" direction="column">
        <Card sx={{ p: 5, mt: 10, boxShadow: 10, width: "50%",border:"1px solid white",borderRadius:"2%" }}>
          <Fab color="primary" size="large">
            <LockOutlinedIcon fontSize="large" />
          </Fab>
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "grid",
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                },
              }}
            >
              <TextField label="Name" id="name" variant="outlined" />
              <TextField label="User Name" id="name" variant="outlined" />
              <TextField label="Email" id="email" variant="outlined" />
              <TextField label="Password" id="password" variant="outlined" />
              <TextField
                label="Avatar (Image url)"
                id="avatar"
                variant="outlined"
              />
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                style={{ padding:"3%" }}
              />

              <TextField label="Age" id="age" variant="outlined" />
              <TextField
                label="Phone Number"
                id="phonenumber"
                variant="outlined"
              />
              <TextField label="Location" id="location" variant="outlined" />
              <TextField label="Insatagram Link" id="instalink" variant="outlined" />
              <TextField
                label="Twitter Link"
                id="twitterlink"
                variant="outlined"
              />
              <TextField
                name="about"
                multiline
                rows={1}
                label="About"
                variant="outlined"
              />
            </Box>
            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
              >
                Submit
              </LoadingButton>
            </Stack>
          </form>
        </Card>
      </Grid>
    </>
  );
};

export default Signup;
