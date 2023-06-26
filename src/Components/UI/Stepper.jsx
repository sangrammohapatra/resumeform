import React, { useEffect, useState } from "react";
import { Button, Typography, Stepper, Step, StepLabel } from "@mui/material";
import BasicDetailsForm from "../Form/BasicDetailsForm";
import EducationForm from "../Form/EducationDetails";
import SkillsForm from "../Form/SkillsForm";
import ExperienceForm from "../Form/ExperienceForm";
import ProjectsForm from "../Form/ProjectsForm";
import Styles from "./Stepper.module.css";
import { FcNext, FcPrevious, FcApproval } from "react-icons/fc";

const steps = [
  "Basic Details",
  "Education",
  "Skills",
  "Experience",
  "Projects",
];

const FormStepper = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [resumeData, setResumeData] = useState({
    body: {
      name: "",
      designation: "",
      description: "",
      links: [],
      contact: {
        phoneNumber: "",
        emailId: "",
      },
    },
  });

  useEffect(() => {
    console.log("Data", resumeData);
  }, [resumeData]);

  const handleNext = (data) => {
    console.log(data);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(resumeData);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFormSubmit = async () => {
    handleNext();
    try {
      console.log("Collected details:", resumeData);
      const data = await fetch("https://resume-buider-be.vercel.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume: resumeData }),
      });
      console.log("BE", await data.json());
    } catch (error) {
      console.log(error);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicDetailsForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            onSubmit={handleNext}
          />
        );
      case 1:
        return (
          <EducationForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            onSubmit={handleNext}
          />
        );
      case 2:
        return (
          <SkillsForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            onSubmit={handleNext}
          />
        );
      case 3:
        return (
          <ExperienceForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            onSubmit={handleNext}
          />
        );
      case 4:
        return (
          <ProjectsForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            onSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={Styles.mainDiv}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h5" gutterBottom>
              Form submitted successfully!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={props.showThankYou}
            >
              Submit
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className={Styles.buttons}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#245279" }}
                disabled={activeStep === 0}
                onClick={handleBack}
                size="large"
                sx={{ alignContent: "center", alignItems: "center" }}
              >
                <>
                  <FcPrevious />
                  Back
                </>
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={handleNext}
                style={{ backgroundColor: "#245279" }}
              >
                {activeStep === steps.length - 1 ? (
                  <>
                    Submit <FcApproval />
                  </>
                ) : (
                  <>
                    Next <FcNext />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormStepper;
