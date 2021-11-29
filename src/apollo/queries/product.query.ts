import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      Title
      image {
        url
      }
    }
  }
`;
