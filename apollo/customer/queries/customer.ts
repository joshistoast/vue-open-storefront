import gql from 'graphql-tag'
import { customer } from '../fragments/customer'

export const getCustomer = gql`
  ${customer}
  query customer (
    $customerAccessToken: String!
  ) {
    customer (
      customerAccessToken: $customerAccessToken
    ) {
      ...customer
    }
  }
`
