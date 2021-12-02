import { gql } from '@apollo/client';

export const ALL_CATEGORIES_QUERY = gql`
  query {
    allCategories {
      id
      name
      sub {
        id
        name
      }
    }
  }
`

export const BEST_PRODUCTS_QUERY = gql`
  query BEST_PRODUCTS_QUERY($skip: Int, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      type
      price
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



export const NEW_ADDED_PRODUCTS_QUERY = gql`
  query NEW_ADDED_PRODUCTS_QUERY($skip: Int, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      type
      price
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

export const TRADING_RATED_PRODUCTS_QUERY = gql`
  query TRADING_RATED_PRODUCTS_QUERY($skip: Int, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      type
      price
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

export const BEST_SALES_PRODUCTS_QUERY = gql`
  query BEST_SALES_PRODUCTS_QUERY($skip: Int, $first: Int) {
    allProducts(skip: $skip, first: $first) {
      id
      name
      type
      price
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

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
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