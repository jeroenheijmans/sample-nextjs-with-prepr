import { gql } from "@apollo/client";

export const GetNavigation = gql`
  query Navigation($slug: String) {
    Navigation(slug: $slug) {
      _id
      title
      _slug
      menu_items {
        title
        description
        link_external {
          url
          title
        }
        link_internal {
          ... on Page {
            _slug
            title
          }
          ... on Article {
            _slug
            title
          }
        }
        children {
          title
          description
          link_external {
            url
            title
          }
          link_internal {
            ... on Page {
              _slug
              title
            }
            ... on Article {
              _slug
              title
            }
          }
        }
      }
    }
  }
`;
