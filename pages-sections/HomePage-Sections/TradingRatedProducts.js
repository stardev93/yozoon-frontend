import React, { useEffect, useState } from 'react';
// import Link from "next/link";
import { Box, Grid, makeStyles, useTheme, useMediaQuery, Typography, Button, Hidden } from '@material-ui/core';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  root: {
    
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
  text_18: {
    paddingTop: '10px',
    fontFamily: "ITC Ronda",
    fontSize: "18px",
    display: "block",
    position: "relative",
    color: "white",
    textAlign: 'left',
  },

  slickContainer: {
    width:'100%',
    margin: 'auto', 
    padding: '0 20px',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },

  border_style: {
    margin: 20,
    padding: '15px 15px 0px 15px',
    border: '2px solid #f5f5f5',
    borderRadius: 15,
    backgroundColor: 'white'
  },
  border_btn: {
    borderWidth: '2px',
    borderColor: '#6A00FF',
    padding: '10px 30px',
    color: '#6A00FF',
    width: '160px',
    height: '50px',
    fontSize: '17px',
    fontFamily: "ITC Ronda",
  }


}));


const TradingRatedProducts = ({products}) => {
  const classes = useStyles();
  const theme = useTheme();
  const lgDevice = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDevice = useMediaQuery(theme.breakpoints.down('md'));
  const xsDevice = useMediaQuery(theme.breakpoints.down('xs'));
  
  const [slidesToShow, setSlidesToShow] = useState(0);

  useEffect(() => {
    // other code

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // other code
    if((products?.length > 0) && products?.length < 4) {
      return lgDevice ? (mdDevice ? (xsDevice ? setSlidesToShow(1) : setSlidesToShow(2)) :setSlidesToShow(1)) :setSlidesToShow(1)
    } else if(products?.length > 3) {
      return lgDevice ? (mdDevice ? (xsDevice ? setSlidesToShow(1) : setSlidesToShow(2)) :setSlidesToShow(2)) :setSlidesToShow(2)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, lgDevice, mdDevice, xsDevice])

  return (
    <Box>
      <Hidden smDown>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.column}>
            <Box>
              <Slider 
                dots={false}
                arrows={false}
                infinite={false}
                speed={300}
                slidesToScroll={1}
                slidesToShow={slidesToShow}
                autoplay={true}
                rows={2}
              >
                {products && products.map((data, i) =>
                  <div key={i}>
                      <div className={classes.border_style}>
                        <Box position="relative">
                          <img alt="" src={data.url}  style={{width: '100%', marginTop: '15px'}} />
                        </Box>
                        <Box display="flex" p={1} >
                          <Box p={1} style={{height:50}}>
                            <Typography variant="body2" component="h2">
                              {/* {data.title} */}
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                  </div>
                )}
              </Slider>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.column}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                p: 1,
                m: 1,
              }}
              style={{width: '99%', margin: 'auto'}}
            >
              <Box sx={{ p: 1 }}>
                <img
                  src="/img/products/trading_title.png"
                  className={classes.image}
                  style={{width: '45px'}}
                  alt='item'
                />
              </Box>
              <Box sx={{ p: 1}}>
                <p className={classes.title_50} style={{color: 'white'}}>Trending Products</p>
                <Box>
                  <p className={classes.text_18}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </Box>
              </Box>
            </Box>
          </Grid>


          <Grid item xs={12} md={6} className={classes.column}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                p: 1,
                m: 1,
              }}
              style={{width: '99%', margin: 'auto'}}
            >
              <Box sx={{ p: 1 }}>
                <img
                  src="/img/products/trading_title.png"
                  className={classes.image}
                  style={{width: '45px'}}
                  alt='item'
                />
              </Box>
              <Box sx={{ p: 1}}>
                <p className={classes.title_50} style={{color: 'white'}}>New Rated Products</p>
                <Box>
                  <p className={classes.text_18}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </p>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className={classes.column}>
            <Box>
              <Slider 
                dots={false}
                arrows={false}
                infinite={false}
                speed={300}
                slidesToScroll={1}
                slidesToShow={slidesToShow}
                autoplay={true}
                rows={2}
              >
                {products && products.map((data, i) =>
                  <div key={i}>
                      <div className={classes.border_style}>
                        <Box position="relative">
                          <img alt="" src={data.url}  style={{width: '100%', marginTop: '15px'}} />
                        </Box>
                        <Box display="flex" p={1} >
                          <Box p={1} style={{height:50}}>
                            <Typography variant="body2" component="h2">
                              {/* {data.title} */}
                            </Typography>
                          </Box>
                        </Box>
                      </div>
                  </div>
                )}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              m: 1,
            }}
            style={{width: '99%', margin: 'auto'}}
          >
            <Box>
              <img
                src="/img/products/trading_title.png"
                className={classes.image}
                style={{width: '45px'}}
                alt='item'
              />
            </Box>
            <Box>
              <p className={classes.title_50} style={{color: 'white'}}>Trending Products</p>
            </Box>
          </Box>
          <Box>
            <p className={classes.text_18}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </Box>
          <Box>
            <Slider 
              dots={true}
              arrows={false}
              infinite={false}
              speed={300}
              slidesToScroll={1}
              slidesToShow={slidesToShow}
              autoplay={true}
            >
              {products && products.map((data, i) =>
                <div key={i}>
                    <div className={classes.border_style}>
                      <Box position="relative">
                        <img alt="" src={data.url}  style={{width: '100%', marginTop: '15px'}} />
                      </Box>
                      <Box display="flex" p={1} >
                        <Box p={1} style={{height:50}}>
                          <Typography variant="body2" component="h2">
                            {/* {data.title} */}
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                </div>
              )}
            </Slider>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              m: 1,
            }}
            style={{width: '99%', margin: 'auto'}}
          >
            <Box>
              <img
                src="/img/products/trading_title.png"
                className={classes.image}
                style={{width: '45px'}}
                alt='item'
              />
            </Box>
            <Box>
              <p className={classes.title_50} style={{color: 'white'}}>New Rated Products</p>
            </Box>
          </Box>
          <Box>
            <p className={classes.text_18}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </Box>
          <Box>
            <Slider 
              dots={true}
              arrows={false}
              infinite={false}
              speed={300}
              slidesToScroll={1}
              slidesToShow={slidesToShow}
              autoplay={true}
            >
              {products && products.map((data, i) =>
                <div key={i}>
                    <div className={classes.border_style}>
                      <Box position="relative">
                        <img alt="" src={data.url}  style={{width: '100%', marginTop: '15px'}} />
                      </Box>
                      <Box display="flex" p={1} >
                        <Box p={1} style={{height:50}}>
                          <Typography variant="body2" component="h2">
                            {/* {data.title} */}
                          </Typography>
                        </Box>
                      </Box>
                    </div>
                </div>
              )}
            </Slider>
          </Box>
        </Box>
      </Hidden>

      
      
    </Box>
  );
};



export default TradingRatedProducts;
