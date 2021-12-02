import React, { useState, useRef } from "react";
import Link from "next/link";
import Router from "next/router";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button,
  ButtonBase,
  Hidden,
  Box,
  Grid,
  TextField,
  Paper,
  InputAdornment,
  Menu,
  MenuItem,
  Select,
  ListItem,
  List
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import { container } from "styles/jss/nextjs-material-kit.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import LanguageDropdown from "components/CustomDropdown/LanguageDropdown.js";
import HeaderLinksMobile from "components/Header/HeaderLinksMobile.js";


const useStyles = makeStyles((theme) => ({
  container: {
    ...container,
    // maxWidth: "70%",
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    flexWrap: "nowrap",
  },
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    height: '64px',
    backgroundColor: "#0C045D",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "wrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
    // paddingLeft: 50, 
    // paddingRight: 50
  },
  absolute: {
    position: "absolute",
    zIndex: "1100",
  },
  fixed: {
    position: "fixed",
    zIndex: "1100",
  },
  noBorder: {
    border: "none",
  },
  searchBox: {
    width: '72%',
    marginTop: '3px'
  },
  mobileSearchBox: {
    width: '100%',
    marginTop: '3px'
  },
  inputSearch: {
    padding: '11.5px 14px'
  },
  searchButton: {
    fontSize: '40px',
    boxShadow: '0 0 20px #eee',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    background: 'linear-gradient(to right, #A800FF 0%, #7400FF 40%, #7400FF 100%)',
    cursor: 'pointer',
  },
  signBox: {
    borderWidth: '2px',
    borderColor: '#6A00FF',
    padding: '10px 30px',
    color: '#6A00FF',
    width: '160px',
    height: '50px',
    fontSize: '17px',
    fontFamily: "ITC Ronda",
  },
  buttonBox: {
    background: 'none',
    textDecoration: 'inherit',
    padding: '1rem 2rem'
  },

  borderGradient: {
    border: '10px solid',
    borderImageSlice: 1,
    borderWidth: '3px',
    borderRadius: 20
  },
  borderGradientPurple: {
    borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)',
  },
  authButton: {
    color: 'white',
    fontFamily: 'ITC Ronda',
    textTransform: 'capitalize',
  },
  menuItem: {
    fontSize: 15, /*16 */
    color:'#333' /*'black' */
  },
  popover: {
    width: 200,
    marginLeft:'-88px',
  },
  menu_hover: {
    height:80,
    padding:'0px 5px',
    '&:hover': {
      backgroundColor: "unset",
      color: "#21517a"
    }
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    //   "&:after": {
    //     width: "calc(100% - 30px)",
    //     content: '""',
    //     display: "block",
    //     height: "1px",
    //     marginLeft: "15px",
    //     backgroundColor: "#e5e5e5",
    //   },
    // },
  },
  navLink: {
    color: "black",
    position: "relative",
    padding: "0.9375rem",
    fontFamily: "ITC Ronda",
    fontWeight: "400",
    fontSize: "18px",
    textTransform: "capitalize",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#0c045d",
      background: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
      fontFamily: "ITC Ronda",
      fontSize: "18px",
    },
  },
  gradientSignBox: {
    backgroundColor: '#0C045D', 
    height: '100%', 
    width: '100%', 
    zIndex:2, 
    textAlign: 'center'
  }


}));


export default function Header(props) {
  const classes = useStyles();

  const appBarClasses = classNames(
    classes.appBar,
    classes.absolute,
    classes.fixed
  );

  return (
    <>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <Grid container spacing={2}>
              <Grid item md={3}>
              </Grid>
              <Grid item md={6}>
                <Paper elevation={1} className={classes.searchBox}>
                  <TextField
                    fullWidth
                    type="search"
                    variant="outlined"
                    placeholder="Search"
                    disableunderline="false"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" style={{cursor: 'pointer'}}>
                            <img src="/img/buttons/searchbox_btn.png" />
                        </InputAdornment>
                      ),
                      classes:{
                        notchedOutline:classes.noBorder,
                        input: classes.inputSearch
                      }
                    }}
                  />
                </Paper>
              </Grid>

              <Grid item md={3}>
                <Box 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Box className="gradient-box">
                    <Box className={classes.gradientSignBox}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Box>
                          <img src="/img/buttons/user_btn.png" />
                        </Box>
                        <Box>
                          <ButtonGroup style={{color: '#FFFFFF'}} variant="text" aria-label="text button group">
                            <Button className={classes.authButton} onClick={()=>Router.push("/login")}>Login</Button>
                            <Button className={classes.authButton}>Sign Up</Button>
                          </ButtonGroup>
                        </Box>
                      </Box>    
                    </Box>
                  </Box>
                  <Box>
                    <ListItem className={classes.listItem}>
                      <LanguageDropdown
                        noLiPadding
                        navDropdown
                        buttonText="EN"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent",
                        }}
                        buttonIcon={KeyboardArrowDownIcon}
                        dropdownList={[
                          <Button className={classes.dropdownLink}>
                            EN
                          </Button>,
                          <Button className={classes.dropdownLink}>
                            DE
                          </Button>,
                        ]}
                      />
                    </ListItem> 
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Box style={{width: '100%'}}>
              <Box sx={{ display: 'flex' }}>
                <Box sx={{flexGrow: 1}}>
                  <Box className="gradient-box" flexGrow={1}>
                    <Box className={classes.gradientSignBox}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Box>
                          <img src="/img/buttons/user_btn.png" />
                        </Box>
                        <Box>
                          <ButtonGroup style={{color: '#FFFFFF'}} variant="text" aria-label="text button group">
                            <Button className={classes.authButton} onClick={()=>Router.push("/login")}>Login</Button>
                            <Button className={classes.authButton}>Sign Up</Button>
                          </ButtonGroup>
                        </Box>
                      </Box>    
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <ListItem className={classes.listItem} style={{marginTop: '-10px'}}>
                      <LanguageDropdown
                        noLiPadding
                        navDropdown
                        buttonText="EN"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent",
                        }}
                        buttonIcon={KeyboardArrowDownIcon}
                        dropdownList={[
                          <Button className={classes.dropdownLink} style={{width: '30px'}}>
                            EN
                          </Button>,
                          <Button className={classes.dropdownLink} style={{width: '30px'}}>
                            DE
                          </Button>,
                        ]}
                      />
                    </ListItem> 
                  </Box>
                </Box> 
              </Box>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <Box 
          style={{
            marginTop: 60
          }}
        >
          <Box 
            sx={{
              m: 1,
              p: 1
            }}
          >
            <img src="/img/logo-top.png" style={{ height: 80 }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            style={{
              marginTop: '-100px'
            }}
          >
            <Box 
              sx={{ 
                p: 1 
              }}>
              <HeaderLinksMobile />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box 
              sx={{ 
                p: 1 
              }}>
              <Paper elevation={1} className={classes.mobileSearchBox}>
                <TextField
                  fullWidth
                  type="search"
                  variant="outlined"
                  placeholder="Search"
                  disableunderline="false"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" style={{cursor: 'pointer'}}>
                          <img src="/img/buttons/searchbox_btn.png" />
                      </InputAdornment>
                    ),
                    classes:{
                      notchedOutline:classes.noBorder,
                      input: classes.inputSearch
                    }
                  }}
                />
              </Paper>
            </Box>
            
          </Box>
        </Box>
      </Hidden>
    </>
  );
}


