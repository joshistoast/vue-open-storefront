import { storeConfig } from './types'

// Enter your store config here
export const useStoreConfig: storeConfig = {
  // example: xczxc98x7cz7cx67zx9c8zx7c6cxzic1
  storefrontApiToken: process.env.STOREFRONT_API_ACCESS_TOKEN,

  // example: https://my-store-url.myshopify.com/api/2022-07/graphql.json
  storefrontApiUrl: process.env.STOREFRONT_API_ENDPOINT,
}
