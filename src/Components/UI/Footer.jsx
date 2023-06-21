import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ height: "9vh" }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; 2023 Portfolio Webiste Builder. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
