import gql from 'graphql-tag'
import { mailingAddress } from './address'

export const customer = gql`
  ${mailingAddress}
  fragment customer on Customer {
    acceptsMarketing
    createdAt
    defaultAddress {
      ...mailingAddress
    }
    displayName
    email
    firstName
    id
    lastName
    phone
    tags
    updatedAt
  }
`
