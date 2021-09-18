import React, { useCallback, useState } from "react";

import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import FBAMobile from "../../assets/FBA.png";
import { ReactComponent as FBA } from "../../assets/Group 5592.svg";
import { ReactComponent as Portfolio } from "../../assets/Group 5593.svg";
import { ReactComponent as One } from "../../assets/one.svg";
import PortfolioMobile from "../../assets/Portfolio.png";
import ScaleMobile from "../../assets/Scale.png";
import { ReactComponent as Scale } from "../../assets/svg.svg";
import { ReactComponent as Three } from "../../assets/three.svg";
import { ReactComponent as Two } from "../../assets/two.svg";
import {
  FadeInSectionBottom,
  FadeInSectionLeft,
  FadeInSectionTop,
} from "../common/fadeIn";
import LetsChat from "../common/lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: 80,
      paddingBottom: 200,
      backgroundColor: "#ffffff",
      borderRadius: 0,
      [theme.breakpoints.down(800)]: {
        paddingTop: 20,
        paddingBottom: 60,
      },
    },
    line: {
      height: "3px",
      width: 130,
      backgroundColor: "#00ddb6",
      marginTop: 35,
      "@media (max-width: 1280px)": {
        width: 60,
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
      [theme.breakpoints.down(800)]: {
        marginLeft: 20,
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
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 30,
      },
    },
    grid: {
      paddingTop: 80,
      marginLeft: 20,
      marginRight: 20,
      paddingRight: 60,
      [theme.breakpoints.down(800)]: {
        display: "none",
      },
    },
    grid2: {
      paddingTop: 40,
      [theme.breakpoints.up(800)]: {
        display: "none",
      },
    },
    fba: {
      height: 200,
      width: 200,
    },
    heading: {
      color: "#000000",
      fontWeight: 600,
      paddingLeft: 24,
      [theme.breakpoints.down(800)]: {
        paddingLeft: 0,
        paddingTop: 24,
        fontSize: "18px",
        textAlign: "center",
      },
    },
    heading2: {
      color: "#000000",
      fontWeight: 600,
      paddingLeft: 24,
      [theme.breakpoints.down(800)]: {
        paddingLeft: 0,
        paddingTop: 24,
        fontSize: "18px",
      },
    },
    body: {
      color: "#000000",
      fontWeight: 400,
      paddingTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
      [theme.breakpoints.down(800)]: {
        fontSize: "12px",
        textAlign: "center",
        paddingTop: 24,
      },
    },
    container: {
      paddingLeft: 0,
    },
    image2: {
      marginTop: 32,
    },
  })
);

const BrandFit = () => {
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
        >
          <Box className={classes.line} />
          <Box className={classes.description}>
            <FadeInSectionLeft>
              <Typography variant="h2" className={classes.nextLevel}>
                Is your brand a fit?
              </Typography>
            </FadeInSectionLeft>
            <Typography variant="h2" className={classes.nextLevel2}>
              Is your brand a fit?
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
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={4}>
            <FadeInSectionLeft>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <FBA />
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  pt={10}
                  width="100%"
                  pl={5}
                >
                  <One />
                  <Typography variant="h5" className={classes.heading}>
                    Sold Through Amazon FBA
                  </Typography>
                </Box>
                <Typography variant="body1" className={classes.body}>
                  Our expertise lies in Amazon FBA ecosystem so we prioritise
                  brands that sell mainly through Amazon!
                </Typography>
              </Box>
            </FadeInSectionLeft>
          </Grid>
          <Grid item xs={4}>
            <FadeInSectionBottom>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Portfolio />
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  pt={10}
                  width="100%"
                  pl={5}
                >
                  <Two />
                  <Typography variant="h5" className={classes.heading2}>
                    A portfolio led by Winning products
                  </Typography>
                </Box>
                <Typography variant="body1" className={classes.body}>
                  "Awesome products" rank in the keyword search results, have
                  positive reviews that win against competitors
                </Typography>
              </Box>
            </FadeInSectionBottom>
          </Grid>
          <Grid item xs={4}>
            <FadeInSectionTop>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Scale />
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  pt={10}
                  width="100%"
                  pl={5}
                >
                  <Three />
                  <Typography variant="h5" className={classes.heading}>
                    The right scale for our model
                  </Typography>
                </Box>
                <Typography variant="body1" className={classes.body}>
                  We're open to good opportunities, but usually seek brands with
                  at least Rs. 1 cr in revenue in the last year
                </Typography>
              </Box>
            </FadeInSectionTop>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <img src={FBAMobile} className={classes.image2} alt="" />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                pt={4}
                width="100%"
              >
                <One />
                <Typography variant="h5" className={classes.heading}>
                  Sold Through Amazon FBA
                </Typography>
              </Box>
              <Typography variant="body1" className={classes.body}>
                Our expertise lies in Amazon FBA ecosystem so we prioritise
                brands that sell mainly through Amazon!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <img src={PortfolioMobile} className={classes.image2} alt="" />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                pt={4}
                width="100%"
              >
                <Two />
                <Typography variant="h5" className={classes.heading}>
                  A portfolio led by Winning products
                </Typography>
              </Box>
              <Typography variant="body1" className={classes.body}>
                "Awesome products" rank in the keyword search results, have
                positive reviews that win against competitors
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <img src={ScaleMobile} className={classes.image2} alt="" />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                pt={4}
              >
                <Three />
                <Typography variant="h5" className={classes.heading}>
                  The right scale for our model
                </Typography>
              </Box>
              <Typography variant="body1" className={classes.body}>
                We're open to good opportunities, but usually seek brands with
                at least Rs. 1 cr in revenue in the last year
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default BrandFit;
