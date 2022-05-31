import React from "react";
import { useContext } from 'react'

import List from "@mui/material/Box";
import FeedbackItem from "./FeedbackItem";

import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {

const {feedback} = useContext(FeedbackContext)


  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet!</p>;
  }
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
        {feedback.map((item) => {
          return (
            <FeedbackItem
              key={item.id}
              item={item}
            />
          );
        })}
    </List>
  );
};

export default FeedbackList;
