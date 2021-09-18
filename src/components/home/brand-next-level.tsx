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

import RaiseCapital from "../../assets/001.jpg";
import GrowMyBusiness from "../../assets/002.jpg";
import SellMyBusiness from "../../assets/003.jpg";
import SellMyBusinessMobile from "../../assets/mobile.jpg";
import { FadeInSectionTop } from "../common/fadeIn";
import LetsChat from "../common/lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 216,
      paddingBottom: 200,
      backgroundColor: "#ffffff",
      borderRadius: 0,
      [theme.breakpoints.down(800)]: {
        paddingTop: 60,
        paddingBottom: 60,
      },
    },
    line: {
      height: "3px",
      width: 130,
      backgroundColor: "#00ddb6",
      marginTop: 35,
      zIndex: 100,
      "@media (max-width: 1280px)": {
        width: 90,
        marginTop: 15,
      },
    },
    nextLevel: {
      color: "#0e172a",
      fontWeight: 700,
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    nextLevel2: {
      color: "#0e172a",
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: "35px",
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
    description: {
      marginLeft: 70,
      zIndex: 100,
      "@media (max-width: 1280px)": {
        marginLeft: 20,
      },
    },
    weCanHelp: {
      marginTop: 40,
      color: "#00ddb6",
      fontWeight: 500,
      [theme.breakpoints.down(800)]: {
        marginTop: 32,
        fontSize: "14px",
      },
    },
    accelerate: {
      color: "#000000",
      fontWeight: 400,
      marginTop: 50,
      maxWidth: 500,
      [theme.breakpoints.down(800)]: {
        marginTop: 24,
        fontSize: "12px",
        lineHeight: "24px",
      },
    },
    accelerateBottom: {
      color: "#000000",
      fontWeight: 400,
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
      paddingTop: 8,
      paddingBottom: 8,
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
    image3: {
      position: "absolute",
      top: 0,
      right: 0,
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      "@media (max-width: 1800px)": {
        top: 100,
      },
      "@media (max-width: 1315px)": {
        height: 400,
        width: 400,
        top: 100,
      },
      "@media (max-width: 1050px)": {
        height: 350,
        width: 350,
        top: 100,
      },
      "@media (max-width: 880px)": {
        height: 300,
        width: 300,
        top: 200,
        right: 0,
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    image2: {
      position: "relative",
      top: -100,
      right: -250,
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      "@media (max-width: 1900px)": {
        top: 0,
        right: -350,
      },
      "@media (min-width: 1900px)": {
        top: 0,
        right: -500,
      },
      "@media (max-width: 1780px)": {
        top: 0,
        right: -200,
      },
      "@media (max-width: 1540px)": {
        top: 0,
        right: 0,
      },
      "@media (max-width: 1615px)": {
        top: 0,
        right: -30,
      },
      "@media (max-width: 1460px)": {
        top: 0,
        right: 80,
      },
      "@media (max-width: 1350px)": {
        top: 0,
        right: 120,
      },
      "@media (max-width: 1315px)": {
        height: 400,
        width: 400,
        top: 0,
        right: 100,
      },
      "@media (max-width: 1050px)": {
        height: 350,
        width: 350,
        top: 0,
        right: 100,
      },
      "@media (max-width: 880px)": {
        height: 300,
        width: 300,
        top: 20,
        right: 120,
      },
      "@media (max-width: 825px)": {
        height: 300,
        width: 300,
        top: -200,
        right: -400,
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    image1: {
      position: "relative",
      top: 0,
      left: 300,
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      "@media (max-width: 1800px)": {
        top: 50,
        left: 200,
      },
      "@media (min-width: 1900px)": {
        top: 50,
        left: 550,
      },
      "@media (max-width: 1900px)": {
        top: 70,
        left: 450,
      },
      "@media (max-width: 1780px)": {
        top: 50,
        left: 200,
      },
      "@media (max-width: 1615px)": {
        top: 50,
        left: 50,
      },
      "@media (max-width: 1465px)": {
        top: 50,
        left: -50,
      },
      "@media (max-width: 1315px)": {
        width: 600,
        top: 50,
        left: -50,
      },
      "@media (max-width: 1050px)": {
        width: 500,
        top: 50,
        left: -50,
      },
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    imageContainer: {
      backgroundColor: "#E5E5E5",
    },
    box: {
      zIndex: 100,
    },
    container: {
      position: "relative",
      paddingLeft: 0,
    },
    image3sm: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      width: 269,
      height: 284,
    },
    image2sm: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      width: 271,
      height: 270,
      marginTop: 32,
    },
    image1sm: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
      boxShadow: "0px 0px 115px rgba(13, 16, 37, 0.06)",
      width: 273,
      height: 97,
      marginTop: 32,
    },
    imageBox: {
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
  })
);

const BrandNextLevel: React.FC = () => {
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
      <Container maxWidth="xl" className={classes.container}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.box}
        >
          <Box className={classes.line} />
          <Box className={classes.description}>
            <FadeInSectionTop>
              <Typography variant="h2" className={classes.nextLevel}>
                Want to take your brand
              </Typography>
              <Typography variant="h2" className={classes.nextLevel}>
                to the next level?
              </Typography>
            </FadeInSectionTop>
            <Typography variant="h2" className={classes.nextLevel2}>
              Want to take your
            </Typography>
            <Typography variant="h2" className={classes.nextLevel2}>
              brand to the next level?
            </Typography>

            <Typography variant="h5" className={classes.weCanHelp}>
              We can help.
            </Typography>
            <Typography variant="body1" className={classes.accelerate}>
              With technology and the right tools, we'll accelerate your
              business like never before.
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
        <img
          src={RaiseCapital}
          className={classes.image3}
          alt="Raise Capital"
        />
        <img
          src={SellMyBusiness}
          className={classes.image1}
          alt="Sell My Business"
        />
        <img
          src={GrowMyBusiness}
          className={classes.image2}
          alt="Grow My Business"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt={8}
          className={classes.imageBox}
        >
          <img
            src={RaiseCapital}
            className={classes.image3sm}
            alt="Raise Capital"
          />
          <img
            src={GrowMyBusiness}
            className={classes.image2sm}
            alt="Grow My Business"
          />
          <img
            src={SellMyBusinessMobile}
            className={classes.image1sm}
            alt="Sell My Business"
          />
        </Box>
      </Container>
    </Paper>
  );
};

export default BrandNextLevel;
