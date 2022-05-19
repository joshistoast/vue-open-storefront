import gql from 'graphql-tag'
import { productVariants } from '../fragments/variant'

export const getProduct = gql`
  ${productVariants}
  query product(
    $handle: String
  ) {
    product(
      handle: $handle
    ) {
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
      description
      descriptionHtml
      featuredImage {
        altText
        height
        id
        url
        width
      }
      handle
      id
      media (first: 250) {
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
      onlineStoreUrl
      options (first:20) {
        id
        name
        values
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
      productType
      publishedAt
      requiresSellingPlan
      seo {
        title
        description
      }
      tags
      title
      totalInventory
      updatedAt
      vendor
      ...productVariants
    }
  }
`
