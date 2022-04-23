import gql from 'graphql-tag'

export const collectionByHandle = gql`
  query collection($handle: String!) {
    collection(handle: $handle) {
      id
      handle
      title
      description
    }
  }
`
