import React from "react";

import List from "@mui/material/Box";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
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
              handleDelete={handleDelete}
            />
          );
        })}
    </List>
  );
};

export default FeedbackList;
