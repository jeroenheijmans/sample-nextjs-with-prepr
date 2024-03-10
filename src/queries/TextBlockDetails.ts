import { gql } from "@apollo/client";

export const TEXT_BLOCK_DETAILS = gql`
  fragment TextBlockDetails on TextBlock {
    _id
    content
    list_style_image
  }
`;
