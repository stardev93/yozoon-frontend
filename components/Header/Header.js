import React from "react";
import Link from "next/link";
import Router from "next/router";
import classNames from "classnames";
import PropTypes from "prop-types";

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  ButtonGroup,
  Button,
  Hidden,
  Box,
  Grid,
  TextField,
  Paper,
  InputAdornment,
  List,
  ListItem,
} from "@material-ui/core";

// @material-ui/icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// core components
import LanguageDropdown from "components/CustomDropdown/LanguageDropdown.js";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import HeaderLinksMobile from "./HeaderLinksMobile.js";
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";

import { useUser, CURRENT_USER_QUERY } from '../User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;


const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const user = useUser();
  
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const [display, setDisplay] = React.useState("block"); //none
  const [backColor, setBackColor] = React.useState("#0C045D !important"); //none

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      setDisplay("none")
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      setDisplay("block")
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
    setBackColor("#0C045D !important")
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
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

  const mobileBrandComponent = (
    <Link href="/" as="/">
      <Button className={classes.title}><img src="/img/logo-top.png" style={{height: '80px', width: '100%'}} alt=""/></Button>
    </Link>
  );
  
  //#0C045D
  return (
    <AppBar className={appBarClasses}>
      <Box p={1} style={{ backgroundColor: backColor, display: display }} >
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
                  {!user && (
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
                  )}
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
                  {user && (
                    <Box>
                      <List style={{paddingTop: '0px', marginTop: '-5px'}}>
                        <ListItem className={classes.listItem}>
                          <CustomDropdown
                            left
                            caret={false}
                            hoverColor="black"
                            buttonText={
                              <img
                                src="/img/faces/avatar.jpg"
                                className={classes.img}
                                alt="profile"
                              />
                            }
                            buttonProps={{
                              className:
                                classes.navLink + " " + classes.imageDropdownButton,
                              color: "transparent",
                              padding: '0px'
                            }}
                            dropdownList={[
                              <Button size="small" className={classes.dropdownLink1} style={{textTransform: 'capitalize', padding: '0px', textAlign: 'left'}} onClick={()=>Router.push("/admin/dashboard")} >
                              Dashboard
                              </Button>,
                              <Button size="small" className={classes.dropdownLink1} style={{textTransform: 'capitalize', padding: '0px', textAlign: 'left'}} onClick={signout} >
                              Sign out
                              </Button>,
                            ]}
                          />
                        </ListItem>
                      </List>
                    </Box>
                  )}
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
                            <Button className={classes.authButton} >Sign Up</Button>
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
      </Box>
      <Box>
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <Grid container>
              <Grid item md={3}> 
                {brandComponent}
              </Grid>
              <Grid item md={9}>
                <Box style={{marginTop: '30px', marginLeft: '-0.9375rem'}}>
                  {rightLinks}
                </Box>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container>
              <Grid item xs={4}> 
                {mobileBrandComponent}
              </Grid>
              <Grid item xs={8}>
                <Box style={{marginTop: '10px', marginLeft: '-0.9375rem'}}>
                  <HeaderLinksMobile />
                </Box>
              </Grid>
            </Grid>
          </Hidden>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
