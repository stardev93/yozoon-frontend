import {
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  infoBoxShadow,
  successColor,
  successBoxShadow,
  warningColor,
  warningBoxShadow,
  dangerColor,
  dangerBoxShadow,
  roseColor,
  roseBoxShadow,
} from "styles/jss/nextjs-material-kit.js";

const dropdownStyle = (theme) => ({
  popperClose: {
    pointerEvents: "none",
  },
  pooperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "none !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "1.5rem",
        marginRight: "1.5rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "5px !important",
        padding: "0px !important",
      },
    },
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
  },
  menuList: {
    padding: "0",
  },
  popperResponsive: {
    zIndex: "1200",
    position: "absolute !important",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static !important",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black",
    },
  },
  dropdownItem: {
    ...defaultFont,
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "fit-content",
    color: "#333",
    whiteSpace: "nowrap",
    minHeight: "unset",
  },
  blackHover: {
    "&:hover": {
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
      backgroundColor: "#212121",
      color: "#fff",
    },
  },
  primaryHover: {
    "&:hover": {
      backgroundColor: primaryColor,
      color: "#FFFFFF",
      ...primaryBoxShadow,
    },
  },
  infoHover: {
    "&:hover": {
      backgroundColor: infoColor,
      color: "#FFFFFF",
      ...infoBoxShadow,
    },
  },
  successHover: {
    "&:hover": {
      backgroundColor: successColor,
      color: "#FFFFFF",
      ...successBoxShadow,
    },
  },
  warningHover: {
    "&:hover": {
      backgroundColor: warningColor,
      color: "#FFFFFF",
      ...warningBoxShadow,
    },
  },
  dangerHover: {
    "&:hover": {
      backgroundColor: dangerColor,
      color: "#FFFFFF",
      ...dangerBoxShadow,
    },
  },
  roseHover: {
    "&:hover": {
      backgroundColor: roseColor,
      color: "#FFFFFF",
      ...roseBoxShadow,
    },
  },
  dropdownItemRTL: {
    textAlign: "right",
  },
  dropdownDividerItem: {
    margin: "5px 0",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    height: "1px",
    overflow: "hidden",
  },
  buttonIcon: {
    width: "30px",
    height: "30px",
  },
  caret: {
    transition: "all 150ms ease-in",
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "6px",
    verticalAlign: "middle",
    borderTop: "6px solid",
    borderRight: "6px solid transparent",
    borderLeft: "6px solid transparent",
    color: '#EA12FF'
  },
  caretActive: {
    transform: "rotate(180deg)",
  },
  caretRTL: {
    marginRight: "6px",
  },
  dropdownHeader: {
    display: "block",
    padding: "0.1875rem 1.25rem",
    fontSize: "0.75rem",
    lineHeight: "1.428571",
    color: "#777",
    whiteSpace: "nowrap",
    fontWeight: "inherit",
    marginTop: "10px",
    minHeight: "unset",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      cursor: "auto",
    },
  },
  noLiPadding: {
    padding: "0",
  },
  dropdownkkk: {
    fontFamily: "ITC Ronda",
    fontSize: "17px",
    display: "block",
    position: "relative",
    color: "#0c045d",
    textAlign: 'left'
  },
});

export default dropdownStyle;
