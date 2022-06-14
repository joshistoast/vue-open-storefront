import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient, provideApolloClient } from '@vue/apollo-composable'
import { useStoreConfig } from '@/store.config'

// TODO: use language from shop store
const lang = "en-US"

export default defineNuxtPlugin((nuxtApp) => {

  const config = useStoreConfig

  const httpLink = createHttpLink({
    credentials: "omit",
    uri: config.storefrontApiUrl,
    headers: {
      "X-Shopify-Storefront-Access-Token": config.storefrontApiToken,
      "Accept-Language": lang,
      "Content-Type": "application/json",
    },
  })

  const cache = new InMemoryCache()

  let apolloClient: ApolloClient<any>

  if (process.server) {
    apolloClient = new ApolloClient({
      ssrMode: true,
      link: httpLink,
      cache,
    })
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.data.apollo = apolloClient.extract();
    })
  } else {
    apolloClient = new ApolloClient({
      link: httpLink,
      cache,
    })
  }

  provideApolloClient(apolloClient)
  nuxtApp.provide("apollo", { DefaultApolloClient, apolloClient })
})
