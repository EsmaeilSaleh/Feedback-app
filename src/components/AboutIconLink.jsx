import React from "react";

import { Link } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

const AboutIconLink = () => {
  return (
    <Tooltip title="About us" plaement="left-start">
      <Box sx={{ position: "sticky",  bottom: 2, mr: '-150%', zIndex: '2' }}>
        <Link to="/about">
          <HelpIcon fontSize="large" color='primary' sx={{ fontSize: "7em" }} />
        </Link>
      </Box>
    </Tooltip>
  );
};

export default AboutIconLink;
