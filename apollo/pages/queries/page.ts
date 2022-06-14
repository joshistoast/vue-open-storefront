import gql from 'graphql-tag'

export const getPage = gql`
  query page (
    $handle: String!
  ) {
    page (
      handle: $handle
    ) {
      body
      bodySummary
      createdAt
      id
      seo {
        description
        title
      }
      title
      updatedAt
    }
  }
`
