import gql from 'graphql-tag'
import { menuItem } from '../fragments/menuItem'

export const getMenu = gql`
  ${menuItem}
  query Menu {
    menu (handle: "main-menu") {
      handle
      id
      items {
        ...menuItem
      }
      itemsCount
      title
    }
  }
`
