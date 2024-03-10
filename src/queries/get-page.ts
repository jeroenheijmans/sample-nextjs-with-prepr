import { gql } from "@apollo/client";

export const GetPage = gql`
  query ($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack {
        __typename
        ... on TextBlock {
          _id
          content
          list_style_image
        }
        ... on ImageList {
          _id
          kind
          intro
          images {
            title
            image {
              url
              height
              width
            }
          }
        }
        ... on InfoBoxes {
          _id
          intro
          outro
          boxes {
            kind
            text_content
            list_style_image
            link_text
            link_href {
              ... on Page {
                _slug
              }
            }
          }
        }
      }
      seo {
        _id
        title
        description
        social_media_image {
          _id
          url
        }
      }
    }
  }
`;
