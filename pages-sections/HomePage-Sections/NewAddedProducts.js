import React, { useEffect, useState } from 'react';
import Router from "next/router";
import { Box, Grid, makeStyles, useTheme, useMediaQuery, Typography, Button } from '@material-ui/core';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Slider from "react-slick";
import { useQuery } from '@apollo/client';
import { NEW_ADDED_PRODUCTS_QUERY } from 'lib/queries';
import useTranslation from 'hooks/useTranslation';

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
    // padding: '15px 15px 0px 15px',
    border: '2px solid #f5f5f5',
    borderRadius: 30,
  },
  border_btn: {
    borderWidth: '2px',
    borderColor: '#6A00FF',
    padding: '10px 30px',
    color: '#6A00FF',
    width: 'max-content',
    height: '50px',
    fontSize: '17px',
    fontFamily: "ITC Ronda",
  },
  img: {
    width: '100%', 
    height: '200px', 
    cursor: 'pointer',
    borderRadius: 30,
  }
}));


const NewAddedProducts = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const lgDevice = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDevice = useMediaQuery(theme.breakpoints.down('md'));
  const xsDevice = useMediaQuery(theme.breakpoints.down('xs'));
  
  const [slidesToShow, setSlidesToShow] = useState(0);

  const { data: productsData } = useQuery(NEW_ADDED_PRODUCTS_QUERY, {
    variables: {
      skip: 0,
      first: 20,
    },
  });

  useEffect(() => {
    // other code
    if((productsData?.allProducts?.length > 0) && productsData?.allProducts?.length < 4) {
      return lgDevice ? (mdDevice ? (xsDevice ? setSlidesToShow(1) : setSlidesToShow(2)) :setSlidesToShow(1)) :setSlidesToShow(1)
    } else if(productsData?.allProducts?.length > 3) {
      return lgDevice ? (mdDevice ? (xsDevice ? setSlidesToShow(1) : setSlidesToShow(2)) :setSlidesToShow(3)) :setSlidesToShow(4)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData?.allProducts, lgDevice, mdDevice, xsDevice])

  return (
    <Box>
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
            src="/img/products/add_new.png"
            className={classes.image}
            style={{width: '100%'}}
            alt='item'
          />
        </Box>
        <Box sx={{ p: 1}}>
          <p className={classes.title_50}>{t('new_added_products')}</p>
        </Box>
      </Box>
      <Box>
        {
          (productsData?.allProducts?.length > 0) && 
          <Slider 
            dots={true}
            arrows={true}
            infinite={false}
            speed={300}
            slidesToScroll={1}
            slidesToShow={slidesToShow}
            autoplay={true}
          >
            {productsData?.allProducts.map((data, i) =>
              <div key={i}>
                  <div className={classes.border_style}>
                    <Box>
                      <img 
                        alt={data?.name} 
                        className={classes.img}
                        src={data?.photo?.publicUrl}  
                        onClick={()=>
                          Router.push(`/product?id=${data.id}`)
                        }
                      />
                    </Box>
                    {/* <Box display="flex" p={1} >
                      <Box p={1} style={{height:50}}>
                        <Typography variant="body2" component="h2">
                          {data.name}
                        </Typography>
                      </Box>
                    </Box> */}
                  </div>
              </div>
            )}
          </Slider>
        }
        <Box m={2} p={2} textAlign="center">
          <Button variant="outlined" endIcon={<ArrowRightAltIcon />} className={classes.border_btn}>
            {t('view_all')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};



export default NewAddedProducts;
