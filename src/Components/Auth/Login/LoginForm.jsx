import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Container,
  Typography,
  Box,
} from "@mui/material";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const handleSignUpClick = () => {
    console.log("Sign up clicked");
    props.onSignInClick();
  };

  return (
    <Container maxWidth="xs" className={styles.container}>
      <Box className={styles.box}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={handleRememberMeChange}
                color="primary"
              />
            }
            label="Remember Me"
          />
          <Button type="submit" variant="contained" color="primary">
            Login In
          </Button>
          <Typography variant="body2" align="center">
            New user?{" "}
            <Button color="primary" onClick={handleSignUpClick}>
              Sign up
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
