import { gql } from "@apollo/client";

export const GetArticles = gql`
  query Articles {
    Articles {
      items {
        _slug
        title
        excerpt
        categories {
          _slug
          title
        }
        authors {
          _slug
          full_name
        }
      }
    }
  }
`;
