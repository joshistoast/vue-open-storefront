import gql from 'graphql-tag'
import { Cart } from '../fragments/cart'

export const cartLinesUpdate = gql`
  ${Cart}
  mutation cartLinesAdd(
    $cartId: ID!,
    $lines: [CartLineUpdateInput!]!
  ) {
    cartLinesUpdate(
      cartId: $cartId,
      lines: $lines
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
