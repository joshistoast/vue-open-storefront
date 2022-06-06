import gql from 'graphql-tag'

export const customerAccessTokenDelete = gql`
  mutation customerAccessTokenDelete(
    $customerAccessToken: String!
  ) {
    customerAccessTokenDelete(
      customerAccessToken: $customerAccessToken
    ) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
`
