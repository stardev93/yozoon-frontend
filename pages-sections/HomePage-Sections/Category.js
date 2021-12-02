import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Box, useTheme, useMediaQuery } from '@material-ui/core';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import headerLinksStyle from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";


const useStyles = makeStyles(headerLinksStyle);


const Category = ({categories, parent, setParent, sub, setSub}) => {
  const classes = useStyles();

  useEffect(() => {
    // other code
    // if(parent && !sub) {
    //   setSub(parent?.sub)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parent, sub])

  return (
    <Box>
      <Box>
        <p style={{
            fontFamily: "ITC Ronda",
            fontSize: "18px",
            display: "block",
            position: "relative",
            color: "#0c045d",
            textAlign: 'left',
          }}
        >
          Categories
        </p>
      </Box>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            buttonText={parent?.name}
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            // buttonIcon={Apps}
            dropdownList={
              (categories || []).map((tmp, index) => [
                <a key={index} className={classes.dropdownLink} onClick={()=>setParent(tmp)}>{tmp?.name}</a>
                ],
              )
            }
          />
        </ListItem>
        {
          (parent?.sub?.length > 0) && 
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              buttonText={parent?.sub[0]?.name}
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              // buttonIcon={Apps}
              dropdownList={
                (parent?.sub || []).map((tmp, index) => [
                  <a key={index} className={classes.dropdownLink} onClick={()=>setSub(tmp)}>{tmp?.name}</a>
                ],
                )
              }
            />
          </ListItem>
        }
      </List>
    </Box>
  );
};



export default Category;
