import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ErrorMessage from './ErrorMessage';

import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont,
} from "styles/jss/nextjs-material-kit.js";


const styles = {
  select: {
    '&:before': {
        borderColor: '#D2D2D2',
    },
    '&:after': {
        borderColor: '#D2D2D2',
    },
    '&:not(.Mui-disabled):hover::before': {
        borderColor: '#9A32B1',
    },
    width: '100%'
  },
  icon: {
      fill: 'black',
  },
  root: {
      color: 'black',
  },

  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    // top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px",
    },
  },
};


/*************************Begin for Provider dropdown style******************************************* */
const iconStyles = {
  selectIcon: {
    color: "#21517a"
  }
};
const CustomExpandMore = withStyles(iconStyles)(
  ({ className, classes, ...rest }) => {
    return (
      <ExpandMoreIcon {...rest} className={clsx(className, classes.selectIcon)} />
    );
  }
);
/**************************End for Provider dropdown style****************************************** */



export default function SubCategory({ category, subCategory, setSubCategory }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  React.useEffect(()=>{
    // if ( data && (!category) ) 
    //   setCategory(data.allCategories[0].id)
    console.log("----------------------subdata", data)
  }, [category])

  return (
    <FormControl className={classes.formControl} style={{width: '100%'}}>
      <InputLabel id="product-type-label" className={classes.labelRoot}>Category</InputLabel>
      {
        category &&
        <Select
          autoWidth={false}
          value={subCategory}
          onChange={(e)=>setSubCategory(e.target.value)}
          // disableUnderline
          IconComponent={CustomExpandMore} 
          className={classes.select}
          inputProps={{
              classes: {
                  icon: classes.icon,
                  root: classes.root,
              },
          }}
        >
          {/* {
            (data?.allCategories || []).map((category, index) => 
              <MenuItem value={category?.id}>{category?.name}</MenuItem>
            )
          } */}
        </Select>
      }
    </FormControl>
  );
}
