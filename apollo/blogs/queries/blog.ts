import gql from 'graphql-tag'
import { ArticleSummaryFragment } from '../fragments/articleSummary'

export const getBlog = gql`
  ${ArticleSummaryFragment}
  query blog (
    $handle: String!
    $first: Int
    $after: String
  ) {
    blog (
      handle: $handle
    ) {
      id
      title
      seo {
        title
        description
      }
      articles (
        first: $first
        after: $after
        sortKey: PUBLISHED_AT
        reverse: true
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            ...ArticleSummary
          }
        }
      }
    }
  }
`
