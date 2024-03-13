// Material UI Imports
import { Chip, Paper, Switch } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import SignUp from "./signUp";

import Login from "./Login";
const Root = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack>
      <Paper
        elevation={3}
        sx={{
          m: "0 auto",
          p: "28px 16px",
          width: "350px",
          textAlign: "center",
          mt: 5,
        }}
      >
        {checked ? (
          <Chip
            sx={{ mt: 4 }}
            icon={<FaceIcon />}
            label="Log In"
            color="primary"
          />
        ) : (
          <Chip
            sx={{ mt: 4 }}
            icon={<LockPersonIcon />}
            label="Log In"
            color="primary"
          />
        )}
        <br />
        <Switch
          sx={{ mt: 2 }}
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        {checked ? <Login /> : <SignUp />}
      </Paper>
    </Stack>
  );
};

export default Root;
