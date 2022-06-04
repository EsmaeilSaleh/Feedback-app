import React, { useState, useContext, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [enteredName, setEnteredName] = useState("");
  const [enteredReview, setEnteredReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setEnteredReview(feedbackEdit.item.text);
      setValue(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const handleName = (e) => {
    setEnteredName(e.target.value);
  };

  const handleChange = (e) => {
    setEnteredReview(() => e.target.value);
    if (enteredReview === "") {
      setBtnDisabled(true);
    } else if (enteredReview !== "" && enteredReview.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("The Message should be longer than 10 characther");
    } else if (value < 0.5) {
      setBtnDisabled(true);
      setMessage("Please give a Rate too!");
    } else if (enteredReview.length > 10 && value > 0.5) {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      name: enteredName,
      text: enteredReview,
      rating: value,
    };
    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
      setBtnDisabled(true);
      setEnteredReview("");
      setValue(0);
    } else {
      addFeedback(newFeedback);
      setBtnDisabled(true);
      setEnteredReview("");
      setValue(0);
    }
  };

  return (
    <Card sx={{ width:{ xs: '18em', sm: "35em"}, backgroundColor: "gray", padding: "12px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#c1c1c1",
        }}
      >
        How would you rate This app?
      </Typography>
      <Rating
        precision={1}
        max={10}
        value={value}
        onChange={(event, newVal) => {
          setValue(newVal);
          if (enteredReview.length > 10) {
            setBtnDisabled(false);
          } else if (enteredReview === "") {
            setMessage("Please add a review too!");
          }
        }}
      />
      <form onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          value={enteredName}
          onChange={handleName}
          placeholder="Your name(Optional)"
        />
        <TextField
          variant="standard"
          multiline
          value={enteredReview}
          onChange={handleChange}
          placeholder="Write a review"
          rows="3"
          fullWidth
          sx={{ mt: "0.8em" }}
        />
        {message ? <p>{message}</p> : ""}
        <Button
          disabled={btnDisabled}
          type="submit"
          variant="contained"
          sx={{ mt: 3, ml: "50%", transform: "translateX(-50%)" }}
        >
          Add Review
        </Button>
      </form>
    </Card>
  );
};

export default FeedbackForm;
