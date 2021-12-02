import {
  container,
  hexToRGBAlpha,
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  roseColor,
  transition,
  boxShadow,
  drawerWidth,
} from "styles/jss/nextjs-material-kit.js";

const headerStyle = (theme) => ({
  appBar: {
    display: "block",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    // backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
    paddingTop: '0px',
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
    [theme.breakpoints.down("sm")]: {
      maxWidth: "99%",
    },
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    flexWrap: "nowrap",
  },
  flex: {
    flex: 1,
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
  appResponsive: {
    margin: "20px 10px",
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      primaryColor,
      0.46
    )}`,
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      infoColor,
      0.46
    )}`,
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      successColor,
      0.46
    )}`,
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      warningColor,
      0.46
    )}`,
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      dangerColor,
      0.46
    )}`,
  },
  rose: {
    backgroundColor: roseColor,
    color: "#FFFFFF",
    boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
      roseColor,
      0.46
    )}`,
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    // paddingTop: "25px",
    color: "#FFFFFF",
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)",
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
  },
  searchBox: {
    width: '72%',
    marginTop: '3px'
  },
  mobileSearchBox: {
    width: '100%',
    marginTop: '3px'
  },
  noBorder: {
    border: "none",
  },
  inputSearch: {
    padding: '11.5px 14px'
  },
  gradientSignBox: {
    backgroundColor: '#0C045D', 
    height: '100%', 
    width: '100%', 
    zIndex:2, 
    textAlign: 'center'
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
  dropdownLink1: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      fontFamily: "ITC Ronda",
      fontSize: "13px",
    },
  },
  gradientSignBox: {
    backgroundColor: '#0C045D', 
    height: '100%', 
    width: '100%', 
    zIndex:2, 
    textAlign: 'center'
  },
  authButton: {
    color: 'white',
    fontFamily: 'ITC Ronda',
    textTransform: 'capitalize',
  },
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  imageDropdownButton: {
    [theme.breakpoints.down("md")]: {
      top: "0",
      margin: "5px 15px",
    },
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px",
  },
});

export default headerStyle;
