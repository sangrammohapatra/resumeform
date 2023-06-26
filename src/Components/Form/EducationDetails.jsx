import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import Styles from "./EducationDetails.module.css";
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
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EducationForm = (props) => {
  const [instituteName, setInstituteName] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [date1, setDate1] = useState(dayjs());
  const [date2, setDate2] = useState(dayjs());
  const [website, setWebsite] = useState("");
  const [grade, setGrade] = useState("");
  const [education, setEducation] = useState([]);
  const [flag, setFlag] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    console.log(education);
    if (education.length === 0) {
      setFlag(true);
    }
  }, [flag, education]);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const startDate = moment(date1).format("YYYY-MM-DD");
    const endDate = moment(date2).format("YYYY-MM-DD");
    const formData = {
      instituteName,
      location,
      degree,
      startDate,
      endDate,
      website,
      grade,
    };

    if (editIndex !== null) {
      const updatedEducation = [...education];
      updatedEducation[editIndex] = formData;
      setEducation(updatedEducation);
      setEditIndex(null);
    } else {
      setEducation([...education, formData]);
    }

    setInstituteName("");
    setLocation("");
    setDegree("");
    setDate1(dayjs());
    setDate2(dayjs());
    setWebsite("");
    setGrade("");
    setFlag(false);
  };

  const editDetailsHandler = (index) => {
    setInstituteName(education[index].instituteName);
    setLocation(education[index].location);
    setDegree(education[index].degree);
    setDate1(education[index].date1);
    setDate2(education[index].date2);
    setWebsite(education[index].website);
    setGrade(education[index].grade);
    setEditIndex(index);
  };

  const handleFinish = () => {
    props.setResumeData({
      ...props.resumeData,
      education: education,
    });
    console.log("Education Form Data:", education);
    props.onSubmit(education);
    setFlag(true);
  };

  const deleteDetailsHandler = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
    console.log(education.length);
  };

  const form2 = (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Institute Name"
            variant="outlined"
            value={instituteName}
            onChange={(e) => setInstituteName(e.target.value)}
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
            label="Degree"
            variant="outlined"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DesktopDatePicker
                sx={{ width: "100%" }}
                label="Start Date"
                value={date1}
                onChange={(newValue) => {
                  setDate1(newValue);
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DesktopDatePicker
                sx={{ width: "100%" }}
                label="End Date"
                value={date2}
                onChange={(newValue) => setDate2(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
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
            label="Grade/Marks"
            variant="outlined"
            type="number"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}></Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Button type="submit" variant="outlined" color="primary">
            Add Education
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
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
        *First click on Add Education to add the education details to resume
        then click on SUBMIT to proceed further.
      </Typography>
    </form>
  );
  return (
    <Box>
      {flag ? (
        <>{form2}</>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={7} xs={12} sm={6}>
            {form2}
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sm={6}
            sx={{
              marginTop: "25px",
            }}
          >
            <div className={Styles.accordion}>
              {education.map((item, index) => {
                return (
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {`${item.degree} Details`}
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

export default EducationForm;
