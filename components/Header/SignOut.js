import React, { useState } from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  List,
  ListItem,
} from "@material-ui/core";

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";

import { CURRENT_USER_QUERY } from '../User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
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
  );
}

