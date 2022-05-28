export interface storeConfig {
  [key: string]: any
}
// Enums
export const enum ProductSortKeys {
  TITLE = 'TITLE',
  PRODUCT_TYPE = 'PRODUCT_TYPE',
  UPDATED_AT = 'UPDATED_AT',
  CREATED_AT = 'CREATED_AT',
  BEST_SELLING = 'BEST_SELLING',
  PRICE = 'PRICE',
  ID = 'ID',
  RELEVANCE = 'RELEVANCE',
}
export const enum CollectionSortKeys {
  TITLE = 'TITLE',
  UPDATED_AT = 'UPDATED_AT',
  ID = 'ID',
  RELEVANCE = 'RELEVANCE',
}
// Globals
export interface QueryRoot {
  products: ProductConnection
  collections: CollectionConnection
  cart: Cart
}
export interface MoneyV2 {
  amount: number
  currencyCode: string
}
export interface SEO {
  title: string
  description: string
}
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: string
  endCursor?: string
}
// Shop General
export interface Menu {
  handle: string
  id: string
  items: MenuItem[]
  itemsCount: number
  title: string
}
export interface MenuItem {
  id: string
  items: MenuItem[]
  resourceId: string
  tags: string[]
  title: string
  type: string
  url: string
}

// Images
export interface Image<Type extends string = 'image'> {
  url: Type extends 'image' ? string : undefined
  thumbnail: Type extends 'thumbnail' ? string : undefined
  id: string
  width: number
  height: number
  altText: string
}
export interface ImageEdge {
  cursor: string
  node: Image
}
export interface ImageConnection {
  edges: ImageEdge[]
  pageInfo: PageInfo
}
export interface VideoSource {
  __typename: string
  url: string
  format: string
  height: number
  width: number
  mimeType: string
}
// Media
export type PossibleMediaTypes =
  | 'ExternalVideo'
  | 'MediaImage'
  | 'Model3d'
  | 'Video'
export interface Media {
  __typename: string
  alt?: string
  mediaContentType: MediaContentType
  previewImage?: Image
}
export interface MediaImage extends Node, Media {
  alt?: string
  id: string
  image?: Image
  mediaContentType: MediaContentType
  previewImage?: Image
}
export interface ExternalVideo extends Node, Media {
  alt?: string
  embeddedUrl: string
  id: string
  mediaContentType: MediaContentType
  previewImage?: Image
}
export interface Video extends Node, Media {
  alt?: string
  id: string
  mediaContentType: MediaContentType
  previewImage?: Image
  sources: VideoSource[]
}
export interface Model3d extends Node, Media {
  alt?: string
  id: string
  mediaContentType: MediaContentType
  previewImage?: Image
  sources: Model3dSource[]
}
export interface Model3dSource {
  filesize: number
  format: string
  mimeType: string
  url: string
}

export const enum MediaContentType {
  EXTERNAL_VIDEO = 'EXTERNAL_VIDEO',
  IMAGE = 'IMAGE',
  MODEL_3D = 'MODEL_3D',
  VIDEO = 'VIDEO',
}
export interface MediaEdge {
  cursor: string
  node: Media
}
export interface MediaConnection {
  edges: MediaEdge[]
  pageInfo: PageInfo
}
export interface Metafield {
  createdAt: string
  description: string
  id: string
  key: string
  namespace: string
  type: string
  updatedAt: string
  value: string
}
// Variants
export interface SelectedOption {
  name: string
  value: string
}
export interface ProductVariant<ImageType extends string = 'image'> {
  availableForSale: boolean
  barcode: string
  compareAtPriceV2: MoneyV2
  id: string
  image: Image<ImageType>
  metafield: Metafield
  priceV2: MoneyV2
  product: Product
  quantityAvailable: number
  selectedOptions: SelectedOption[]
  title: string
}
export interface ProductVariantEdge {
  __typename: string
  cursor: string
  node: ProductVariant
}
export interface ProductVariantConnection {
  edges: ProductVariantEdge[]
  pageInfo?: PageInfo
}
// Products
export interface Product {
  images: ImageConnection
  media: MediaConnection
  variants: ProductVariantConnection
  availableForSale: boolean
  compareAtPriceRange: ProductPriceRange
  createdAt: string
  description: string
  descriptionHtml: string
  featuredImage: Image
  handle: string
  id: string
  metafield: Metafield
  options: ProductOption[]
  priceRange: ProductPriceRange
  publishedAt: string
  seo: SEO
  tags: string[]
  title: string
  totalInventory: number
  updatedAt: string
  [key: string]: any
}
export interface ProductEdge {
  cursor: string
  node: Product
}
export interface ProductConnection {
  edges: ProductEdge[]
  pageInfo: PageInfo
  filters: Filter[]
}
export interface ProductPriceRange {
  maxVariantPrice: MoneyV2
  minVariantPrice: MoneyV2
}
export interface ProductOption {
  id?: string
  name: string
  values: string[]
}
// Collections
export interface Collection {
  description: string
  descriptionHtml: string
  handle: string
  id: string
  image: Image
  products: ProductConnection
  seo: SEO
  title: string
  updatedAt: string
}
export interface CollectionEdge {
  cursor: string
  node: Collection
}
export interface CollectionConnection {
  edges: CollectionEdge[]
  pageInfo: PageInfo
}
// Cart
export interface Cart {
  lines: CartLineConnection
  checkoutUrl: string
  createdAt: string
  estimatedCost: CartEstimatedCost
  id: string
  note: string
  updatedAt: string
}
export interface CartLineConnection {
  edges: CartLineEdge[]
}
export interface CartLine {
  estimatedCost: CartLineEstimatedCost
  id: string
  merchandise: Merchandise
  quantity: Number
}
export interface CartLineEdge {
  cursor: string
  node: CartLine
}

export interface AttributeInput {
  key: string
  value: string
}
export interface CartLineInput {
  attributes?: AttributeInput[]
  merchandiseId: string
  quantity?: number
  sellingPlanId?: string
}
export type Merchandise = ProductVariant<'thumbnail'>
export interface CartEstimatedCost {
  subTotalAmount: MoneyV2
  totalAmount: MoneyV2
  totalDutyAmount: MoneyV2
  totalTaxAmount: MoneyV2
}

export interface CartLineEstimatedCost {
  subtotalAmount: MoneyV2
  totalAmount: MoneyV2
}

// Customer Types

export interface MailingAddressConnection {
  edges: MailingAddressEdge[]
  pageInfo: PageInfo
}
export interface MailingAddressEdge {
  cursor: string
  node: MailingAddress
}
export interface MailingAddress extends Node {
  address1: string
  address2: string
  city?: string
  company?: string
  country?: string
  countryCode?: string
  firstName?: string
  formatted: string[]
  formattedArea?: string
  id: string
  lastName?: string
  latitude?: number
  longitude?: number
  name?: string
  phone?: string
  province?: string
  provinceCode?: string
  zip?: string
}

export interface CustomerAccessTokenCreateInput {
  email: string
  password: string
}
export interface CustomerAccessTokenCreatePayload {
  customerAccessToken?: CustomerAccessToken
  customerUserErrors: CustomerUserError[]
  userErrors: UserError[]
}
export interface CustomerAccessTokenDeleteInput {
  accessToken: string
}
export interface CustomerAccessTokenDeletePaylod {
  deletedAccessToken?: string
  deletedCustomerAccessTokenId?: string
  userErrors: UserError[]
}
export interface CartBuyerIdentityInput {
  countryCode?: string
  customerAccessToken?: string
  email?: string
  phone?: string
}
export interface CartBuyerIdentityPayload {
  cart: Cart
  userErrors: UserError[]
}
export type DateTime = any
export interface CustomerAccessToken {
  accessToken: string
  expiresAt: DateTime
}
export interface CustomerUserError {
  code?: CustomerErrorCode
  field?: string[]
  message: string
}
export const enum CustomerErrorCode {
  BLANK = 'BLANK',
  INVALID = 'INVALID',
  TAKEN = 'TAKEN',
  TOO_LONG = 'TOO_LONG',
  TOO_SHORT = 'TOO_SHORT',
  UNIDENTIFIED_CUSTOMER = 'UNIDENTIFIED_CUSTOMER',
  CUSTOMER_DISABLED = 'CUSTOMER_DISABLED',
  PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  CONTAINS_HTML_TAGS = 'CONTAINS_HTML_TAGS',
  CONTAINS_URL = 'CONTAINS_URL',
  TOKEN_INVALID = 'TOKEN_INVALID',
  ALREADY_ENABLED = 'ALREADY_ENABLED',
  NOT_FOUND = 'NOT_FOUND',
  BAD_DOMAIN = 'BAD_DOMAIN',
  INVALID_MULTIPASS_REQUEST = 'INVALID_MULTIPASS_REQUEST',
}
export interface UserError extends DisplayableError {
  field?: string[]
  message: string
}
export interface DisplayableError {
  field?: string[]
  message: string
}

export interface Customer {
  acceptsMarketing: Boolean
  addresses: MailingAddressConnection
  createdAt: DateTime
  defaultAddress: MailingAddress
  displayName: string
  email?: string
  firstName?: string
  id: string
  lastName?: string
  phone?: string
  tags: string[]
  updatedAt: DateTime
  orders: OrderConnection
}

// Order types

export enum OrderCancelReason {
  CUSTOMER = 'CUSTOMER',
  DECLINED = 'DECLINED',
  FRAUD = 'FRAUD',
  INVENTORY = 'INVENTORY',
  OTHER = 'OTHER',
}
export enum OrderFinancialStatus {
  AUTHORIZED = 'AUTHORIZED',
  PAID = 'PAID',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
  PENDING = 'PENDING',
  REFUNDED = 'REFUNDED',
  VOIDED = 'VOIDED',
}
export enum OrderFulfillmentStatus {
  FULFILLED = 'FULFILLED',
  IN_PROGRESS = 'IN_PROGRESS',
  ON_HOLD = 'ON_HOLD',
  OPEN = 'OPEN',
  PARTIALLY_FULFILLED = 'PARTIALLY_FULFILLED',
  PENDING_FULFILLMENT = 'PENDING_FULFILLMENT',
  RESTOCKED = 'RESTOCKED',
  SCHEDULED = 'SCHEDULED',
  UNFULFILLED = 'UNFULFILLED',
}
export interface FulfillmentTrackingInfo {
  number: string
  url: string
}
export interface Fulfillment {
  trackingCompany?: string
  trackingInfo?: FulfillmentTrackingInfo
}

export interface Orders {
  orders: OrderConnection
}
export interface OrderConnection {
  pageInfo: PageInfo
  edges: OrderEdge[]
}
export interface OrderEdge {
  cursor: string
  node: Order
}
export interface OrderLineItem {
  currentQuantity: number
  discountedTotalPrice: MoneyV2
  originalTotalPrice: MoneyV2
  quantity: number
  title: string
  variant: ProductVariant
}
export interface OrderLineItemEdge {
  cursor: string
  node: OrderLineItem
}
export interface OrderLineItemConnection {
  pageInfo: PageInfo
  edges: OrderLineItemEdge[]
}
export interface Order {
  cancelReason: OrderCancelReason
  cancelledAt: DateTime
  currencyCode: string
  currentSubtotalPrice: MoneyV2
  currentTotalDuties: MoneyV2
  currentTotalPrice: MoneyV2
  currentTotalTax: MoneyV2
  customerLocale: string
  customerUrl: string
  edited: boolean
  email: string
  financialStatus: OrderFinancialStatus
  fulfillmentStatus: OrderFulfillmentStatus
  id: string
  name: string
  orderNumber: number
  phone: string
  processedAt: DateTime
  statusUrl: string
  successfulFulfillments: Fulfillment[]
  subtotalPriceV2: MoneyV2
  totalPriceV2: MoneyV2
  lineItems: OrderLineItemConnection
}

export interface Article {
  id: string
  handle: string
  title: string
  content: string
  contentHtml: string
  excerpt?: string
  excerptHTML?: string
  image?: Image
  tags?: string[]
  publishedAt: DateTime
}

export interface Page {
  body: string
  bodySummary: string
  createdAt: DateTime
  handle: string
  id: string
  seo: SEO
  title: string
  updatedAt: DateTime
}

export interface FilterValue {
  count: number
  id: string
  input: string
  label: string
}

export interface Filter {
  id: string
  label: string
  type: string
  values: FilterValue[]
}
