import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import useTranslation from '../../hooks/useTranslation';
import { useQuery } from '@apollo/client';
import { ALL_CATEGORIES_QUERY } from 'lib/queries';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { data: categoriesData } = useQuery(ALL_CATEGORIES_QUERY);
  return (
    <List className={classes.list}>
     {
        (categoriesData?.allCategories || []).map((parent, index) => 

        <ListItem className={classes.listItem} key={index}>
          {
            (parent?.sub?.length > 0) 
            ? <CustomDropdown
                noLiPadding
                navDropdown
                buttonText={parent?.name}
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent",
                }}
                dropdownList={
                  (parent?.sub || []).map((sub, subIndex) => [
                    <a key={subIndex} className={classes.dropdownLink}>{sub?.name}</a>
                    ],
                  )
                }
              />
            :
              <Button
                href="/laptops"
                color="transparent"
                className={classes.navLink}
              >
                {parent?.name}
              </Button>
          }
        </ListItem>
        )
     }
    </List>
  );
}
