import gql from 'graphql-tag'

export const Shop = gql`
  fragment Shop on Shop {
    name
    description
    moneyFormat
    primaryDomain {
      host
      sslEnabled
      url
    }
  }
`
