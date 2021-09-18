import React from "react";

import { createStyles, makeStyles, Paper } from "@material-ui/core";

import Footer from "../components/common/footer";
import BrandFit from "../components/home/brand-fit";
import BrandNextLevel from "../components/home/brand-next-level";
import GetInTouch from "../components/home/get-in-touch";
import GrowBusiness from "../components/home/grow-business";
import PlatformSellers from "../components/home/platform-sellers";
import TypicalAcquisition from "../components/home/typical-acquisition";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      borderRadius: 0,
      backgroundColor: "#ffffff",
    },
    top: {
      overflow: "hidden",
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.top}>
      <Paper className={classes.root}>
        <GrowBusiness />
      </Paper>
      <BrandNextLevel />
      <BrandFit />
      <PlatformSellers />
      <TypicalAcquisition />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
