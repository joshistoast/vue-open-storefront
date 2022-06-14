import gql from 'graphql-tag'
import { Cart } from '../fragments/cart'

export const cartCreate = gql`
  ${Cart}
  mutation cartCreate {
    cartCreate {
      cart {
        ...Cart
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`
