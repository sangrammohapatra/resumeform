import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import Styles from "./BasicDetails.module.css";
import { Card, CardContent, CardActions, Typography } from "@mui/material";

const BasicDetailsForm = ({ resumeData, setResumeData, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedInLink, setLinkedInLink] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [leetcodeLink, setLeetcodeLink] = useState("");
  const [geeksforgeeksLink, setGeeksforgeeksLink] = useState("");
  const [basicDetails, setBasicDetails] = useState();
  const [flag, setFlag] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      designation,
      description,
      githubLink,
      linkedInLink,
      resumeLink,
      leetcodeLink,
      geeksforgeeksLink,
    };
    setBasicDetails(formData);
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
    setDesignation("");
    setGithubLink("");
    setLinkedInLink("");
    setResumeLink("");
    setLeetcodeLink("");
    setGeeksforgeeksLink("");
    setFlag(false);
  };

  const handleFinish = () => {
    setResumeData({
      ...resumeData,
      body: basicDetails,
    });

    console.log("Basic Details Form Data:", basicDetails);
    onSubmit(basicDetails);
    setFlag(true);
  };

  const editDetailsHandler = () => {
    setName(basicDetails.name);
    setEmail(basicDetails.email);
    setPhone(basicDetails.phone);
    setDesignation(basicDetails.designation);
    setDescription(basicDetails.description);
    setGithubLink(basicDetails.githubLink);
    setLinkedInLink(basicDetails.linkedInLink);
    setResumeLink(basicDetails.resumeLink);
    setLeetcodeLink(basicDetails.leetcodeLink);
    setGeeksforgeeksLink(basicDetails.geeksforgeeksLink);
  };

  const form1 = (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={Styles["form-field"]}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Designation"
              variant="outlined"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="About Yourself"
              variant="outlined"
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              fullWidth
              label="GitHub Link"
              variant="outlined"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              fullWidth
              label="LinkedIn Link"
              variant="outlined"
              value={linkedInLink}
              onChange={(e) => setLinkedInLink(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              fullWidth
              label="Resume Link"
              variant="outlined"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              fullWidth
              label="LeetCode Link"
              variant="outlined"
              value={leetcodeLink}
              onChange={(e) => setLeetcodeLink(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              fullWidth
              label="GeeksforGeeks Link"
              variant="outlined"
              value={geeksforgeeksLink}
              onChange={(e) => setGeeksforgeeksLink(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <Button type="submit" variant="outlined" color="primary">
              Add Basic Details
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
      </Box>
    </form>
  );
  useEffect(() => {
    console.log(flag);
  }, [flag]);
  return (
    <Box>
      {flag ? (
        <>{form1}</>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={6}>
            {form1}
          </Grid>
          <Grid item md={6} xs={12} sm={6} sx={{ border: "2px solid red" }}>
            <Card sx={{ maxWidth: "fit-content" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Basic Details
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Name : {basicDetails.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email : {basicDetails.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone : {basicDetails.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Designation : {basicDetails.designation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description : {basicDetails.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={editDetailsHandler}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default BasicDetailsForm;