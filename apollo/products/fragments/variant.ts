import gql from 'graphql-tag'

export const productVariants = gql`
  fragment productVariants on Product {
    variants(first: 100) {
      edges {
        cursor
        node {
          availableForSale
          id
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          image {
            altText
            height
            id
            url
            width
          }
          quantityAvailable
          selectedOptions {
            name
            value
          }
          sku
          title
          product {
            id
          }
        }
      }
    }
  }
`
