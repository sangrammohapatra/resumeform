// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ButtonAppBar from "./Components/UI/Navbar";
import FormStepper from "./Components/UI/Stepper";
import ThankYou from "./Components/UI/Thanks";
function App() {
  const [showThanks, setShowThanks] = useState(false);
  const showThanksHandler = () => {
    setShowThanks(true);
  };
  const closeThanksHandler = () => {
    setShowThanks(false);
  };

  return (
    <>
      <ButtonAppBar />
      <FormStepper showThankYou={showThanksHandler} />
      {showThanks && (
        <ThankYou
          showThankYou={showThanks}
          closeThankYou={closeThanksHandler}
        />
      )}
    </>
  );
}

export default App;
