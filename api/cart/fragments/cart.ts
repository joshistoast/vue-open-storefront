import gql from 'graphql-tag'
import { CartLines } from './cartLines'

export const Cart = gql`
  ${CartLines}

  fragment Cart on Cart {
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
    ...CartLines
  }
`
