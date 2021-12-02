/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/";
import Icon from "@material-ui/core/Icon";
import {
  ListSubheader,
  Box,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PerfectScrollbar from 'react-perfect-scrollbar';

// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import styles from "assets/jss/nextjs-material-dashboard/components/sidebarStyle.js";
import NavItem from './NavItem'


function renderNavItems({
  items,
  pathname,
  depth = 0
}) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth
}) {
  const key = item.title + depth;

  if (item.items) {
    // const open = matchPath(pathname, {
    //   path: item.href,
    //   exact: false
    // });
    const open= false;

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}


export default function Sidebar(props) {
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }
  const { color, logo, image, logoText, routes } = props;
  var links = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <List className={classes.list}>
          {routes.map((prop, key) => {
            var activePro = " ";
            var listItemClasses = listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.layout + prop.path),
            });
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]:
                activeRoute(prop.layout + prop.path) ||
                prop.path === "/upgrade-to-pro",
            });
            return (
              <List
                key={prop.subheader}
                subheader={(
                  <ListSubheader
                    disableGutters
                    disableSticky
                    className={classes.whiteFont}
                  >
                    {prop.subheader}
                  </ListSubheader>
                )}
              >
                {renderNavItems({
                  items: prop.items,
                  pathname: prop.pathname,
                })}
              </List>

                // <Link href={prop.layout + prop.path} key={key}>
                //   <a className={activePro + classes.item}>
                //     <ListItem button className={classes.itemLink + listItemClasses}>
                //       {typeof prop.icon === "string" ? (
                //         <Icon
                //           className={classNames(classes.itemIcon, whiteFontClasses, {
                //             [classes.itemIconRTL]: props.rtlActive,
                //           })}
                //         >
                //           {prop.icon}
                //         </Icon>
                //       ) : (
                //         <prop.icon
                //           className={classNames(classes.itemIcon, whiteFontClasses, {
                //             [classes.itemIconRTL]: props.rtlActive,
                //           })}
                //         />
                //       )}
                //       <ListItemText
                //         primary={props.rtlActive ? prop.rtlName : prop.name}
                //         className={classNames(classes.itemText, whiteFontClasses, {
                //           [classes.itemTextRTL]: props.rtlActive,
                //         })}
                //         disableTypography={true}
                //       />
                //     </ListItem>
                //   </a>
                // </Link>
            
            );
          })}
        </List>
      </PerfectScrollbar>
    </Box>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf([
    "white",
    "purple",
    "blue",
    "green",
    "orange",
    "red",
  ]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
