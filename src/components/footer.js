import React from "react";
import Copyright from "./copyright";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      position: "absolute",
      bottom: "-70px",
      width: "100%",
      height: "2.5rem",
      backgroundColor: theme.palette.background.paper,
      paddingBottom: theme.spacing(4),
    },
  }));

  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Books are a uniquely portable magic.
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
