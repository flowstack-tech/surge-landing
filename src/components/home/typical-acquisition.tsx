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
import { Parallax } from "react-scroll-parallax";

import DisplayImage from "../../assets/Group 5553.svg";
import { FadeInSectionBottom } from "../common/fadeIn";
import LetsChat from "../common/lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: 200,
      borderRadius: 0,
      overflow: "hidden",
      [theme.breakpoints.down(800)]: {
        paddingBottom: 40,
      },
    },
    container: {
      paddingBottom: 40,
      position: "relative",
      [theme.breakpoints.down(800)]: {
        paddingLeft: 0,
        paddingBottom: 20,
      },
    },
    line: {
      height: "3px",
      width: 120,
      backgroundColor: "#00ddb6",
      marginTop: 35,
      "@media (max-width: 1280px)": {
        width: 130,
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
      marginLeft: 50,
      [theme.breakpoints.down(800)]: {
        marginLeft: 24,
      },
    },
    caption: {
      color: "rgba(14,23,42,1)",
      fontWeight: 400,
      paddingTop: 48,
      [theme.breakpoints.down(800)]: {
        paddingTop: 24,
        lineHeight: "24px",
        fontSize: "12px",
      },
    },
    caption2: {
      color: "rgba(14,23,42,1)",
      fontWeight: 400,
    },
    boxDescription: {
      maxWidth: "50%",
      marginTop: 45,
      zIndex: 100,
      paddingTop: "250px",
      marginLeft: "500px",
    },
    growWithUs: {
      color: "#ffffff",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "12px",
      },
    },
    growButton: {
      marginTop: 48,
      textTransform: "none",
      borderRadius: 0,
      border: "0px",
      backgroundColor: "#0e172a",
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
      },
    },
    grid: {
      paddingTop: 180,
      zIndex: 100,
      "@media (max-width: 1280px)": {
        paddingTop: 100,
      },
    },
    heading: {
      color: "#000000",
      fontWeight: 500,
      paddingBottom: 60,
    },
    heading2: {
      color: "#000000",
      fontWeight: 600,
      paddingLeft: 24,
    },
    body: {
      color: "#000000",
      fontWeight: 700,
      paddingTop: 60,
    },
    gridBox: {
      backgroundColor: "#ffffff",
      paddingTop: 28,
      paddingBottom: 32,
      "@media (max-width: 1280px)": {
        paddingLeft: 20,
        paddingRight: 20,
      },
    },
    image2: {
      position: "absolute",
      left: 0,
      top: 200,
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    gridItem: {
      zIndex: 100,
    },
    parallax: {
      paddingTop: 100,
      zIndex: 100,
      position: "relative",
      top: "10px",
      left: "-100px",
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    qer: {
      color: "#000000",
      fontWeight: 700,
      fontSize: "124px",
      "@media (max-width: 1650px)": {
        fontSize: "108px",
      },
      "@media (max-width: 1410px)": {
        fontSize: "96px",
      },
      "@media (max-width: 1260px)": {
        fontSize: "82px",
      },
      "@media (max-width: 1090px)": {
        fontSize: "76px",
      },
      "@media (max-width: 1024px)": {
        fontSize: "56px",
      },
      [theme.breakpoints.down(800)]: {
        lineHeight: "90px",
      },
    },
    box: {
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    box2: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
    cta: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      paddingLeft: 45,
      paddingTop: 60,
    },
  })
);

const TypicalAcquisition: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <Paper className={classes.root} elevation={0}>
      <LetsChat isOpen={open} handleClose={handleClose} />
      <Container className={classes.container} maxWidth="xl">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.box}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            pt={2}
            className={classes.boxDescription}
          >
            <Box className={classes.line} />
            <Box className={classes.description}>
              <Typography variant="h2" className={classes.nextLevel}>
                <FadeInSectionBottom>
                  A typical acquisition is completed within 35 days
                </FadeInSectionBottom>
              </Typography>
              <Typography variant="body1" className={classes.caption}>
                We'll make sure the process is smooth and agreeable to all
                involved. Get in touch to know more about the acquisition
                process!
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
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.box2}
        >
          <Box className={classes.line} />
          <Box className={classes.description}>
            <Typography variant="h2" className={classes.nextLevel}>
              A typical acquisition is completed within 35 days
            </Typography>
            <Typography variant="body1" className={classes.caption}>
              We'll make sure the process is smooth and agreeable to all
              involved. Get in touch to know more about the acquisition process!
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
        <div className={classes.cta}>
          <Typography variant="h1" className={classes.qer}>
            {"Quick. "}
          </Typography>
          <Typography variant="h1" className={classes.qer}>
            {"Efficient. "}
          </Typography>
          <Typography variant="h1" className={classes.qer}>
            Reliable.
          </Typography>
        </div>
        <div className={classes.parallax}>
          <Parallax x={[80, -20]} tagOuter="div">
            <Typography variant="h1" display="inline" className={classes.qer}>
              {"Quick. "}
            </Typography>
            <Typography variant="h1" display="inline" className={classes.qer}>
              {"Efficient. "}
            </Typography>
            <Typography variant="h1" display="inline" className={classes.qer}>
              Reliable.
            </Typography>
          </Parallax>
        </div>
        <img src={DisplayImage} className={classes.image2} alt="" />
      </Container>
    </Paper>
  );
};

export default TypicalAcquisition;
