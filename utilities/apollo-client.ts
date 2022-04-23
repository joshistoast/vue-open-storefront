import { useApolloClient } from '@vue/apollo-composable'

// export an apollo client instance
export const useClient = () => {
  const { resolveClient } = useApolloClient()
  return resolveClient()
}
