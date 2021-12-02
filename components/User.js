import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        gender
        phone
        avatar {
          id
          filename
          publicUrl
        }
        products {
          id
        }
        cart {
          id
          quantity
          product {
            id
          }
        }
      }
    }
  }
`;

function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}

export { CURRENT_USER_QUERY, useUser };
