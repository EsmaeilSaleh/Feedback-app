import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = ({ text }) => {
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "#181818" }}>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "inherit",
              color: "#a2a2a2",
              fontWeight: "700",
            }}
          >
        <Link to="/" underline="none">
            {text}
        </Link>
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
