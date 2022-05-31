import React, { useState, useContext } from "react";

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback } = useContext(FeedbackContext);

  const [enteredReview, setEnteredReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(0);

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
      text: enteredReview,
      rating: value,
    };
    addFeedback(newFeedback);
    setBtnDisabled(true);
    setEnteredReview("");
    setValue(0);
  };

  return (
    <Card sx={{ backgroundColor: "gray", padding: "12px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#c1c1c1",
        }}
      >
        How would you rate your service with us?
      </Typography>
      <Rating
        precision={0.5}
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
          multiline
          value={enteredReview}
          onChange={handleChange}
          placeholder="Write a review"
          rows="3"
          fullWidth
          focused
          label="Review: "
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
