import { useShop } from '@/stores/shop'

export const shopUrlToRelativePath = (url: string) => {
  const shopDomain = useShop().primaryDomain?.url ?? ''
  if (!shopDomain || !url.startsWith(shopDomain)) {
    return url
  } else {
    const shopDomainRegex = new RegExp(`^${shopDomain}`)
    const relativePath = url.replace(shopDomainRegex, '')
    return relativePath
  }
}

export const formatDate = (date: Date) => {
  const month = date.toLocaleString('default', { month: 'long' })
  return `${month} ${date.getDate()}, ${date.getFullYear()}`
}
