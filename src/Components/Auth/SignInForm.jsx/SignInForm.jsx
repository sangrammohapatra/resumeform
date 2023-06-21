import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import Styles from "./SignInForm.module.css";

const SignupForm = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  const handleLoginClick = () => {
    console.log("Login clicked");
    props.onLoginClick();
  };

  return (
    <Container maxWidth="xs" className={Styles.container}>
      <Box className={Styles.box}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form className={Styles.form} onSubmit={handleFormSubmit}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Phone"
            type="tel"
            variant="outlined"
            value={phone}
            onChange={handlePhoneChange}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
          <Typography
            variant="body2"
            align="center"
            className={Styles.switchForm}
          >
            Already have an account?{" "}
            <Button color="primary" onClick={handleLoginClick}>
              Log In
            </Button>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default SignupForm;
