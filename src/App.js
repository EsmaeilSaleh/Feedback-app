import React, { useState } from "react";

import Container from "@mui/material/Container";

import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id, rating) => {
    if (window.confirm(`Are you Sure you want to delete ${rating}?`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

const handleAddFeedback = (newFeedback) => {

setFeedback([newFeedback, ...feedback])
}

  return (
    <Container
      sx={{
        width: '53em',
        my: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <h1>My App</h1>
      <FeedbackForm addFeedback={handleAddFeedback}/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </Container>
  );
};

export default App;
