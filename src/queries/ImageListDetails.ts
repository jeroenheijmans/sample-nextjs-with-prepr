import { gql } from "@apollo/client";

const IMAGE_DETAILS = gql`
  fragment ImageDetails on ImageListItem {
    title
    image {
      url
      height
      width
    }
  }
`;

export const IMAGE_LIST_DETAILS = gql`
  ${IMAGE_DETAILS}

  fragment ImageListDetails on ImageList {
    _id
    kind
    intro
    images {
      ...ImageDetails
    }
  }
`;
