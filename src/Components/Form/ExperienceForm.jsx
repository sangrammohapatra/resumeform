import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Styles from "./ExperienceForm.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ArrowDropDown";
import dayjs from "dayjs";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const [flag, setFlag] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    console.log(experience);
    if (experience.length === 0) {
      setFlag(true);
    }
  }, [flag, experience]);

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
    if (editIndex !== null) {
      const updatedEducation = [...experience];
      updatedEducation[editIndex] = formData;
      setExperience(updatedEducation);
      setEditIndex(null);
    } else {
      setExperience([...experience, formData]);
    }
    setCompanyName("");
    setLocation("");
    setRole("");
    setStartDate(dayjs());
    setEndDate(dayjs());
    setWebsite("");
    setDescription("");
    setSkills("");
    setFlag(false);
  };
  const handleFinish = () => {
    props.setResumeData({
      ...props.resumeData,
      experience: experience,
    });
    console.log("Experience Form Data:", experience);
    props.onSubmit(experience);
  };

  const editDetailsHandler = (index) => {
    setCompanyName(experience[index].companyName);
    setLocation(experience[index].location);
    setRole(experience[index].role);
    setStartDate(experience[index].startDate);
    setEndDate(experience[index].endDate);
    setWebsite(experience[index].website);
    setDescription(experience[index].description);
    setSkills(experience[index].skills);
    setEditIndex(index);
  };

  const deleteDetailsHandler = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
    console.log(experience.length);
  };

  const form3 = (
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
                sx={{ width: "100%" }}
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
                sx={{ width: "100%" }}
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
        <Grid
          item
          md={6}
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
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
        *First click on Add Experience to add the experience to resume then
        click on SUBMIT to proceed further.
      </Typography>
    </form>
  );
  return (
    <Box>
      {flag ? (
        <>{form3}</>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={7} xs={12} sm={6}>
            {form3}
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sm={6}
            sx={{
              marginTop: "30px",
            }}
          >
            <div className={Styles.accordion}>
              {experience.map((item, index) => {
                return (
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {`${item.companyName} Details`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {Object.keys(item).map((key, index) => (
                        <Typography variant="body2" color="black" key={index}>
                          {`${key.toUpperCase()} : ${item[key]}`}
                        </Typography>
                      ))}
                    </AccordionDetails>
                    <div className={Styles.buttonContainer}>
                      <Button
                        size="small"
                        onClick={() => {
                          editDetailsHandler(index);
                        }}
                      >
                        Edit
                      </Button>
                      <IconButton
                        aria-label="delete"
                        // style={styles.deleteButton}
                        onClick={() => deleteDetailsHandler()}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </Accordion>
                );
              })}{" "}
            </div>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ExperienceForm;
