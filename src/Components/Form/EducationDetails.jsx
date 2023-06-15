import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import Styles from "./EducationDetails.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";
import { Card, CardContent, CardActions, Typography } from "@mui/material";

const EducationForm = (props) => {
  const [instituteName, setInstituteName] = useState("");
  const [location, setLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const [website, setWebsite] = useState("");
  const [marks, setMarks] = useState("");
  const [education, setEducation] = useState([]);
  const [flag, setFlag] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    console.log(education);
  }, [flag, education]);
  const handleSubmit = (e, index) => {
    e.preventDefault();
    const Date1 = moment(startDate).format("DD/MMM/YYYY");
    const Date2 = moment(endDate).format("DD/MMM/YYYY");
    const formData = {
      instituteName,
      location,
      degree,
      Date1,
      Date2,
      website,
      marks,
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
    setStartDate(dayjs());
    setEndDate(dayjs());
    setWebsite("");
    setMarks("");
    setFlag(false);
  };
  const editDetailsHandler = (index) => {
    setInstituteName(education[index].instituteName);
    setLocation(education[index].location);
    setDegree(education[index].degree);
    setStartDate(education[index].startDate);
    setEndDate(education[index].endDate);
    setWebsite(education[index].website);
    setMarks(education[index].marks);
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
            <DemoContainer components={["DatePicker"]}>
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
            label="Marks"
            variant="outlined"
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
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
        First click on Add Education to add the education details to resume then
        click on SUBMIT to proceed further.
      </Typography>
    </form>
  );
  return (
    <Box>
      {flag ? (
        <>{form2}</>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={6}>
            {form2}
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {education.map((item, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: "fit-content" }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Education Details {index + 1}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Institute Name : {item.instituteName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Degree : {item.degree}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Marks : {item.marks}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => {
                          editDetailsHandler(index);
                        }}
                      >
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default EducationForm;
