import React from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';

const AboutPage = () => {
  return (
    <Container maxWidth="sm" sx={{ maxWidth: "52em", my: 10 }}>
      <h2>AboutPage</h2>
      <Card sx={{ color: "#989898", background: "#323232", padding: "1em" }}>
        <p>
          Hello, My Name is Esmaeil Saleh. I am a front-end React developer.
          This is one of my projects which is done using <span style={{color: 'red'}}>ReactJS</span> and <span style={{ color:'red' }}>MUI</span>.
        </p>
        <p> version: 1.0.0</p>
        <Button variant="standard" sx={{display: 'flex',  background: '#000', ml: '50%', transform:'translateX(-50%)'}}>
          <HomeIcon sx={{color: 'red'}}/>
          <Typography sx={{ ml: '0.8em', color: 'red' }}>
          <Link to="/" style={{ color: 'red', textDecoration: "none" }}>
            Back to Home
          </Link>
          </Typography>
        </Button>
      </Card>
    </Container>
  );
};

export default AboutPage;
