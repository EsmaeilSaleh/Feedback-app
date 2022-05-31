import React from "react";
import { Link } from 'react-router-dom'

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

const AboutPage = () => {
  return (
    <Container sx={{ my: 10, width: '53em' }}>
      <h2>AboutPage</h2>
      <Card sx={{ padding: '1em' }}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p> version: 1.0.0</p>
        <Link to='/'>Back to Home</Link>
      </Card>
    </Container>
  );
};

export default AboutPage;
