/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import useTranslation from '../../hooks/useTranslation';

const useStyles = makeStyles(styles);

export default function HeaderLinksMobile(props) {
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
      
    </List>
  );
}
