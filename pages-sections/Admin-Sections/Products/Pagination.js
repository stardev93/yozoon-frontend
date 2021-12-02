import { 
  Box,
} from "@material-ui/core";

import head from 'next/head';
import Link from 'next/link';
import Router from "next/router";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { perPage } from 'config';
import ErrorMessage from './ErrorMessage';
import Pagination from '@material-ui/lab/Pagination';

export const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

export default function MyPagination({ page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>...Loading</p>;
  if (error) return <ErrorMessage error={error} />;
  const { count } = data._allProductsMeta;
  const pages = Math.ceil(count / perPage);

  return (
    <Box>
      <Pagination 
        color="secondary"
        defaultPage={page}
        count={pages} 
        onChange={(e)=> {
          Router.push(`/admin/products/${e.target.textContent} `);
        }} 
      />
    </Box>
  );
}
