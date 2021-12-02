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

