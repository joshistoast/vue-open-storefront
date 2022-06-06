import gql from 'graphql-tag'
import { customer } from '../fragments/customer'

export const customerCreate = gql`
  ${customer}
  mutation customerCreate(
    $input: CustomerCreateInput!
  ) {
    customerCreate(
      input: $input
    ) {
      customer {
        ...customer
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
