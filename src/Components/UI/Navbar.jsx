import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import logoImg from "../../Assets/HatchfulExport-All/2222.png";
import Style from "./Navbar.module.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#245279" }}>
        <Toolbar>
          <img src={logoImg} alt="logo" className={Style.logo} />
          <Typography ml={3} variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Portfolio Webiste Builder
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
