import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import { Box, Grid, makeStyles, useTheme, useMediaQuery, Typography, Button, Hidden } from '@material-ui/core';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  text_16 : {
    fontFamily: "ITC Ronda",
    fontSize: "16px",
  },
  text_18 : {
    fontFamily: "ITC Ronda",
    fontSize: "18px",
    color: '#12151d'
  },
  text_17 : {
    fontFamily: "ITC Ronda",
    fontSize: "18px",
    color: '#0c045d'
  },
  product_title_img : {
    width: '300px',
    height: '125px'
  },

  
}));


const TopSection = ({ productData }) => {
  const classes = useStyles();

  useEffect(() => {
    // other code
    console.log("----------------------productData", productData)
   // if(productData?.name) localStorage.setItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData])


  return (
    <Box>
      <Hidden smDown>
        <Box  style={{paddingTop: 150}}>
          <Grid container>
            <Grid item sm={4} md={6}>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1, m: 1 }} >
                <Box sx={{ p: 1 }}>
                  <p className={classes.text_16} style={{color: '#898989'}}>{productData?.category?.name} - {productData?.subCategory?.name}</p>
                </Box>
                <Box sx={{ p: 1}}>
                  <p className={classes.text_16}  style={{color: '#898989'}}>-</p>
                </Box>
                <Box sx={{ p: 1}}>
                  <p className={classes.text_16}  style={{color: '#0c045d'}}>{productData?.name}</p>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  p: 1, m: 1 }} >
                <Box sx={{ p: 1 }}>
                  <img src="/img/products/product_title.png" className={classes.product_title_img}/>
                </Box>
                <Box sx={{ p: 1}}>
                  <img src="/img/icons/rating.png" />
                </Box>
                <Box sx={{ p: 1}}>
                  <img src="/img/icons/share.png" />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 1, m: 1 }} >
                <Box sx={{ p: 1 }}>
                  <p className={classes.text_16} style={{color: '#898989', cursor: 'pointer'}}>Product before</p>
                  <p className={classes.text_16} style={{color: '#0c045d'}}>{productData?.name}</p>
                  <p className={classes.text_16} style={{color: '#898989', cursor: 'pointer'}}>Product after</p>
                </Box>
                <Box sx={{ p: 1}}>
                  <Button variant="contained" className="gradientButtonTag">Best Screen</Button>
                </Box>
                <Box sx={{ p: 1}}>
                  <Button variant="contained" className="gradientButtonTag">Best Graphic</Button>
                </Box>
              </Box>

              <Box p={2} m={1}>
                <p className={classes.text_18}><div dangerouslySetInnerHTML={{ __html: productData?.description }} /></p>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  p: 1, m: 1 }} >
                <Box sx={{ p: 1 }}>
                  <p className={classes.text_18} style={{color: '#0c045d', fontStyle: 'italic'}}>Starting from $1500</p>
                </Box>
                <Box sx={{ p: 1}}>
                  <Button variant="contained" className="gradientButtonBuy" endIcon={<ArrowRightAltIcon />}>BUY NOW</Button>
                </Box>
                <Box sx={{ p: 1}}>
                  <Button variant="contained" className="gradientButtonBuy">RATE THIS PRODUCT</Button>
                </Box>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={12} md={6}>
                    <Box>
                      <img src="/img/icons/facebook.png" />
                    </Box>
                    <Box>
                      <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </Box>
                    <Box>
                      <img src="/img/icons/rating-star.png" />
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box>
                      <img src="/img/icons/google.png" />
                    </Box>
                    <Box>
                      <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </Box>
                    <Box>
                      <img src="/img/icons/rating-star.png" />
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box>
                      <img src="/img/icons/twiter.png" />
                    </Box>
                    <Box>
                      <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </Box>
                    <Box>
                      <img src="/img/icons/rating-star.png" />
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box>
                      <img src="/img/icons/yelp.png" />
                    </Box>
                    <Box>
                      <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </Box>
                    <Box>
                      <img src="/img/icons/rating-star.png" />
                    </Box>
                  </Grid>
                </Grid>
              </Box>

            </Grid>
            <Grid item sm={4} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                <Box>
                <img src={productData?.photo?.publicUrl} style={{ height: '280px', width: '100%', objectFit: 'cover', borderRadius: '30px'}}/>
                </Box>
              </Box>
              <Box>
                <img src="/img/products/product_under.png" style={{marginTop: '-160px'}}/>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Hidden>



      <Hidden mdUp>
        <Box sx={{ p: 1 }}>
          <p className={classes.text_16} style={{color: '#898989'}}>Laptops - Gaming Laptops</p>
        </Box>
        <Box sx={{ p: 1}}>
          <img src="/img/icons/rating.png" />
        </Box>
        <Grid container>
          <Grid item sm={4} md={6}>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 1, m: 1 }} >
              
              <Box sx={{ p: 1}}>
                <p className={classes.text_16}  style={{color: '#898989'}}>-</p>
              </Box>
              <Box sx={{ p: 1}}>
                <p className={classes.text_16}  style={{color: '#0c045d'}}>{productData?.name}</p>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  p: 1, m: 1 }} >
              <Box sx={{ p: 1 }}>
                <img src="/img/products/product_title.png" className={classes.product_title_img}/>
              </Box>
              <Box sx={{ p: 1}}>
                <img src="/img/icons/rating.png" />
              </Box>
              <Box sx={{ p: 1}}>
                <img src="/img/icons/share.png" />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: 1, m: 1 }} >
              <Box sx={{ p: 1 }}>
                <p className={classes.text_16} style={{color: '#898989'}}>Product before</p>
                <p className={classes.text_16} style={{color: '#0c045d'}}>{productData?.name}</p>
                <p className={classes.text_16} style={{color: '#898989'}}>Product after</p>
              </Box>
              <Box sx={{ p: 1}}>
                <Button variant="contained" className="gradientButtonTag">Best Screen</Button>
              </Box>
              <Box sx={{ p: 1}}>
                <Button variant="contained" className="gradientButtonTag">Best Graphic</Button>
              </Box>
            </Box>

            <Box p={2} m={1}>
              <p className={classes.text_18}><div dangerouslySetInnerHTML={{ __html: productData?.description }} /></p>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  p: 1, m: 1 }} >
              <Box sx={{ p: 1 }}>
                <p className={classes.text_18} style={{color: '#0c045d', fontStyle: 'italic'}}>Starting from $1500</p>
              </Box>
              <Box sx={{ p: 1}}>
                <Button variant="contained" className="gradientButtonBuy" endIcon={<ArrowRightAltIcon />}>BUY NOW</Button>
              </Box>
              <Box sx={{ p: 1}}>
                <Button variant="contained" className="gradientButtonBuy">RATE THIS PRODUCT</Button>
              </Box>
            </Box>

            <Box>
              <Grid container spacing={3}>
                <Grid item sm={12} md={6}>
                  <Box>
                    <img src="/img/icons/facebook.png" />
                  </Box>
                  <Box>
                    <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                  </Box>
                  <Box>
                    <img src="/img/icons/rating-star.png" />
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box>
                    <img src="/img/icons/google.png" />
                  </Box>
                  <Box>
                    <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                  </Box>
                  <Box>
                    <img src="/img/icons/rating-star.png" />
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box>
                    <img src="/img/icons/twiter.png" />
                  </Box>
                  <Box>
                    <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                  </Box>
                  <Box>
                    <img src="/img/icons/rating-star.png" />
                  </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Box>
                    <img src="/img/icons/yelp.png" />
                  </Box>
                  <Box>
                    <p className={classes.text_17} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                  </Box>
                  <Box>
                    <img src="/img/icons/rating-star.png" />
                  </Box>
                </Grid>
              </Grid>
            </Box>

          </Grid>
          <Grid item sm={4} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <Box>
              <img src="/img/products/product.png" />
              </Box>
            </Box>
            <Box>
              <img src="/img/products/product_under.png" style={{marginTop: '-160px'}}/>
            </Box>
          </Grid>
        </Grid>
      </Hidden>
    </Box>
  );
};



export default TopSection;
