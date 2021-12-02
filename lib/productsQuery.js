import { gql } from '@apollo/client';
let regex = undefined;
export const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      title
      price
      stock
      discount
      seller {
        name
      }
      description
    }
    _allProductsMeta{
      count
    }
  }
`;

export const PRODUCTS_BY_DEPARTMENT = gql`
  query PRODUCTS_BY_DEPARTMENT($dpt: String!, $skip: Int = 0, $first: Int) {
    allProducts(
      first: $first
      skip: $skip
      where: { department: { name_i: $dpt } }
    ) {
      id
      title
      price
      stock
      discount
      seller {
        name
      }
      description
      department {
        name
        description
      }
    }
    _allProductsMeta(
      first: $first
      skip: $skip
      where: { department: { name_i: $dpt } }
    ) {
      count
    }
  }
`;
export const PRODUCTS_BY_CATEGORY = gql`
  query PRODUCTS_BY_CATEGORY($cat: String!, $skip: Int = 0, $first: Int) {
    allProducts(
      first: $first
      skip: $skip
      where: { category: { name_i: $cat } }
    ) {
      id
      title
      price
      stock
      discount
      seller {
        name
      }
      description
    }
    _allProductsMeta(
      first: $first
      skip: $skip
      where: { category: { name_i: $cat } }
    ) {
      count
    }
  }
`;
export const PRODUCTS_BY_SUBCATEGORY = gql`
  query PRODUCTS_BY_SUBCATEGORY($sub: String!, $skip: Int = 0, $first: Int) {
    allProducts(
      first: $first
      skip: $skip
      where: { subCategory: { name_i: $sub } }
    ) {
      id
      title
      price
      stock
      discount
      seller {
        name
      }
      description
    }
    _allProductsMeta(
      first: $first
      skip: $skip
      where: { subCategory: { name_i: $sub } }
    ) {
      count
    }
  }
`;
export const PRODUCTS_SEARCH = gql`
  query PRODUCTS_SEARCH($searchTerm: String!, $skip: Int = 0, $first: Int) {
    allProducts(
        first: $first
        skip: $skip
      where: {
        OR: [
          { title_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      title
      price
      stock
      discount
      seller {
        name
      }
      description
    }
    _allProductsMeta(
        first: $first
        skip: $skip
      where: {
        OR: [
          { title_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      count
    }
  }
`;

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      title
      description
      price
      discount
      stock
      seller {
        id
        name
      }
      options {
        id
        title
        type
        values {
          id
          name
          value
        }
      }
      overview {
        id
        items {
          id
          key
          value
        }
      }
      tags {
        id
        name
      }
      
    }
  }
`;
