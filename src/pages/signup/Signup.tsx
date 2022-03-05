import { useCallback, useState, useEffect, useMemo } from "react";
import { useSnackbar } from "notistack";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Iconify from "../../components/Iconify";
import {useSignupMutation} from "../../Services/AuthApi"


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

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<any>();
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const onChangeName = (event: any) => {
    setName(event.target.value);
  };
  const onChangeUserName = (event: any) => {
    setUserName(event.target.value);
  };
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeAvatar = (event: any) => {
    setAvatar(event.target.value);
  };
  const onChangeAge = (event: any) => {
    setAge(event.target.value);
  };
  const onChangePhone = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const onChangeBio = (event: any) => {
    setBio(event.target.value);
  };
  const onChangeLocation = (event: any) => {
    setLocation(event.target.value);
  };

  const [registerUser, { isLoading,error:signupError }] = useSignupMutation()
  let registerError:any = signupError
  // console.log("signupError",signupError?.data?.message);
  

  const uploadImageHandler = async (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    // console.log(file);
    // const uploadParams: Upload = {
    //   image: formData,
    // };
    // const {data} = await dispatch(uploadApi.endpoints.uploadImage.initiate(uploadParams))
    // let uploadImageResponse: any = await upload_image(formData);
    // console.log("uploadImageResponse", uploadImageResponse);
  };

  const onSubmit = async () => {
    const user: UserProfile = {
      Name: name,
      username: userName,
      Age: age,
      Location: location,
      Password: password,
      Email_id: email,
      PhoneNumber: phoneNumber,
      avatar: avatar,
      bio: bio,
    };

    let userSignupResponse:any = await registerUser(user)
    console.log("userSignupResponse",userSignupResponse?.data?.msg);
    if(userSignupResponse.data?.msg === "Registered successfull!"){
      // localStorage.setItem("Token",userSignupResponse.data?.token)
      navigate('/signin')
    }
   };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container alignItems="center" direction="column">
          <Card
            sx={{
              p: 5,
              mt: [2, 10, "10px", "10px", "10px"],
              marginBottom: [2, 2, null, null, null],
              // boxShadow:5,
              width: ["70%", "50%", "50%", "50%", "50%"],
              border: "1px solid white",
              borderRadius: "1%",
            }}
          >
            <Grid container alignItems="center" direction="column">
              <Fab color="primary" size="large">
                <LockOutlinedIcon fontSize="large" />
              </Fab>
              <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                Sign Up
              </Typography>
            </Grid>
            <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Fill in your details
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Since you are creating the account, we need some information
                  about you
                </Typography>
              </Box>
            </Box>
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
                <TextField
                  label="Name"
                  id="name"
                  variant="outlined"
                  onChange={onChangeName}
                />
                <TextField
                  label="User Name"
                  id="username"
                  variant="outlined"
                  onChange={onChangeUserName}
                />
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
                <TextField
                  label="Avatar (Image url)"
                  id="avatar"
                  variant="outlined"
                  onChange={onChangeAvatar}
                />
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ padding: "3%" }}
                  onChange={uploadImageHandler}
                />

                <TextField
                  label="Age"
                  id="age"
                  variant="outlined"
                  onChange={onChangeAge}
                />
                <TextField
                  label="Phone Number"
                  id="phonenumber"
                  variant="outlined"
                  onChange={onChangePhone}
                />
                <TextField
                  label="Location"
                  id="location"
                  variant="outlined"
                  onChange={onChangeLocation}
                />
                <TextField
                  name="about"
                  multiline
                  rows={1}
                  label="About"
                  variant="outlined"
                  onChange={onChangeBio}
                />
              </Box>
              <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                <LoadingButton size="large" type="submit" variant="contained">
                  Submit
                </LoadingButton>
              </Stack>
            </form>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              By registering, I agree to Flip&nbsp;
              <Link underline="always" color="text.primary" href="#">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link underline="always" color="text.primary" href="#">
                Privacy Policy
              </Link>
              .
            </Typography>
            <Typography variant="h6" sx={{ mt: 3, textAlign: "center" }}>
              Already have an account?{" "}
              <Link variant="h6" to="/signin" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </Card>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Signup;
