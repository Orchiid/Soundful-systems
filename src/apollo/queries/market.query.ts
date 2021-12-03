import gql from "graphql-tag";

export const GET_MARKETS = gql`
  query {
    markets {
      id
      title
      image {
        url
      }
    }
  }
`;
