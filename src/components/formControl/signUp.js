import React, { useRef } from "react";
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
import { useState } from "react";
import Stack from "@mui/material/Stack";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //store date signup in localStrage
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location = "/register";
    }
  };

  return (
    <Stack sx={{ mt: 1 }}>
      <TextField
        sx={{ mt: 2 }}
        id="user name"
        label="username"
        variant="standard"
        fullWidth
        size="small"
        inputRef={name}
      />
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
          type={showPassword ? "text" : "password"}
          inputRef={password}
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
        variant="outlined"
        sx={{ m: "30px auto", width: "180px", TextAlign: "center" }}
        onClick={handleClick}
        startIcon={<LoginIcon />}
      >
        SIGN UP
      </Button>
    </Stack>
  );
};

export default SignUp;
