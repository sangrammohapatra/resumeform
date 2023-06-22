import React, { useEffect, useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import Styles from "./SkillsForm.module.css";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

const options = [
  "Node JS",
  "HTML",
  "CSS",
  "SQL",
  "AWS",
  "Serverless",
  "Jenkins",
  "Circle CI",
  "MongoDB",
  "DynamoDB",
  "AWS Gamelift",
  "CI/CD",
  "Firebase",
  "Javascript",
  "React JS",
  "Konva JS",
  "Git",
  "GitHub",
  "C",
  "Solidity",
  "C++",
  "Data Structures And Algorithms",
];
const SkillsForm = (props) => {
  const [skills, setSkills] = useState([]);
  const [flag, setFlag] = useState(true);
  const formData = [...skills];

  useEffect(() => {
    console.log(formData);
  }, [flag, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(false);
  };

  const handleFinish = (e) => {
    e.preventDefault();

    props.setResumeData({
      ...props.resumeData,
      skills: formData,
    });
    console.log("Skills Form Data:", formData);
    props.onSubmit(formData);
  };

  return (
    <Box>
      <form className={Styles.formContainer} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12} sm={6}>
            <Autocomplete
              multiple
              id="tags-filled"
              options={options.map((option) => option)}
              freeSolo
              value={skills}
              onChange={(event, newValue) => setSkills(newValue)}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Skills"
                  placeholder="Your Skills"
                />
              )}
            />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className={Styles.formButton}
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleFinish}
              sx={{ height: "40px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SkillsForm;
