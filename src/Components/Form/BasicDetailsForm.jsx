import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import Styles from "./BasicDetails.module.css";
import {
  Card,
  IconButton,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
      designation,
      description,
      links: [
        {
          type: "github",
          link: githubLink,
        },
        {
          type: "linkedIn",
          link: linkedInLink,
        },
        {
          type: "resume",
          link: resumeLink,
        },
        {
          type: "leetcode",
          link: leetcodeLink,
        },
        {
          type: "geeksforgeeks",
          link: geeksforgeeksLink,
        },
      ],
      contact: {
        phoneNumber: phone,
        emailId: email,
      },
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
    console.log("Resume data", resumeData);
    onSubmit(basicDetails);
    setFlag(true);
  };

  const editDetailsHandler = () => {
    setName(basicDetails.name);
    setEmail(basicDetails.contact.emailId);
    setPhone(basicDetails.contact.phoneNumber);
    setDesignation(basicDetails.designation);
    setDescription(basicDetails.description);
    setGithubLink(basicDetails.links[0].link);
    setLinkedInLink(basicDetails.links[1].link);
    setResumeLink(basicDetails.links[2].link);
    setLeetcodeLink(basicDetails.links[3].link);
    setGeeksforgeeksLink(basicDetails.links[4].link);
  };

  const deleteDetailsHandler = () => {
    setFlag(true);
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
          <Grid
            item
            md={6}
            xs={12}
            sm={6}
            sx={{
              paddingLeft: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleFinish}>
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
          <Grid item md={7} xs={12} sm={6}>
            {form1}
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              variant="outlined"
              sx={{ maxWidth: "fit-content", backgroundColor: "#f5f5f5" }}
            >
              <CardContent>
                <Typography
                  sx={{ color: "#17354f" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Basic Details
                </Typography>
                {Object.keys(basicDetails).map((key, index) => {
                  if (key === "links") {
                    return basicDetails[key].map((itm, indx) => (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        key={indx}
                      >
                        {`${itm.type.toUpperCase()} : ${itm.link}`}
                      </Typography>
                    ));
                  }
                  if (key === "contact") {
                    return Object.keys(basicDetails[key]).map((itm, indx) => (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        key={indx}
                      >
                        {`${itm.toUpperCase()} : ${basicDetails[key][itm]}`}
                      </Typography>
                    ));
                  }
                  return (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      key={index}
                    >
                      {`${key.toUpperCase()} : ${basicDetails[key]}`}
                    </Typography>
                  );
                })}
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px",
                }}
              >
                <Button size="small" onClick={editDetailsHandler}>
                  Edit
                </Button>
                <IconButton
                  aria-label="delete"
                  // style={styles.deleteButton}
                  onClick={() => deleteDetailsHandler()}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default BasicDetailsForm;
