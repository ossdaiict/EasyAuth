import React from "react";
import {
  Paper,
  Typography,
  Box,
  makeStyles,
  Container,
  Tooltip
} from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 8,
    padding: 16,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function UserDetails({ user }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container maxWidth="md">
      <Paper
        variant="outlined"
        className={classes.root}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Box display="flex" alignItems="center">
          <Box p={1} flexGrow={1}>
            <Typography variant="h6">{user.username}</Typography>
            <Typography variant="caption">{user.email}</Typography>
          </Box>
          <Box p={1}>{user.verified ? <Tooltip title="Email Verified" aria-label="Email Verified"><CheckCircle /></Tooltip> : <div></div>}</Box>
        </Box>
        {open ? (
          <Box display="flex" alignItems="center" flexWrap="wrap">
            {Object.keys(user.data).map((key, ind) => {
              return (
                <Box p={1} key={ind}>
                  <Paper className={classes.paper} variant="outlined">
                    <Typography variant="caption">{`${key}: ${user.data[key]}`}</Typography>
                  </Paper>
                </Box>
              );
            })}
          </Box>
        ) : (
          <div />
        )}
      </Paper>
    </Container>
  );
}
