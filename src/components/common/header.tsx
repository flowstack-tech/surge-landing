import React, { useCallback, useState } from "react";

import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import LetsChat from "./lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 68,
      [theme.breakpoints.down(800)]: {
        paddingTop: 30,
        paddingBottom: 30,
      },
      paddingBottom: 68,
      backgroundColor: "#0e172a",
      borderRadius: 0,
    },
    surgeIcon: {
      fontSize: "48px",
      color: "#ffffff",
      fontWeight: 600,
      paddingLeft: 8,
      [theme.breakpoints.down(800)]: {
        fontSize: "32px",
      },
    },
    navButtons: {
      color: "#ffffff",
      fontWeight: 600,
      fontSize: "20px",
      [theme.breakpoints.down(800)]: {
        fontSize: "12px",
        lineHeight: "21px",
      },
    },
    growButton: {
      "&:hover": {
        backgroundColor: "#00ddb6",
      },
      borderRadius: 0,
      border: "1px solid #00ddb6",
      color: "#ffffff",
      textTransform: "none",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 45,
      paddingRight: 45,
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    dot: {
      fontSize: "48px",
      color: "#00ddb6",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "32px",
      },
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Paper elevation={0} className={classes.root}>
      <LetsChat isOpen={open} handleClose={handleClose} />
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            flexGrow={1}
          >
            <Typography variant="h4" className={classes.surgeIcon}>
              tagz
            </Typography>
            <Typography variant="h4" className={classes.dot}>
              .
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
            flexGrow={1}
          >
            <Button
              variant="outlined"
              disableElevation
              className={classes.growButton}
              endIcon={<ArrowForwardIcon />}
              onClick={handleClickOpen}
            >
              <Typography variant="body1" className={classes.navButtons}>
                Grow with us
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Header;
