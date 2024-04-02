import { gql } from "@apollo/client";

export const GetPerson = gql`
  query Person($slug: String) {
    Person(slug: $slug) {
      _slug
      full_name
      profile_pic {
        _id
        url
      }
      bio
    }
    Articles(where: { authors: { _slug_any: [$slug] } }) {
      items {
        _slug
        title
        excerpt
        categories {
          _slug
          title
        }
        authors {
          _slug
          full_name
        }
      }
      total
    }
  }
`;
