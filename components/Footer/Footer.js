/*eslint-disable*/
import React from "react";
import Link from "next/link";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Hidden,
  Grid,
} from '@material-ui/core';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import { container, primaryColor } from "styles/jss/nextjs-material-kit.js";


const useStyles = makeStyles((theme) => ({
  block: {
    padding: '6px',
    fontWeight: "500",
    fontSize: "17px",
    textTransform: "initial",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    fontFamily: "ITC Ronda",
    color: "black",
    "@media (min-width: 576px)": {
      color: "black",
      padding: "0.9375rem",
    },
    "@media (min-width: 768px)": {
      color: "white",
      padding: "0.9375rem",
    },
    "@media (min-width: 992px)": {
      color: "white",
      padding: "5px",
    },
    "@media (min-width: 1200px)": {
      color: "white",
      padding: "0.9375rem",
    },
  },
  newBlock: {
    padding: '6px',
    fontWeight: "500",
    fontSize: "17px",
    textTransform: "initial",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    fontFamily: "ITC Ronda",
    color: "black",
    "@media (min-width: 576px)": {
      padding: "0.9375rem",
    },
    "@media (min-width: 768px)": {
      padding: "0.9375rem",
    },
    "@media (min-width: 992px)": {
      padding: "5px",
    },
    "@media (min-width: 1200px)": {
      padding: "0.9375rem",
    },
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important",
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    // display: "flex",
    zIndex: "2",
    // position: "relative",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  footer_title: {
    fontFamily: "ITC Ronda",
    color: "white",
    fontSize: "15px",
  },
  footerLink: {
    width: '99%', 
    top: '65%',
    "@media (min-width: 576px)": {
      width: '60%', 
      top: '20%',
    },
    "@media (min-width: 768px)": {
      width: '80%', 
      top: '30%',
    },
    "@media (min-width: 992px)": {
      width: '70%', 
      top: '40%',
    },
    "@media (min-width: 1200px)": {
      width: '70%', 
      top: '47%',
    },
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  
  return (
    <footer className={footerClasses} style={{paddingBottom: '0px'}}>
      <div>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.column}> 
            <Box style={{width: '100%'}}>
              <Box position='relative' >
                <Box position='relative' style={{textAlign: 'center'}}>
                  <img
                    src="/img/footer_bg.png"
                    className={classes.image}
                    style={{width: '100%'}}
                    alt='item'
                  />
                </Box>       
                <Box position="absolute" className={classes.footerLink}>
                  <Grid container>
                    <Grid item sm={6} md={3}>
                      <a
                        href="#"
                        className={classes.block}
                        target="_blank"
                      >
                        Categories
                      </a>
                    </Grid>
                    <Grid item sm={6} md={3}>
                      <a
                        href="#"
                        className={classes.block}
                        target="_blank"
                      >
                        Blog
                      </a>
                    </Grid>
                    <Grid item sm={6} md={3}>
                      <a
                        href="#"
                        className={classes.block}
                        target="_blank"
                      >
                        About Us
                      </a>
                    </Grid>
                    <Grid item sm={6} md={3}>
                      <a
                        href="#"
                        className={classes.block}
                        target="_blank"
                      >
                        Contact Us
                      </a>
                    </Grid>
                  </Grid>
                </Box> 
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 1,
                m: 1,
              }}
            >
              <Box sx={{ p: 1 }}>
                <img
                  src="/img/social/facebook-social_link.png"
                  className={classes.image}
                  style={{width: '100%'}}
                  alt='item'
                />
              </Box>
              <Box sx={{ p: 1 }}>
                <img
                  src="/img/social/instgram-social_link.png"
                  className={classes.image}
                  style={{width: '100%'}}
                  alt='item'
                /></Box>
              <Box sx={{ p: 1 }}>
                <img
                  src="/img/social/twiter-social_link.png"
                  className={classes.image}
                  style={{width: '100%'}}
                  alt='item'
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.column}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'flex-end',
                p: 1,
                m: 1,
              }}
              style={{height: '100%'}}
            >
              
              <Box sx={{ p: 1 }}>
                <img 
                 src="/img/logo-top.png"
                 className={classes.image}
                 style={{width: '100%'}}
                 alt='item'
                />
              </Box>
              <Box sx={{ p: 1 }}>
                <a
                  href="#"
                  className={classes.newBlock}
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </Box>
              <Box sx={{ p: 1 }}>
                <a
                  href="#"
                  className={classes.newBlock}
                  target="_blank"
                >
                  Terms & Conditions
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>

      <div style={{backgroundColor: '#0c045d', height: '45px', width: '100%'}}>
        <div style={{alignItems: 'center', justifyContent: 'center', padding: '8px'}}>
          <p className={classes.footer_title}>Copyright - 2021 Yozoon All rights reserved.</p>
        </div>
      </div>

      
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
