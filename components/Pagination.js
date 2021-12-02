import PaginationStyles from './styles/PaginationStyles';
import head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { perPage } from '../config';
import ErrorMessage from './ErrorMessage';

export const PAGINATION_QUERY = gql`
  query {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>...Loading</p>;
  if (error) return <ErrorMessage error={error} />;
  const { count } = data._allProductsMeta;
  const pages = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <head>
        <title>
          Sick Fits page {page} of {pages}
        </title>
      </head>
      <Link href={`/products/${page - 1} `}>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        page {page} of {pages}
      </p>
      <p>{count} items total</p>
      <Link href={`/products/${page + 1} `}>
        <a aria-disabled={page >= pages}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
