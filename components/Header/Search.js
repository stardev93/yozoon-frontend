import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Paper,
  InputAdornment,
} from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.searchBox}>
      <TextField
        fullWidth
        type="search"
        variant="outlined"
        placeholder="Search"
        disableunderline="false"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" style={{cursor: 'pointer'}}>
                <img src="/img/buttons/searchbox_btn.png" />
            </InputAdornment>
          ),
          classes:{
            notchedOutline:classes.noBorder,
            input: classes.inputSearch
          }
        }}
      />
    </Paper>
  );
}

