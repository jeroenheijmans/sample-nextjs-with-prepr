import { gql } from "@apollo/client";

export const GetPersons = gql`
  query Authors {
    Persons {
      items {
        _slug
        full_name
        bio
        profile_pic {
          url
          width
          height
          description
        }
      }
    }
  }
`;
