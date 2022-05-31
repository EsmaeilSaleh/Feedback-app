import React from "react";
import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

const AboutPage = () => {
  return (
    <Container maxWidth="sm" sx={{  maxWidth: '52em', my: 10  }}>
      <h2>AboutPage</h2>
      <Card sx={{ padding: "1em"}}>
        <p>
          Hello, My Name is Esmaeil Saleh. I am a front-end React developer.
          This is one of my projects which is done using reactjs and mui.
        </p>
        <p> version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </Card>
    </Container>
  );
};

export default AboutPage;
