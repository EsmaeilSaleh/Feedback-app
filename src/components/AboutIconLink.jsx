import React from "react";

import { Link } from "react-router-dom";

import HelpIcon from "@mui/icons-material/Help";
import Box from "@mui/material/Box";

const AboutIconLink = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        bottom: { xs: '10%', sm: '20%' },
        mr: { xs: "-90%", sm: "-110%", md: "-140%" },
        zIndex: "2",
      }}
    >
      <Link to="/about">
        <HelpIcon
          fontSize="large"
          color="primary"
          sx={{ fontSize: { xs: "4em", sm: "5em", md: "6em" } }}
        />
      </Link>
    </Box>
  );
};

export default AboutIconLink;
