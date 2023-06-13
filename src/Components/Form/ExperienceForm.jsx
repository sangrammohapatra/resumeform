import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import Styles from "./ExperienceForm.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";

const ExperienceForm = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Date1 = moment(startDate).format("DD/MMM/YYYY");
    const Date2 = moment(endDate).format("DD/MMM/YYYY");
    const formData = {
      companyName,
      location,
      role,
      Date1,
      Date2,
      website,
      description,
      skills,
    };
    setExperience([...experience, formData]);

    setCompanyName("");
    setLocation("");
    setRole("");
    setStartDate(dayjs());
    setEndDate(dayjs());
    setWebsite("");
    setDescription("");
    setSkills("");
  };
  const handleFinish = () => {
    props.setResumeData({
      ...props.resumeData,
      experience: experience,
    });
    console.log("Experience Form Data:", experience);
    props.onSubmit(experience);
  };
  return (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Role"
            variant="outlined"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DesktopDatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DesktopDatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Website"
            variant="outlined"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Skills Involved"
            variant="outlined"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Button type="submit" variant="outlined" color="primary">
            Add more Experience
          </Button>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Button
            className={Styles.formButton}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleFinish}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      <Typography>
        First click on Add Experience to add the experience to resume then click
        on SUBMIT to proceed further.
      </Typography>
    </form>
  );
};

export default ExperienceForm;
