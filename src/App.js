import React, { useState } from "react";

import Container from "@mui/material/Container";

import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {



  return (
    <FeedbackProvider>
      <Container
        sx={{
          width: "53em",
          my: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <h1>My App</h1>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AboutIconLink />
      </Container>
    </FeedbackProvider>
  );
};

export default App;
