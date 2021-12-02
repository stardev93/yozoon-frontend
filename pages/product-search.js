import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Paper,
  makeStyles,
  withStyles,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputBase
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import axios from 'src/utils/axios';

import Page from 'src/components/Page';
import Menu from '../common/menu';
import {
  getProducts,
  getCategories,
  getProductsByCategory,
  getProductsBySubCategory,
  getProductsByChildCategory
} from 'src/slices/shop';
import { useDispatch, useSelector } from 'src/store';
import ProductList from './ProductList';
import Recommendations from './Recommendations';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 0,
    paddingBottom: 100
  },
  listWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  list: {
    position: 'relative',
    paddingBottom: '120px !important'
  },
  menu_header: {
    height: 60,
    backgroundColor: '#214c6b',
    textAlign: 'center',
    color: '#ffffff',
    paddingTop: 15,
    letterSpacing: 'inherit'
  },
  helpContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 30
  },
  blue_rect: {
    position: 'absolute',
    top: '8%',
    right: '-25%',
    height: '89%',
    zIndex: 8,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    // border: '1px solid #ced4da',
    boxShadow: '1px 2px 6px #cec4c4',
    fontSize: 16,
    padding: '15px 30px 15px 30px !important',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const Category = ({ category, setSelectedCategoryName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(true);
  const { sub_categories } = category;

  const [lastSlug, setLastSlug] = useState('');

  return (
    <>
      <ListItem
        button
        onClick={() => {
          setOpen(!open);
          setSelectedCategoryName(category.slug);
          localStorage.setItem('currentPage', 1);
          localStorage.setItem('searchKey', 'parent-----' + category.slug);
        }}
      >
        <ListItemText primary={category.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {(sub_categories || []).map((subcat, i) => (
          <List component="div" key={i} disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={() => {
                setSubOpen(!subOpen);
                localStorage.setItem('currentPage', 1);

                setSelectedCategoryName(subcat.slug);
                localStorage.setItem('searchKey', 'sub-----' + subcat.slug);
                dispatch(getProductsBySubCategory(subcat.slug));
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ListItemText primary={subcat.name} />
              {subOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={subOpen} timeout="auto" unmountOnExit>
              {(subcat.child_categories || []).map((childcat, j) => (
                <List component="div" key={j} disablePadding>
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={() => {
                      setOpen(!open);
                      localStorage.setItem('currentPage', 1);
                      setSelectedCategoryName(childcat.slug);
                      localStorage.setItem(
                        'searchKey',
                        'child-----' + childcat.slug
                      );
                      dispatch(getProductsByChildCategory(childcat.slug));
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ListItemText primary={childcat.name} />
                  </ListItem>
                </List>
              ))}
            </Collapse>
          </List>
        ))}
      </Collapse>
    </>
  );
};

const ProductSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [products, setProducts] = useState({});
  const [selectedCategoryName, setSelectedCategoryName] = useState('');
  const [sortVal, setSortVal] = useState('');
  const [support_content_text, setSupportContent] = useState({});

  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem('currentPage')
  );

  const shopSelector = useSelector(state => state.shop);

  const cat = localStorage.getItem('searchKey')?.split('-----')[0];
  const slug = localStorage.getItem('searchKey')?.split('-----')[1];
  const pageNumber = localStorage.getItem('currentPage') || 1;
  const { categories, searchedProducts } = shopSelector;

  useEffect(() => {
    // other code
    dispatch(getCategories());
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // other code
    if (cat === 'parent') {
      dispatch(getProductsByCategory(slug, `sort=${sortVal}&page=${pageNumber}&per_page=12`));
    } else if (cat === 'sub') {
      dispatch(
        getProductsBySubCategory(slug, `sort=${sortVal}&page=${pageNumber}&per_page=12`)
      );
    } else if (cat === 'child') {
      dispatch(
        getProductsByChildCategory(slug, `sort=${sortVal}&page=${pageNumber}&per_page=12`)
      );
    }

    setSelectedCategoryName(slug);
  }, [cat, slug, pageNumber,sortVal]);

  useEffect(() => {
    setProducts(searchedProducts);
  }, [searchedProducts?.data]);

  useEffect(() => {
  console.log({sortVal});
  }, [sortVal]);

  useEffect(() => {
    // other code
    const loadHelp_settings = async () => {
      const propertyResponse = await axios.get('/homepage_settings');
      setSupportContent(
        propertyResponse?.data?.support_content_text
          ? propertyResponse?.data?.support_content_text
          : propertyResponse?.data
      );
    };

    loadHelp_settings();
  }, []);

  const handleChange = event => {
    setSortVal(event.target.value);
  };

  const onPageChange = pageNumber => {
    localStorage.setItem('currentPage', pageNumber);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('currentPage');
    };
  }, []);

  return (
    <Page className={classes.root} title="Product List">
      <Menu />
      <Container style={{ maxWidth: 1600 }}>
        <div className="section-b-space ratio_asos" style={{ marginTop: 50 }}>
          <Grid container spacing={10}>
            <Grid item md={3} xs={12}>
              <Box>
                <Paper>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        style={{ color: '#FFFFFF', fontSize: 20 }}
                      >
                        Kategorien
                      </Typography>
                    }
                    className={classes.menu_header}
                  />
                  {(categories || []).map((category, index) => (
                    <Category
                      category={category}
                      setSelectedCategoryName={setSelectedCategoryName}
                      key={index}
                    />
                  ))}
                </Paper>
              </Box>
            </Grid>
            <Grid item md={9} xs={12} className={classes.list}>
              <Box className={classes.listWrapper}>
                <Box display="flex" p={1}>
                  <Box p={1} flexGrow={1}>
                    <Typography
                      type="body2"
                      style={{ color: '#214c6b', fontSize: 20 }}
                    >
                      <b>{products?.data?.length}</b> Ergebnisse für{' '}
                      <b>„{selectedCategoryName}“</b> gefunden
                    </Typography>
                  </Box>
                  <Box p={1}>
                    <FormControl className={classes.margin}>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={sortVal}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value={0}>
                          <em>Sortieren nach</em>
                        </MenuItem>
                        <MenuItem value="name">A bis Z</MenuItem>
                        <MenuItem value="-name">Z bis A</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <ProductList
                  products={products}
                  count={products?.paginationData?.per_page}
                  onPageChange={pageNumber => onPageChange(pageNumber)}
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
     
    </Page>
  );
};

export default ProductSearch;
