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

import Header from "../common/header";
import LetsChat from "../common/lets-chat";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#0e172a",
      borderRadius: 0,
      height: "100%",
    },
    growBusinessContainer: {
      textAlign: "center",
      display: "flex",
      flexGrow: 1,
      height: "100%",
    },
    growBusiness: {
      color: "#ffffff",
      fontWeight: 700,
      [theme.breakpoints.down(800)]: {
        fontSize: "40px",
        textAlign: "left",
        lineHeight: "60px",
      },
    },
    navButtons: {
      color: "#ffffff",
      fontWeight: 500,
      width: "100%",
      [theme.breakpoints.down(800)]: {
        fontSize: "16px",
        textAlign: "left",
        lineHeight: "30px",
      },
    },
    growWithUs: {
      color: "#ffffff",
      fontWeight: 600,
      [theme.breakpoints.down(800)]: {
        fontSize: "14px",
      },
    },
    growButton: {
      marginTop: 51,
      textTransform: "none",
      borderRadius: 0,
      border: "0px",
      backgroundColor: "#00ddb6",
      color: "#ffffff",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 36,
      paddingRight: 36,
      maxWidth: 264,
      [theme.breakpoints.down(800)]: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 31,
        paddingRight: 31,
        float: "left",
      },
    },
    box: {
      height: "100%",
    },
    parentBox: {
      backgroundColor: "#0e172a",
    },
    buttonBox: {
      [theme.breakpoints.down(800)]: {
        textAlign: "center",
        width: "100%",
      },
    },
  })
);

const GrowBusiness: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Paper className={classes.root}>
      <LetsChat isOpen={open} handleClose={handleClose} />
      <Box
        flexGrow={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        className={classes.box}
      >
        <Header />
        <Box display="flex" flexGrow={1} className={classes.parentBox}>
          <Container maxWidth="lg" className={classes.growBusinessContainer}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
              flexGrow={1}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
              >
                <Typography variant="h1" className={classes.growBusiness}>
                  Grow your e-commerce business. It starts now.
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                flexGrow={1}
                width="100%"
              >
                <Typography variant="h4" className={classes.navButtons}>
                  Sell us your business, continue to enjoy the profits.
                </Typography>
                <div className={classes.buttonBox}>
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
                </div>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Paper>
  );
};

export default GrowBusiness;
