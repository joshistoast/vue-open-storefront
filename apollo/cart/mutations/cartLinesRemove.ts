import gql from 'graphql-tag'
import { Cart } from '../fragments/cart'

export const cartLinesRemove = gql`
  ${Cart}
  mutation cartLinesRemove(
    $cartId: ID!,
    $lineIds: [ID!]!
  ) {
    cartLinesRemove(
      cartId: $cartId,
      lineIds: $lineIds
    ) {
      cart {
        ...Cart
      }
      userErrors {
        field
        message
      }
    }
  }
`
