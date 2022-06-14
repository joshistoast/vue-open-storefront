import gql from 'graphql-tag'

export const menuItem = gql`
  fragment menuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
    items {
      id
      resourceId
      tags
      title
      type
      url
    }
  }
`
