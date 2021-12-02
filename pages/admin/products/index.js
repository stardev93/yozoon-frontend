import React, { useEffect } from "react";
import Router from "next/router";
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { 
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Tooltip,
  IconButton 
} from "@material-ui/core";
//material ui icons
import EditIcon from '@material-ui/icons/Edit';

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { perPage } from 'config';

import Admin from "layouts/Admin.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
//import Paginations from "components/Pagination/Pagination.js";
// import Pagination from '@material-ui/lab/Pagination';
import MyPagination from 'pages-sections/Admin-Sections/Products/Pagination'
import DeleteProduct from "pages-sections/Admin-Sections/Products/DeleteProduct";

// core components
import tableStyle from "assets/jss/nextjs-material-dashboard/components/tableStyle.js";


const styles = {
  ...tableStyle,
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};



export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      type
      price
      description
      photo {
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
      user {
        id
      }
    }
  }
`;


function ProductsList() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const { query } = useRouter();
  const page = parseInt(query.page || 1);

  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  useEffect(() => {
    // other code
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page])

  useEffect(() => {
    // other code
    console.log("-------------------------data", data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Products List</h4>
            <p className={classes.cardCategoryWhite}>
              these are products for only signed user.
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableResponsive}>
              <Table className={classes.table}>
                <TableHead className={classes["primary" + "TableHeader"]}>
                  <TableRow className={classes.tableHeadRow}>
                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Name</TableCell>
                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Type</TableCell>
                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Price</TableCell>
                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>Discount</TableCell>
                    <TableCell className={classes.tableCell + " " + classes.tableHeadCell} style={{textAlign: 'center'}}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(data?.allProducts || []).map((prop, key) => {
                    return (
                      <TableRow key={key} className={classes.tableBodyRow}>
                        <TableCell className={classes.tableCell}> {prop?.name} </TableCell>
                        <TableCell className={classes.tableCell}> {prop?.type} </TableCell>
                        <TableCell className={classes.tableCell}> {prop?.price} </TableCell>
                        <TableCell className={classes.tableCell}> {prop?.discount} </TableCell>
                        <TableCell className={classes.tableCell} style={{textAlign: 'center'}}> 
                          <Tooltip title="Edit">
                            <IconButton aria-label="edit">
                              <EditIcon 
                                style={{color: "#4CAF50"}} 
                                onClick={()=>
                                  Router.push(`/admin/product/update?id=${prop.id}`)
                                }
                              />
                            </IconButton>
                          </Tooltip>
                          <DeleteProduct id={prop.id}/>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Box textAlign="right"> 
          <MyPagination page={page} />
        </Box>
      </GridItem>
    </GridContainer>
  );
}

ProductsList.layout = Admin;

export default ProductsList;
