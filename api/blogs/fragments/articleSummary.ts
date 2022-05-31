import gql from 'graphql-tag'

export const ArticleSummaryFragment = gql`
  fragment ArticleSummary on Article {
    id
    blog {
      title
    }
    authorV2 {
      bio
      email
      firstName
      lastName
      name
    }
    excerpt
    excerptHtml
    contentHtml
    handle
    publishedAt
    image {
      altText
      height
      id
      url
      width
    }
    title
    tags
  }
`
