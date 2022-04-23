import { useShop } from '~~/stores/shop'

export const shopUrlToRelativePath = (url: string) => {
  const shopDomain = useShop().primaryDomain?.url ?? ''

  // if shop domain is null or url does not start with shop domain, return url
  // else return relative url without shop domain
  if (!shopDomain || !url.startsWith(shopDomain)) {
    return url
  } else {
    const shopDomainRegex = new RegExp(`^${shopDomain}`)
    const relativePath = url.replace(shopDomainRegex, '')
    return relativePath
  }
}
