import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Hidden,
  Grid,
} from '@material-ui/core';

// core components
import {
  container,
  defaultFont,
} from "styles/jss/nextjs-material-kit.js";


const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
  },
  absolute: {
    position: "absolute",
    zIndex: "1100",
  },
  fixed: {
    position: "fixed",
    zIndex: "1100",
  },
  container: {
    ...container,
    maxWidth: "70%",
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    flexWrap: "nowrap",
  },
  flex: {
    flex: 0,
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent",
    },
  },
  
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    // paddingTop: "25px",
    color: "#FFFFFF",
  },
  
}));




export default function HeaderMenu(props) {
  const classes = useStyles();
  
  const { color, rightLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = (
    <Link href="/" as="/">
      <Button className={classes.title}>{brand}</Button>
    </Link>
  );
  return (

    <Box className={appBarClasses}>
      <Box className={classes.container}>
        <Hidden smDown>
          <Grid container>
            <Grid item md={3}> 
              {brandComponent}
            </Grid>
            <Grid item md={6}>
              <Box style={{marginTop: '30px', marginLeft: '-0.9375rem'}}>
                {rightLinks}
              </Box>
            </Grid>
            <Grid item md={3}>
            </Grid>
          </Grid>
        </Hidden>
      </Box>
    </Box>

  );
}


