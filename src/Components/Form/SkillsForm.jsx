import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Checkbox,
  ListItemText,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  List,
  ListItem,
} from "@mui/material";
import Styles from "./SkillsForm.module.css";

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
  const [otherSkill, setOtherSkill] = useState("");
  const [flag, setFlag] = useState(true);
  const otherSkillsArray = otherSkill.split(",").map((skill) => skill.trim());
  const formData = [...skills, ...otherSkillsArray];

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

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleOtherSkillChange = (e) => {
    setOtherSkill(e.target.value);
  };

  const editDetailsHandler = () => {
    setSkills(skills);
  };

  const form3 = (
    <form className={Styles.formContainer} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            required
            fullWidth
            select
            label="Skills"
            variant="outlined"
            value={skills}
            onChange={handleSkillsChange}
            SelectProps={{
              multiple: true,
              renderValue: (selected) => selected.join(", "),
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={skills.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            fullWidth
            label="Other Skills"
            variant="outlined"
            value={otherSkill}
            onChange={handleOtherSkillChange}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Button type="submit" variant="outlined" color="primary">
            Add Skills
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
          <Grid item md={5} xs={12} sm={6}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor: "#f5f5f5",
                width: "500px",
                margin: "20px",
              }}
            >
              <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{ color: "#17354f" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Skills
                </Typography>
                <List>
                  {formData.map((ele, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={ele} />
                    </ListItem>
                  ))}
                </List>
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

export default SkillsForm;
