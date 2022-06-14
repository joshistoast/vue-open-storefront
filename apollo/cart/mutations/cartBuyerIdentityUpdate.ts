import gql from 'graphql-tag'
import { Cart } from '../../cart/fragments/cart'

export const cartBuyerIdentityUpdate = gql`
  ${Cart}
  mutation cartBuyerIdentityUpdate(
    $buyerIdentity: CartBuyerIdentityInput!,
    $cartId: ID!
  ) {
    cartBuyerIdentityUpdate(
      buyerIdentity: $buyerIdentity,
      cartId: $cartId
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
