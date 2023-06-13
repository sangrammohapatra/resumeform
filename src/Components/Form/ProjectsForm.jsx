import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import Styles from "./ProjectsForm.module.css";
import Typography from "@mui/material/Typography";

const ProjectForm = (props) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [deployedLink, setDeployedLink] = useState("");
  const [driveLinks, setDriveLinks] = useState("");
  const [projects, setProjects] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      projectTitle,
      projectDescription,
      githubLink,
      deployedLink,
      driveLinks,
    };
    setProjects([...projects, formData]);

    setProjectTitle("");
    setProjectDescription("");
    setGithubLink("");
    setDeployedLink("");
    setDriveLinks("");
  };
  const handleFinish = () => {
    props.setResumeData({
      ...props.resumeData,
      projects: projects,
    });
    console.log("Project Form Data:", projects);
    props.onSubmit(props.resumeData);
  };
  const handleProjectTitleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleGithubLinkChange = (e) => {
    setGithubLink(e.target.value);
  };

  const handleDeployedLinkChange = (e) => {
    setDeployedLink(e.target.value);
  };

  const handleDriveLinksChange = (e) => {
    setDriveLinks(e.target.value);
  };

  return (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Project Title"
            variant="outlined"
            value={projectTitle}
            onChange={handleProjectTitleChange}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Project Description"
            variant="outlined"
            multiline
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Github Link"
            variant="outlined"
            value={githubLink}
            onChange={handleGithubLinkChange}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Deployed Project Link"
            variant="outlined"
            value={deployedLink}
            onChange={handleDeployedLinkChange}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Drive Links (separated by commas)"
            variant="outlined"
            value={driveLinks}
            onChange={handleDriveLinksChange}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}></Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Button type="submit" variant="outlined" color="primary">
            Add Project
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
      <Typography variant="p">
        First click on ADD PROJECT to add the project to resume then click on
        SUBMIT to proceed further.
      </Typography>
    </form>
  );
};

export default ProjectForm;
