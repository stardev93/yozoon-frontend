import React, { useState } from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import {
  Button,
  Collapse,
  ListItem,
  makeStyles
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";

import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb,
} from "assets/jss/nextjs-material-dashboard.js";

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    textAlign: 'left',
  },
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    textAlign: 'left',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(3)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.secondary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.secondary.main
    }
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: whiteColor,
  },
  whiteFont: {
    color: whiteColor,
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    // marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    //padding: "10px 15px",
    backgroundColor: "transparent",
    ...defaultFont,
  },
}));

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };
  if (children) {
    return (
      <ListItem
          className={classNames(classes.item, className, classes.itemLink)}
          disableGutters
          key={title}
          {...rest}
        >
          
          <Button
            className={classes.button}
            onClick={handleToggle}
            style={style}
          >
            {Icon && (
              <Icon
                className={classNames(classes.itemIcon, classes.whiteFont, classes.icon)}
                size="20"
              />
            )}
            <ListItemText
              primary={title}
              className={classNames(classes.itemText, classes.title)}
              disableTypography={true}
            />
            {open ? <ExpandLessIcon className={classNames(classes.itemIcon, classes.whiteFont, classes.icon)}/> : <ExpandMoreIcon className={classNames(classes.itemIcon, classes.whiteFont, classes.icon)}/>}
          </Button>
          <Collapse in={open}>
            {children}
          </Collapse>
        </ListItem>
    );
  }

  return (
    <Link href={href} key={title}>
      <ListItem
        className={classNames(classes.itemLeaf, className, classes.itemLink)}
        disableGutters
        {...rest}
      >
        <Button
          activeClassName={classes.active}
          className={classNames(classes.buttonLeaf, `depth-${depth}`)}
          // component={RouterLink}
          exact
          style={style}
          to={href}
        >
          {Icon && (
            <Icon
              className={classNames(classes.itemIcon, classes.whiteFont, classes.icon)}
              size="20"
            />
          )}
          <ListItemText
            primary={title}
            className={classes.itemText}
            disableTypography={true}
          />
          {Info && <Info />}
        </Button>
      </ListItem>
    </Link>
  );
};


NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem;
