import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import classNames from "classnames";
import PropTypes from "prop-types";
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
  List,
  ListItem,
} from "@material-ui/core";
// @material-ui/icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// core components
import LanguageDropdown from "components/CustomDropdown/LanguageDropdown.js";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import HeaderLinksMobile from "./HeaderLinksMobile.js";
import Sign from './Sign';
import Search from './Search';
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useUser, CURRENT_USER_QUERY } from '../User';

import useTranslation from 'hooks/useTranslation';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;


const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const user = useUser();
  const { t, setLocale } = useTranslation();
  
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const { color, rightLinks, leftLinks, fixed, absolute, changeColorOnScroll } = props;
  const [display, setDisplay] = useState("block"); //none
  const [backColor, setBackColor] = useState("#0C045D !important"); //none
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  }, []);

  useEffect(() => {
    // other code
    console.log("---------------------------------backColor", backColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backColor])

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    // console.log("---------------------classes[color]", classes[color])
    // console.log("---------------------classes[color]", classes[color])
    if (windowsScrollTop > changeColorOnScroll.height) {
      setDisplay("none");
      setScroll(true);
      setShowSearch(false);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      setDisplay("block");
      setScroll(false);
      setShowSearch(false);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
    setBackColor("#0C045D !important")
  };
  
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  
  const brandComponent = (
    <Link href="/" as="/">
      <Button className={classes.title}>
        <img src="/img/logo-top.png" style={{height: scroll? 70 : 130}} /> 
        <span style={{
          width: 50,
        }}>
        </span>
      </Button>
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
      <Box key="top" p={1} style={{ backgroundColor: '#0C045D !important', display: display }} >
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <Grid container spacing={2}>
              <Grid item md={3}>
              </Grid>
              <Grid item md={6}>
                <Search />
              </Grid>

              <Grid item md={3}>
                <Box 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                >
                  {(!user && !scroll) && (
                    <Sign />
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
                          <Button className={classes.dropdownLink} onClick={()=>setLocale('en')}>
                            EN
                          </Button>,
                          <Button className={classes.dropdownLink}  onClick={()=>setLocale('de')}>
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
                                {t('dashboard')}
                              </Button>,
                              <Button size="small" className={classes.dropdownLink1} style={{textTransform: 'capitalize', padding: '0px', textAlign: 'left'}} onClick={signout} >
                                {t('logout')}
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
                            <Button className={classes.authButton} onClick={()=>Router.push("/login")}>{t('login')}</Button>
                            <Button className={classes.authButton} >{t('signUp')}</Button>
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
                          <Button className={classes.dropdownLink} style={{width: '30px'}}  onClick={()=>setLocale('en')}>
                            EN
                          </Button>,
                          <Button className={classes.dropdownLink} style={{width: '30px'}}  onClick={()=>setLocale('de')}>
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
      <Box key="other">
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <Box display="flex" style={{width: '100%'}}>
              <Box flexGrow={1}>
                <Box>
                  <Box display="flex" flexDirection="row">
                    <Box>
                      {brandComponent}
                    </Box>
                    {
                      !showSearch &&
                      <Box >
                        <Box style={{marginTop: scroll ? '15px' : '30px', marginLeft: '-0.9375rem'}}>
                          {rightLinks}
                        </Box>
                      </Box>
                    }
                  </Box>
                </Box>
              </Box>
              {
                (scroll && showSearch) &&
                  <Box style={{width: '500px', paddingTop: '13px'}}>
                    <Search />
                  </Box>
              }
              {(!user && scroll) && (
                <Box pt={2}>
                  <Sign />
                </Box>
              )}
              
              {
                scroll &&
                <Box pt={2}>
                  <Button onClick={()=>setShowSearch(!showSearch)} style={{textTransform: 'none'}}><img src="/img/buttons/searchbox_btn.png" />{t('find')}</Button>
                </Box>
              }
              
            </Box>

            
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
