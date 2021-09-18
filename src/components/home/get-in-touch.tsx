import React, { useCallback, useState } from "react";

import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { FadeInSectionTop } from "../common/fadeIn";
import LetsChat from "../common/lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 100,
      paddingBottom: 100,
      backgroundColor: "rgba(0, 221, 182, 0.05)",
      borderRadius: 0,
      [theme.breakpoints.down(800)]: {
        paddingTop: 60,
        paddingBottom: 60,
      },
    },
    line: {
      height: "3px",
      width: 200,
      backgroundColor: "#00ddb6",
      marginTop: 35,
      "@media (max-width: 1280px)": {
        width: "90px",
        marginTop: 15,
      },
    },
    nextLevel: {
      color: "#0e172a",
      fontWeight: 700,
      [theme.breakpoints.down(800)]: {
        fontSize: "25px",
        lineHeight: "35px",
      },
    },
    description: {
      [theme.breakpoints.down(800)]: {
        marginLeft: 24,
      },
    },
    growWithUs: {
      color: "#ffffff",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "12px",
      },
    },
    growButton: {
      marginLeft: 14,
      textTransform: "none",
      borderRadius: 0,
      border: "0px",
      backgroundColor: "#00ddb6",
      color: "#ffffff",
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 45,
      paddingRight: 45,
      maxWidth: 264,
      [theme.breakpoints.down(800)]: {
        marginTop: 24,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
        marginLeft: 0,
      },
    },
    caption: {
      color: "rgba(14,23,42,1)",
      fontWeight: 400,
      paddingTop: 48,
      fontSize: "18px",
      lineHeight: "40px",
      maxWidth: "550px",
      textAlign: "center",
      [theme.breakpoints.down(800)]: {
        paddingTop: 16,
        lineHeight: "24px",
        fontSize: "12px",
        textAlign: "left",
      },
    },
    caption2: {
      color: "rgba(14,23,42,1)",
      fontWeight: 400,
      paddingLeft: 4,
    },
    input: {
      width: "100%",
      marginTop: 48,
    },
    box: {
      height: "408px",
      width: "408px",
      backgroundColor: "#00ddb6",
      position: "relative",
    },
    container: {
      paddingRight: 0,
      paddingLeft: 0,
    },
    field: {
      maxWidth: 250,
    },
    box1: {
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    box2: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
    tm: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      paddingTop: 30,
      textAlign: "center",
    },
  })
);

const GetInTouch = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <Paper className={classes.root}>
      <LetsChat isOpen={open} handleClose={handleClose} emailID={email} />
      <Container maxWidth="xl" className={classes.container}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.box1}
        >
          <FadeInSectionTop>
            <Typography variant="h2" className={classes.nextLevel}>
              Get in touch with us
            </Typography>
          </FadeInSectionTop>
          <Typography variant="body1" className={classes.caption}>
            We'd love to tell you more about how we can help your business. Sign
            up to learn more!
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            className={classes.input}
          >
            <TextField
              id="outlined-basic"
              label="Email ID here.."
              variant="outlined"
              fullWidth
              className={classes.field}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              disableElevation
              className={classes.growButton}
              endIcon={<ArrowForwardIcon />}
              onClick={handleClickOpen}
            >
              <Typography variant="h6" className={classes.growWithUs}>
                Grow with us
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          className={classes.box2}
        >
          <Box className={classes.line} />
          <Box className={classes.description}>
            <Typography variant="h2" className={classes.nextLevel}>
              Get in touch with us
            </Typography>
            <Typography variant="body1" className={classes.caption}>
              We'd love to tell you more about how we can help your business.
              Sign up to learn more!
            </Typography>
            <Button
              variant="contained"
              disableElevation
              className={classes.growButton}
              endIcon={<ArrowForwardIcon />}
              onClick={handleClickOpen}
            >
              <Typography variant="h6" className={classes.growWithUs}>
                Grow with us
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default GetInTouch;
