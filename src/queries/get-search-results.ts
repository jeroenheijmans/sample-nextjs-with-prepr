import { gql } from "@apollo/client";

export const GetSearchResults = gql`
  query ContentItems($query: String) {
    ContentItems(
      where: { _typename_any: ["Article", "Page", "Person"], _search: $query }
    ) {
      items {
        ... on Article {
          _id
          _slug
          title
          excerpt
        }
        ... on Page {
          _id
          _slug
          title
          seo {
            title
            description
          }
        }
        ... on Person {
          _id
          _slug
          full_name
          bio
        }
      }
      total
    }
  }
`;
