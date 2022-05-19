import gql from 'graphql-tag'

export const ProductSummary = gql`
  fragment ProductSummary on Product {
    availableForSale
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    createdAt
    handle
    id
    media (first: 1) {
      edges {
        node {
          ...on Video {
            alt
            id
            sources {
              url
              format
            }
          }
          previewImage {
            height
            id
            url
            width
          }
        }
      }
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    title
    options(first:100) {
      id
      name
      values
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          availableForSale
          sku
        }
      }
    }
  }
`
