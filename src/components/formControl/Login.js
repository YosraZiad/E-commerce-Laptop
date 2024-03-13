import React, { useRef, useState } from "react";
// Material UI Imports
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import Stack from "@mui/material/Stack";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const email = useRef();
  const password = useRef();
  //  const localSignUp=localStorage.getItem("signUp")
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location = "/";
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <Stack sx={{ mt: 1 }}>
      <TextField
        sx={{ mt: 2 }}
        id="email"
        label="email"
        variant="standard"
        fullWidth
        size="small"
        inputRef={email}
      />
      <FormControl sx={{ mt: 2, width: "100%" }} variant="standard" fullWidth>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          inputRef={password}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="contained"
        onClick={handleSignIn}
        sx={{ m: "30px auto", width: "180px", TextAlign: "center" }}
        startIcon={<LoginIcon />}
      >
        LOG IN
      </Button>
    </Stack>
  );
};

export default Login;
