import { gql } from "@apollo/client";

export const INFO_BOXES_DETAILS = gql`
  fragment InfoBoxesDetails on InfoBoxes {
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
`;
