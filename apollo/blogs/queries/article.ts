import gql from 'graphql-tag'

export const getArticle = gql`
  query article (
    $blogHandle: String!
    $articleHandle: String!
  ) {
    blog (
      handle: $blogHandle
    ) {
      id
      articleByHandle (
        handle: $articleHandle
      ) {
        authorV2 {
          bio
          email
          firstName
          lastName
          name
        }
        blog {
          id
          handle
        }
        excerpt
        excerptHtml
        content
        contentHtml
        handle
        id
        image {
          altText
          height
          id
          url
          width
        }
        publishedAt
        seo {
          title
          description
        }
        tags
        title
      }
    }
  }
`
