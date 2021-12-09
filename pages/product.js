import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  Box,
  Paper,
  Card,
  List,
  ListItem,
  TextField,
  InputAdornment,
  Hidden
} from '@material-ui/core';
// @material-ui/icons
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// core components
import HomeContainer from "components/HomeContainer";
import Header from "components/Header/Header.js";
import HeaderMenu from "components/Header/HeaderMenu.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page

import BestProducts from 'pages-sections/HomePage-Sections/BestProducts';
import NewAddedProducts from 'pages-sections/HomePage-Sections/NewAddedProducts';
import TradingRatedProducts from 'pages-sections/HomePage-Sections/TradingRatedProducts';
import BestSalesProducts from 'pages-sections/HomePage-Sections/BestSalesProducts';
import TopSection from 'pages-sections/Product-Sections/TopSection';

import useTranslation from '../hooks/useTranslation';
import { container } from "styles/jss/nextjs-material-kit.js";

import { useQuery } from '@apollo/client';
import { SINGLE_PRODUCT_QUERY } from 'lib/queries';


const useStyles = makeStyles((theme) => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontFamily: "ITC Ronda",
    display: "block",
    position: "relative",
    color: "#0c045d",
    fontSize: "1.6rem",
    "@media (min-width: 576px)": {
      fontSize: "1.6rem",
    },
    "@media (min-width: 768px)": {
      fontSize: "2rem",
    },
    "@media (min-width: 992px)": {
      fontSize: "2.4rem",
    },
    "@media (min-width: 1200px)": {
      fontSize: "2.81rem",
    },
  },
  responsivePadding: {
    padding: '5x',
    "@media (min-width: 576px)": {
      padding: '10px'
    },
    "@media (min-width: 768px)": {
      padding: '20px'
    },
    "@media (min-width: 992px)": {
      padding: '30px'
    },
    "@media (min-width: 1200px)": {
      padding: '80px'
    },
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    maxWidth: '1400px'
  },
  mainRaised: {
    margin: "0px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  mainRaised1: {
    margin: "auto",
    borderRadius: "6px",
    
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },

  gradientButton: {
    fontFamily: "ITC Ronda",
    marginTop: '40px',
    fontSize: '17px',
    padding: '13px 35px',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: '0.5s',
    backgroundSize: '200% auto',
    color: '#FFF',
    boxShadow: '0 0 20px #eee',
    borderRadius: '10px',
    width: 'max-content',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',
    display: 'inline-block',
    borderRadius: '10px',
  },

  gradientButton1: {
    backgroundImage: 'linear-gradient(to right, #A800FF 0%, #7400FF 40%, #7400FF 100%)'
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
    color: '#0c045d'
  },
  gradientPrice1: {
    backgroundImage: 'linear-gradient(to bottom, #A800FF 50%, #7400FF 80%, #7400FF 100%)'
  },

  priceTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "15px",
    display: "block",
    position: "relative",
    color: "#000000",
    textAlign: 'center'
  },

  productTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "17px",
    display: "block",
    position: "relative",
    color: "#000000",
    textAlign: 'center'
  },
  categoriesTitle: {
    fontFamily: "ITC Ronda",
    fontSize: "18px",
    display: "block",
    position: "relative",
    color: "#0c045d",
    textAlign: 'left'
  },
  
  column: {
    zIndex: 4,
   
  },
  best3TopProducts :{
    width: '82%',
    margin: 'auto',
    paddingTop: '50px'
  },
  mainLayout :{
    width: '93%',
    margin: 'auto',
  },
  otherProducts :{
    width: '93%',
    margin: 'auto',
    paddingTop: '50px'
  },
  card: {
    boxShadow: '0px 0px 10px 6px rgb(127 114 114 / 20%)',
    padding: '20px'
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



const ProductWithPriceCard = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box>
      <Card className={classes.card}>
        <Box p={1} position='relative' >
          <Box position='relative' style={{textAlign: 'center'}}>
            <img
              src="/img/products/top1.png"
              className={classes.image}
              style={{width: '100%'}}
              alt='item'
            />
          </Box>       
          <Hidden smDown>
            <Box position="absolute" style={{bottom: '20%', left: '5px'}}>
              <Box>
                <h5 className={classes.priceTitle}>$2000 </h5>
              </Box>
              <Box className={classNames(classes.gradientPrice, classes.gradientPrice1)} style={{ height: '115px', marginLeft: '15px'}}>
              </Box>
              <Box>
                <h5 className={classes.priceTitle}>$800 </h5>
              </Box>
            </Box>
          </Hidden>
        </Box>
      </Card>
      <Box style={{width: '75%', margin: 'auto'}}>
        <h1 className={classes.productTitle}>Razer Blade 17 0 Full HD 360HZ - GeForce RTX 3080 - Black  </h1>
      </Box>
    </Box>
  );
};


export default function Product({query}) {
  console.log(query)
  const id = query.id;
  const classes = useStyles();

  const { data: productData, loading: loadingData, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });
  
    return (
      <HomeContainer>
        <Box className={classNames(classes.container, classes.mainLayout)} >
          {
            productData?.Product &&
              <TopSection productData={productData?.Product} />
          }
        </Box>

        <BestProducts />
        
        <Box className={classNames(classes.container, classes.otherProducts)}  style={{paddingTop: 100}}>
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
            <Grid item xs={12} md={4} className={classes.column}>
              <ProductWithPriceCard />
            </Grid>
            <Grid item xs={12} md={4} className={classes.column}>
              <ProductWithPriceCard />
            </Grid>
            <Grid item xs={12} md={4} className={classes.column}>
              <ProductWithPriceCard />
            </Grid>
          </Grid>
        </Box>

        <Box className={classNames(classes.container, classes.otherProducts)} >
          <NewAddedProducts />
        </Box>

        <Box 
          className={classNames(classes.container, classes.otherProducts, classes.responsivePadding)} 
          style={{
            backgroundImage: "url('/img/products/mid-sec.png')", 
            backgroundRepeat: 'no-repeat',
            // height: '1425px',
            height: 'max-content',
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        >
          <TradingRatedProducts />
        </Box>

        <Box className={classNames(classes.container, classes.otherProducts)} >
          <BestSalesProducts />
        </Box>

      </HomeContainer>
    );

}
