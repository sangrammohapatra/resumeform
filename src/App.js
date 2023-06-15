// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/UI/Navbar";
import FormStepper from "./Components/UI/Stepper";
import ThankYou from "./Components/UI/Thanks";
import Footer from "./Components/UI/Footer";
import { Box } from "@mui/material";
function App() {
  const [showThanks, setShowThanks] = useState(false);
  const showThanksHandler = () => {
    setShowThanks(true);
  };
  const closeThanksHandler = () => {
    setShowThanks(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <NavBar />
      <FormStepper showThankYou={showThanksHandler} />
      {showThanks && (
        <ThankYou
          showThankYou={showThanks}
          closeThankYou={closeThanksHandler}
        />
      )}
      <Footer />
    </Box>
  );
}

export default App;
