import { gql } from "@apollo/client";

export const GetArticle = gql`
  query Articles($slug: String) {
    Article(slug: $slug) {
      _slug
      title
      cover {
        url
        width
        height
      }
      content {
        ... on Text {
          html
        }
      }
      authors {
        _slug
        full_name
        profile_pic {
          height
          width
          url
          caption
        }
      }
      categories {
        _slug
        title
      }
      seo {
        title
        description
      }
    }
  }
`;
