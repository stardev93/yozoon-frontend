/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { t, locale } = useTranslation();
 
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText={t('menu_all_categories')}
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          // buttonIcon={Apps}
          dropdownList={[
            <Link href="/">
              <a className={classes.dropdownLink}>Categories1</a>
            </Link>,
            <Link href="/">
              <a className={classes.dropdownLink}>Categories2</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/laptops"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Laptops
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/laptops"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Smarthphones
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/accessories"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Accessories
        </Button>
      </ListItem>
    </List>
  );
}
