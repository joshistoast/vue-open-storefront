import gql from 'graphql-tag'

export const collectionByHandle = gql`
  query collection($handle: String!) {
    collection(handle: $handle) {
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
    }
  }
`
