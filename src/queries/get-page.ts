import { gql } from "@apollo/client";

import { IMAGE_LIST_DETAILS } from "./ImageListDetails";
import { INFO_BOXES_DETAILS } from "./InfoBoxesDetails";
import { SEARCH_DETAILS } from "./SearchDetails";
import { TEXT_BLOCK_DETAILS } from "./TextBlockDetails";

export const GetPage = gql`
  ${TEXT_BLOCK_DETAILS}
  ${IMAGE_LIST_DETAILS}
  ${INFO_BOXES_DETAILS}
  ${SEARCH_DETAILS}

  query Page($slug: String) {
    Page(slug: $slug) {
      _id
      title
      _slug
      stack {
        __typename
        ... on TextBlock {
          ...TextBlockDetails
        }
        ... on ImageList {
          ...ImageListDetails
        }
        ... on InfoBoxes {
          ...InfoBoxesDetails
        }
        ... on Search {
          ...SearchDetails
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
