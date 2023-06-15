import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import Styles from "./ProjectsForm.module.css";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const ProjectForm = (props) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [deployedLink, setDeployedLink] = useState("");
  const [driveLinks, setDriveLinks] = useState("");
  const [projects, setProjects] = useState([]);
  const [flag, setFlag] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    console.log(projects);
    if (projects.length === 0) {
      setFlag(true);
    }
  }, [flag, projects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      projectTitle,
      projectDescription,
      githubLink,
      deployedLink,
      driveLinks,
    };
    if (editIndex !== null) {
      const updatedEducation = [...projects];
      updatedEducation[editIndex] = formData;
      setProjects(updatedEducation);
      setEditIndex(null);
    } else {
      setProjects([...projects, formData]);
    }
    setProjectTitle("");
    setProjectDescription("");
    setGithubLink("");
    setDeployedLink("");
    setDriveLinks("");

    setFlag(false);
  };
  const handleFinish = () => {
    props.setResumeData({
      ...props.resumeData,
      projects: projects,
    });
    console.log("Project Form Data:", projects);
    props.onSubmit(projects);
  };

  const editDetailsHandler = (index) => {
    setProjectTitle(projects[index].projectTitle);
    setProjectDescription(projects[index].projectDescription);
    setGithubLink(projects[index].githubLink);
    setDriveLinks(projects[index].driveLinks);
    setDeployedLink(projects[index].deployedLink);
    setEditIndex(index);
  };

  const deleteDetailsHandler = (index) => {
    const updatedProject = [...projects];
    updatedProject.splice(index, 1);
    setProjects(updatedProject);
    console.log(projects.length);
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

  const form4 = (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <Box sx={{ p: 2 }}>
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
      </Box>
      <Typography variant="p">
        *First click on ADD PROJECT to add the project to resume then click on
        SUBMIT to proceed further.
      </Typography>
    </form>
  );
  return (
    <Box>
      {flag ? (
        <>{form4}</>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={6}>
            {form4}
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
            {projects.map((item, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{ margin: "15px" }}
                >
                  <Card sx={{ backgroundColor: "#f5f5f5" }} variant="outlined">
                    <CardContent>
                      <Typography
                        sx={{ color: "#17354f" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Experience Details {index + 1}
                        <IconButton
                          aria-label="delete"
                          // style={styles.deleteButton}
                          onClick={() => deleteDetailsHandler()}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Project Title : {item.projectTitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Project Description : {item.projectDescription}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Github Link : {item.githubLink}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Drive Links : {item.driveLinks}
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

export default ProjectForm;
