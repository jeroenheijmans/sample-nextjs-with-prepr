import { gql } from "@apollo/client";

export const GetGlobalUI = gql`
  query GlobalUI {
    GlobalUI {
      global_notification {
        text
        bg_color
        is_dismissible
      }
      highlighted_article {
        __typename
        _slug
      }
    }
  }
`;
