import React, { useState, useContext } from "react";

import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = (props) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Container >
      <Badge
        badgeContent={props.item.rating}
        color="primary"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Card
          sx={{
            backgroundColor: "#858585",
            borderRadius: "10px",
            width: {xs: '20em', sm: '32em', md: '42em'},
            my: "0.6em",
            display: "relative",
          }}
        >
          <IconButton
            onClick={() => editFeedback(props.item)}
            sx={{ position: "absolute", right: {xs: '8%', md: "5%"  }}}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => deleteFeedback(props.item.id, props.item.rating)}
            sx={{ position: "absolute", right: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{padding: '2em', paddingBottom: 0}}>
            <Typography> {props.item.name} </Typography>
            <Rating value={props.item.rating} precision={0.5} readOnly max={10} />
          </Box>
          <Divider variant="middle" />
          <Typography
            sx={{
              backgroundColor: "inherit",
              color: "#121212",
              padding: "2em",
            }}
          >
            {props.item.text}
          </Typography>
        </Card>
      </Badge>
    </Container>
  );
};

export default FeedbackItem;
