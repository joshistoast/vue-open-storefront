import gql from 'graphql-tag'

// TODO: support sub menus

export const menuItem = gql`
  fragment menuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }
`
