import gql from 'graphql-tag'

export const CartFields = gql`
  fragment CartFields on Cart {
    attributes {
      key
      value
    }
    checkoutUrl
    createdAt
    discountCodes {
      applicable
      code
    }
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
    id
  }
`
