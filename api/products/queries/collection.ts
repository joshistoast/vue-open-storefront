import gql from 'graphql-tag'
import { ProductSummary } from '../fragments/summary'

export const collectionByHandle = gql`
  ${ProductSummary}
  query collection(
    $handle: String!
    $first: Int
  ) {
    collection(
      handle: $handle
    ) {
      description
      descriptionHtml
      handle
      id
      image {
        altText
        height
        id
        url
        width
      }
      seo {
        title
        description
      }
      title
      updatedAt
      products (
        first: $first
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            ...ProductSummary
          }
        }
        filters {
          id
          label
          type
          values {
            count
            id
            input
            label
          }
        }
      }
    }
  }
`
