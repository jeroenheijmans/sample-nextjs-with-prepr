import { gql } from "@apollo/client";

export const SEARCH_DETAILS = gql`
  fragment SearchDetails on Search {
    _id
    intro
    search_input_placeholder_text
    no_search_yet_text
    no_data_text
  }
`;
