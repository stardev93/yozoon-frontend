import React, { useEffect, useState } from 'react';
import Link from "next/link";
import classNames from "classnames";
import { useQuery } from '@apollo/client';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid,useTheme, Card, Hidden } from '@material-ui/core';

// core components
import headerLinksStyle from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { container } from "styles/jss/nextjs-material-kit.js";


import Category from './Category'

import { ALL_CATEGORIES_QUERY, BEST_PRODUCTS_QUERY } from 'lib/queries';

const useStyles = makeStyles((theme) => ({
  container,
  ...headerLinksStyle,
  best3TopProducts :{
    width: '82%',
    margin: 'auto',
    paddingTop: '50px'
  },
  column: {
    zIndex: 4,
  },
  card: {
    boxShadow: '0px 0px 10px 6px rgb(127 114 114 / 20%)',
    // padding: '20px'
  },
  priceTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "15px",
    display: "block",
    position: "relative",
    color: "#000000",
    textAlign: 'center',
    backgroundColor: '#ffffff78', 
    borderRadius: '10px'
  },
  gradientPrice: {
    transition: '0.5s',
    backgroundSize: '200% auto',
    boxShadow: '0 0 20px #eee',
    width: 'max-content',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    display: 'inline-block',
    width: '25px', 
    borderRadius: '30px',
    color: '#0c045d',
    backgroundImage: 'linear-gradient(to bottom, #A800FF 50%, #7400FF 80%, #7400FF 100%)'
  },
  productTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "17px",
    display: "block",
    position: "relative",
    color: "#000000",
    textAlign: 'center'
  },
  title_50: {
    paddingTop: '10px',
    fontFamily: "ITC Ronda",
    fontSize: "30px",
    display: "block",
    position: "relative",
    color: "#0c045d",
    textAlign: 'left',
    "@media (min-width: 576px)": {
      fontSize: "30px",
    },
    "@media (min-width: 768px)": {
      fontSize: "30px",
    },
    "@media (min-width: 992px)": {
      fontSize: "30px",
    },
    "@media (min-width: 1200px)": {
      fontSize: "50px",
    },
  },
}));


const ProductCard = ({ product }) => {
  const classes = useStyles();

  return (
    <Box>
      <Card className={classes.card}>
        <Box p={1} position='relative' >
          <Box position='relative' style={{textAlign: 'center'}}>
            <img
              src={product?.photo?.publicUrl}
              className={classes.image}
              style={{width: '100%'}}
              alt='item'
            />
          </Box>       
          <Hidden smDown>
            <Box position="absolute" style={{bottom: '10%', left: '10px'}}>
              <Box>
                <h5 className={classes.priceTitle}>$2000 </h5>
              </Box>
              <Box className={classes.gradientPrice} style={{ height: '115px', marginLeft: '15px'}}>
              </Box>
              <Box>
                <h5 className={classes.priceTitle}>$800 </h5>
              </Box>
            </Box>
          </Hidden>
        </Box>
      </Card>
      <Box style={{width: '75%', margin: 'auto'}}>
        <h1 className={classes.productTitle}>{product?.name}</h1>
      </Box>
    </Box>
  );
};



const BestProducts = () => {
  const classes = useStyles();
  const theme = useTheme();

  const { data: categoriesData } = useQuery(ALL_CATEGORIES_QUERY);

  const { data: productsData } = useQuery(BEST_PRODUCTS_QUERY, {
    variables: {
      skip: 0,
      first: 3,
    },
  });

  const [categories, setCategories] = useState();
  const [parent, setParent] = useState();
  const [sub, setSub] = useState();

  useEffect(() => {
    // other code
    setCategories(categoriesData?.allCategories)
    if(!parent && !sub) {
      setParent(categoriesData?.allCategories[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData])

  useEffect(() => {
    // other code
    console.log("--------------------BestProductsData", productsData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData])

  return (
    <Box className={classNames(classes.container, classes.best3TopProducts)} >
      <Category categories={categories} parent={parent} setParent={setParent} sub={sub} setSub={setSub} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
        }}
        style={{width: '99%', margin: 'auto'}}
      >
        <Box sx={{ p: 1 }}>
          <img
            src="/img/products/top-rating.png"
            className={classes.image}
            style={{width: '100%'}}
            alt='item'
          />
        </Box>
        <Box sx={{ p: 1}}>
          <p className={classes.title_50}>Best 3 Products</p>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {
          (productsData?.allProducts?.length > 0) && 
            (productsData?.allProducts || []).map((tmp, index) =>
              <Grid item xs={12} md={4} className={classes.column} key={index}>
                <ProductCard product={tmp} />
              </Grid>)
        }
      </Grid>
    </Box>
  );
};



export default BestProducts;
