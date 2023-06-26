import React, { useState, useEffect } from "react";
import { Box, IconButton, TextField, Button, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ArrowDropDown";
import Styles from "./ProjectsForm.module.css";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { FcApproval } from "react-icons/fc";

const ProjectForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);
  const [githubLink, setGithubLink] = useState("");
  const [deployedLink, setDeployedLink] = useState("");
  const [driveLinks, setDriveLinks] = useState("");
  const [projects, setProjects] = useState([]);
  const [flag, setFlag] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    console.log(projects);
    if (projects.length === 0) {
      setFlag(true);
    }
  }, [flag, projects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      links: { github: githubLink, website: deployedLink, images: driveLinks },
    };
    if (editIndex !== null) {
      const updatedEducation = [...projects];
      updatedEducation[editIndex] = formData;
      setProjects(updatedEducation);
      setEditIndex(null);
    } else {
      setProjects([...projects, formData]);
    }
    setTitle("");
    setContent("");
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
    props.onSubmit();
  };

  const editDetailsHandler = (index) => {
    setTitle(projects[index].title);
    setContent(projects[index].content);
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(() => {
      const ctxContent = e.target.value;
      return ctxContent.split(".");
    });
  };

  const handleGithubLinkChange = (e) => {
    setGithubLink(e.target.value);
  };

  const handleDeployedLinkChange = (e) => {
    setDeployedLink(e.target.value);
  };

  const handleDriveLinksChange = (e) => {
    setDriveLinks(() => {
      const ctxDrivelink = e.target.value;
      return ctxDrivelink.split(",");
    });
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
              value={title}
              onChange={handleTitleChange}
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Project Description"
              variant="outlined"
              multiline
              value={content}
              onChange={handleContentChange}
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
              variant="contained"
              color="primary"
              onClick={handleFinish}
            >
              Submit <FcApproval />
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
          <Grid item md={7} xs={12} sm={6}>
            {form4}
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
              {projects.map((item, index) => {
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
                        {`${item.title} Details`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {Object.keys(item).map((key, index) => {
                        if (key === "links") {
                          return Object.keys(item[key]).map((itm, indx) => {
                            if (itm === "images") {
                              return Object.keys(item[key].itm).map(
                                (ele, ind) => (
                                  <Typography
                                    variant="body2"
                                    color="black"
                                    key={ind}
                                  >
                                    {`${ele.toUpperCase()} : ${
                                      item[key][itm][ele]
                                    }`}
                                  </Typography>
                                )
                              );
                            }
                            return (
                              <Typography
                                variant="body2"
                                color="black"
                                key={indx}
                              >
                                {`${itm.toUpperCase()} : ${item[key][itm]}`}
                              </Typography>
                            );
                          });
                        }
                        return (
                          <Typography variant="body2" color="black" key={index}>
                            {`${key.toUpperCase()} : ${item[key]}`}
                          </Typography>
                        );
                      })}
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

export default ProjectForm;
