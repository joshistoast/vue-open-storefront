import gql from 'graphql-tag'
import { Cart } from '../fragments/cart'

export const cartLinesAdd = gql`
  ${Cart}
  mutation cartLinesAdd(
    $cartId: ID!,
    $lines: [CartLineInput!]!
  ) {
    cartLinesAdd(
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
