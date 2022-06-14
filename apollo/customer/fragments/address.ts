import gql from 'graphql-tag'

export const mailingAddress = gql`
  fragment mailingAddress on MailingAddress {
    address1
    address2
    city
    company
    country
    countryCodeV2
    firstName
    formattedArea
    id
    lastName
    latitude
    longitude
    name
    phone
    province
    provinceCode
    zip
  }
`
