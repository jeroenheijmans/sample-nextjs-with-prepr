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
        link_to_page {
          _slug
          title
        }
        children {
          title
          description
          link_external {
            url
            title
          }
          link_to_page {
            _slug
            title
          }
        }
      }
    }
  }
`;
