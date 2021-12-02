import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
} from '@material-ui/core';
// core components
import HomeContainer from "components/HomeContainer";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import BestProducts from 'pages-sections/HomePage-Sections/BestProducts';
import NewAddedProducts from 'pages-sections/HomePage-Sections/NewAddedProducts';
import TradingRatedProducts from 'pages-sections/HomePage-Sections/TradingRatedProducts';
import BestSalesProducts from 'pages-sections/HomePage-Sections/BestSalesProducts';
import { container } from "styles/jss/nextjs-material-kit.js";
import useTranslation from '../hooks/useTranslation';

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
  otherProducts :{
    width: '93%',
    margin: 'auto',
    paddingTop: '50px'
  },
  card: {
    boxShadow: '0px 0px 10px 6px rgb(127 114 114 / 20%)',
    padding: '20px'
  },
  bannerTitle: {
    position: 'absolute', 
    top: '25%',
    left: "5%",
    "@media (min-width: 576px)": {
      top: '25%',
      left: "5%",
    },
    "@media (min-width: 768px)": {
      top: '25%',
      left: "5%",
    },
    "@media (min-width: 992px)": {
      top: '25%',
      left: "5%",
    },
    "@media (min-width: 1200px)": {
      top: '25%',
      left: "5%",
    },
    "@media (min-width: 1400px)": {
      top: '25%',
      left: "5%",
    },
    "@media (min-width: 1600px)": {
      top: '25%',
      left: "10%",
    },
    "@media (min-width: 1800px)": {
      top: '30%',
      left: "15%",
    },
    "@media (min-width: 2000px)": {
      top: '30%',
      left: "20%",
    },
  },

}));


export default function Index() {
  const classes = useStyles();
  
    return (
      <HomeContainer>
        <Box>
          <Box style={{width: '100%'}}>
            <Box position='relative' >
              <Box position='relative' style={{textAlign: 'center'}}>
                <img
                  src="/img/nextjs_header.png"
                  className={classes.image}
                  style={{width: '100%', marginTop: 65}}
                  alt='item'
                />
              </Box>       
            </Box>
          </Box>
          
          <Box className={classes.bannerTitle}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Shop Confidently using </h1>
                  <h1 className={classes.title}>unbiased AI Aggragated reviews</h1>
                  <Button variant="contained" className={classNames(classes.gradientButton, classes.gradientButton1)}>BROWSE CATEGORIES</Button>
                </div>
              </GridItem>
            </GridContainer>
          </Box>

          <BestProducts />
         
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
        </Box>
      </HomeContainer>
    );

}
