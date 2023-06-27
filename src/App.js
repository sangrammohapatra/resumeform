// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import NavBar from "./Components/UI/Navbar";
import FormStepper from "./Components/UI/Stepper";
import ThankYou from "./Components/UI/Thanks";
// import Footer from "./Components/UI/Footer";
import { Box } from "@mui/material";
// import LoginForm from "./Components/Auth/Login/LoginForm";
// import SignupForm from "./Components/Auth/SignInForm.jsx/SignInForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showThanks, setShowThanks] = useState(false);
  const [id, setId] = useState();
  // const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  // const handleSignInClick = () => {
  //   setIsLoginFormVisible(false);
  // };

  // const handleLoginClick = () => {
  //   setIsLoginFormVisible(true);
  // };
  const showThanksHandler = (data) => {
    setId(data);
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
          id={id}
          showThankYou={showThanks}
          closeThankYou={closeThanksHandler}
        />
      )}

      {/* {isLoginFormVisible ? (
        <LoginForm onSignInClick={handleSignInClick} />
      ) : (
        <SignupForm onLoginClick={handleLoginClick} />
      )} */}
      {/* <Router>
        <div>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                isLoginFormVisible ? (
                  <LoginForm onSignInClick={handleSignInClick} />
                ) : (
                  <SignupForm onLoginClick={handleLoginClick} />
                )
              }
            >
              <Route
                exact
                path="/DisplayDetails"
                element={<FormStepper showThankYou={showThanksHandler} />}
              />
            </Route>
          </Routes> */
      /* <Footer />
        </div>
      </Router> */}

      {/* <Footer /> */}
    </Box>
  );
}

export default App;
