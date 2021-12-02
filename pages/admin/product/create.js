import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Backdrop
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from "clsx";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//  import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Category from 'pages-sections/Admin-Sections/Products/Category';
import ProductImage from 'pages-sections/Admin-Sections/Products/ProductImage';
import Brand from 'pages-sections/Admin-Sections/Products/Brand';
// import Tags from 'pages-sections/Admin-Sections/Products/Tags';
// import avatar from "assets/img/faces/marc.jpg";
import {
  defaultFont,
} from "styles/jss/nextjs-material-kit.js";
import { CURRENT_USER_QUERY, useUser } from 'components/User'


const useStyles = makeStyles((theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
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
  autoComIcon: {
  },
  autoComRoot: {
    color: 'yellow',
    ...defaultFont,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

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

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      type
      price
      description
      image {
        id
      }
      status
      price
      discount
      stock
      tags {
        id
      }
      brand {
        id
      }
      seller {
        id
      }
    }
  }
`;

export const ALL_CATEGORIES_QUERY = gql`
  query {
    allCategories {
      id
      name
    }
  }
`
const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $type: String!
    $category: ID!
    $subCategory: ID!
    $description: String!
    $photo: Upload!
    $status: String!
    $price: Int!
    $discount: Int!
    $stock: Int!
    $brand: ID!
    $user: ID!
  ) {
    createProduct(
      data: {
        name: $name
        type: $type
        category: {connect: {id: $category}}
        subCategory: {connect: {id: $subCategory}}
        description: $description
        # photo: { create: { image: $photo, altText: $name } }
        photo: $photo
        status: $status
        price: $price
        discount: $discount
        stock: $stock
        brand: {connect:{id: $brand}}
        user: {connect:{id: $user}}
      }
    ) {
      id
      name
      type
      category {
        id
        name
      }
      subCategory {
        id
        name
      }
      description
      photo {
        id
        filename
        publicUrl
      }
      status
      price
      discount
      stock
      brand {
        id
      }
      user {
        id
      }
    }
  }
`;


function CreatePage() {
  const classes = useStyles();
  const me = useUser();

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [type, setType] = useState("PHYSICAL");
  const [status, setStatus] = useState('AVAILABLE');
  const [image, setImage] = useState();
  const [tags, setTags] = useState();
  const [brand, setBrand] = useState();

  React.useEffect(()=>{
    if(category && categories) {
      categories.map((cat, index) => {
        if(cat?.id === category) {
          setSubCategories(cat.sub)
        }
      })
    }
  }, [category, categories])

  React.useEffect(()=>{
    if(subCategories?.length > 0) {
      setSubCategory(subCategories[0]?.id)
    }
  }, [subCategories])

  const [AddProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT_MUTATION);
  // if (loading) return (
  //   <Backdrop className={classes.backdrop} open={loading} >
  //     <CircularProgress color="inherit" />
  //   </Backdrop>
  // );
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Formik
            initialValues={{
              name: '',
              description: '',
              price: '',
              discount: '',
              stock: '',
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required('Name invalid'),
              price: Yup.string().max(255).required('Price invalid'),
              discount: Yup.string().max(255).required('Discount invalid'),
              stock: Yup.string().max(255).required('Stock invalid'),
            })}
            onSubmit={async (values, {
              setErrors,
              setStatus,
              setSubmitting
            }) => {
              const res = await AddProduct({ 
                variables: { 
                  name: values.name,
                  type: type,
                  category: category,
                  subCategory: subCategory,
                  description: values.description,
                  photo: image,
                  status: status,
                  price: values.price,
                  discount: values.discount,
                  stock: values.stock,
                  brand: brand,
                  user: me?.id,
                },
                refetchQueries: [{ query: CURRENT_USER_QUERY }], 
              });
              if(res.data.createProduct.id) {
                values.name = "";
                values.type = 'PHYSICAL';
                values.description = '';
                values.status = 'AVAILABLE';
                values.price = '';
                values.discount = '';
                values.stock = '';
                setImage();
              }
              // Router.push(`/admin/product/update?id=${prop.id}`);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form
                noValidate
                className={classes.root}
                onSubmit={handleSubmit}
              >
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Create</h4>
                    <p className={classes.cardCategoryWhite}>Create New Product</p>
                  </CardHeader>
                  <CardBody>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={12} md={8}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={12}>
                            <CustomInput
                              error={Boolean(touched.name && errors.name)}
                              // helperText={touched.name && errors.name}
                              labelText="Name"
                              id="name"
                              name="name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.name}
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box style={{ marginTop: '11px'}}>
                              <Category category={category} setCategory ={setCategory} setCategories={setCategories} />
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box style={{ marginTop: '11px'}}>
                              <FormControl className={classes.formControl} style={{width: '100%'}}>
                                <InputLabel id="sub-category-label" className={classes.labelRoot}>Sub Category</InputLabel>
                                {
                                  (subCategories && subCategory)  &&
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
                                    {
                                      (subCategories || []).map((subcat, index) => 
                                        <MenuItem value={subcat?.id} key={index}>{subcat?.name}</MenuItem>
                                      )
                                    }
                                  </Select>
                                }
                              </FormControl>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box style={{ marginTop: '11px'}}>
                              <FormControl className={classes.formControl} style={{width: '100%'}}>
                                <InputLabel id="product-type-label" className={classes.labelRoot}>Type</InputLabel>
                                <Select
                                  autoWidth={false}
                                  value={type}
                                  onChange={(e)=>setType(e.target.value)}
                                  IconComponent={CustomExpandMore} 
                                  className={classes.select}
                                  inputProps={{
                                      classes: {
                                          icon: classes.icon,
                                          root: classes.root,
                                      },
                                  }}
                                >
                                  <MenuItem value={"PHYSICAL"}>Physical</MenuItem>
                                  <MenuItem value={"DIGITAL"}>Digital</MenuItem>
                                  <MenuItem value={"LICENSE"}>License</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box style={{ marginTop: '11px'}}>
                              <FormControl className={classes.formControl} style={{width: '100%'}}>
                                <InputLabel id="product-status-label" className={classes.labelRoot}>Status</InputLabel>
                                <Select
                                  autoWidth={false}
                                  value={status}
                                  onChange={(e)=>setStatus(e.target.value)}
                                  IconComponent={CustomExpandMore} 
                                  className={classes.select}
                                  inputProps={{
                                      classes: {
                                          icon: classes.icon,
                                          root: classes.root,
                                      },
                                  }}
                                >
                                  <MenuItem value={"DRAFT"}>Draft</MenuItem>
                                  <MenuItem value={"AVAILABLE"}>Availale</MenuItem>
                                  <MenuItem value={"UNAVAILABLE"}>Unavailale</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <CustomInput
                              type="number"
                              error={Boolean(touched.price && errors.price)}
                              // helperText={touched.price && errors.price}
                              labelText="Price"
                              id="price"
                              name="price"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.price}
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <CustomInput
                              type="number"
                              error={Boolean(touched.discount && errors.discount)}
                              // helperText={touched.discount && errors.discount}
                              labelText="Discount"
                              id="discount"
                              name="discount"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.discount}
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />

                          </Grid>
                          <Grid item xs={12} md={10}>
                            <CustomInput 
                              white={Boolean(touched.description && errors.description)}
                              labelText="Description"
                              id="description"
                              name="description"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.description}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              multiline={true}
                              minRows={3}
                              maxRows={10}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Grid container>
                          <Grid item xs={12} md={12}>
                            <Box display="flex" justifyContent="center">
                              <Box mt={5} style={{minWidth: '320px', maxWidth: '320px'}}>
                                <ProductImage nameKey="image" image={image} setImage={setImage} />
                              </Box>
                            </Box>
                          </Grid>
                          
                          <Grid item xs={12} md={12}>
                            <CustomInput
                              type="number"
                              error={Boolean(touched.stock && errors.stock)}
                              // helperText={touched.stock && errors.stock}
                              labelText="Stock"
                              id="stock"
                              name="stock"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.stock}
                              formControlProps={{
                                fullWidth: true,
                              }}
                            />
                          </Grid>
                          {/* <Grid item xs={12} md={12}>
                            <Tags setTags={setTags} />
                          </Grid> */}
                          <Grid item xs={12} md={12}>
                            <Box style={{ marginTop: '11px'}}>
                              <Brand brand={brand} setBrand ={setBrand} />
                            </Box>
                          </Grid> 
                          
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardBody>
                  <CardFooter>
                    <Box>
                        <Button type="submit" color="primary">Create Product</Button>
                    </Box>
                  </CardFooter>
                </Card>
              </form>
            )}
          </Formik>
        </GridItem>
      </GridContainer>
      {
        loading && 
        <Backdrop className={classes.backdrop} open={loading} >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    </div>
  );
}

CreatePage.layout = Admin;

export default CreatePage;


