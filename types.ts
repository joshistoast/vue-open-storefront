export interface storeConfig {
  storefrontApiToken: string
  storefrontApiUrl: string
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

export enum AcceptedCardBrand {
  'AMERICAN_EXPRESS' = 'AMERICAN_EXPRESS',
  'DINERS_CLUB' = 'DINERS_CLUB',
  'DISCOVER' = 'DISCOVER',
  'JCB' = 'JCB',
  'MASTERCARD' = 'MASTERCARD',
  'VISA' = 'VISA',
}

export enum DigitalWallet {
  ANDROID_PAY = 'ANDROID_PAY',
  APPLE_PAY = 'APPLE_PAY',
  GOOGLE_PLAY = 'GOOGLE_PLAY',
  SHOPIFY_PAY = 'SHOPIFY_PAY',
}

export enum CountryCode {
  AC = 'AC',
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AN = 'AN',
  AO = 'AO',
  AR = 'AR',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  ED = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IO',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MO = 'MO',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PS = 'PS',
  PT = 'PT',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TA = 'TA',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  XK = 'XK',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW',
  ZZ = 'ZZ',
}

export enum CurrencyCode {
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ANG = 'ANG',
  AOA = 'AOA',
  ARS = 'ARS',
  AUD = 'AUD',
  AWG = 'AWG',
  AZN = 'AZN',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BSD = 'BSD',
  BTN = 'BTN',
  BWP = 'BWP',
  BYN = 'BYN',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  EUR = 'EUR',
  FJD = 'FJD',
  FKP = 'FKP',
  GBP = 'GBP',
  GEL = 'GEL',
  GHS = 'GHS',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GTQ = 'GTQ',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JEP = 'JEP',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KID = 'KID',
  KMF = 'KMF',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LTL = 'LTL',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRU = 'MRU',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SLL = 'SLL',
  SOS = 'SOS',
  SRD = 'SRD',
  SSP = 'SSP',
  STN = 'STN',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TJS = 'TJS',
  TMT = 'TMT',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  USD = 'USD',
  UYU = 'UYU',
  UZS = 'UZS',
  VED = 'VED',
  VES = 'VES',
  VND = 'VND',
  VUV = 'VUV',
  WST = 'WST',
  XAF = 'XAF',
  XCD = 'XCD',
  XOF = 'XOF',
  XPF = 'XPF',
  XXX = 'XXX',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMW = 'ZMW',
}

export enum LanguageCode {
  AF = 'AF',
  AK = 'AK',
  AM = 'AM',
  AR = 'AR',
  AS = 'AS',
  AZ = 'AZ',
  BE = 'BE',
  BG = 'BG',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BR = 'BR',
  BS = 'BS',
  CA = 'CA',
  CE = 'CE',
  CS = 'CS',
  CU = 'CU',
  CY = 'CY',
  DA = 'DA',
  DE = 'DE',
  DZ = 'DZ',
  EE = 'EE',
  EL = 'EL',
  EN = 'EN',
  EO = 'EO',
  ES = 'ES',
  ET = 'ET',
  EU = 'EU',
  FA = 'FA',
  FF = 'FF',
  FI = 'FI',
  FO = 'FO',
  FR = 'FR',
  FY = 'FY',
  GA = 'GA',
  GD = 'GD',
  GL = 'GL',
  GU = 'GU',
  GV = 'GV',
  HA = 'HA',
  HE = 'HE',
  HI = 'HI',
  HR = 'HR',
  HU = 'HU',
  HY = 'HY',
  IA = 'IA',
  ID = 'ID',
  IG = 'IG',
  II = 'II',
  IS = 'IS',
  IT = 'IT',
  JA = 'JA',
  JV = 'JV',
  KA = 'KA',
  KI = 'KI',
  KK = 'KK',
  KL = 'KL',
  KM = 'KM',
  KN = 'KN',
  KO = 'KO',
  KS = 'KS',
  KU = 'KU',
  KW = 'KW',
  KY = 'KY',
  LB = 'LB',
  LG = 'LG',
  LN = 'LN',
  LO = 'LO',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  MG = 'MG',
  MI = 'MI',
  MK = 'MK',
  ML = 'ML',
  MN = 'MN',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MY = 'MY',
  NB = 'NB',
  ND = 'ND',
  NE = 'NE',
  NL = 'NL',
  NN = 'NN',
  OM = 'OM',
  OR = 'OR',
  OS = 'OS',
  PA = 'PA',
  PL = 'PL',
  PS = 'PS',
  PT = 'PT',
  PT_BR = 'PT_BR',
  PT_PT = 'PT_PT',
  QU = 'QU',
  RM = 'RM',
  RN = 'RN',
  RO = 'RO',
  RU = 'RU',
  RW = 'RW',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SI = 'SI',
  SK = 'SK',
  SL = 'SL',
  SN = 'SN',
  SO = 'SO',
  SQ = 'SQ',
  SR = 'SR',
  SU = 'SU',
  SV = 'SV',
  SW = 'SW',
  TA = 'TA',
  TE = 'TE',
  TG = 'TG',
  TH = 'TH',
  TI = 'TI',
  TK = 'TK',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  UG = 'UG',
  UK = 'UK',
  UR = 'UR',
  UZ = 'UZ',
  VI = 'VI',
  VO = 'VO',
  WO = 'WO',
  XH = 'XH',
  YI = 'YI',
  YO = 'YO',
  ZH = 'ZH',
  ZH_CN = 'ZH_CN',
  ZH_TW = 'ZH_TW',
  ZU = 'ZU',
}

export const enum CollectionSortKeys {
  TITLE = 'TITLE',
  UPDATED_AT = 'UPDATED_AT',
  ID = 'ID',
  RELEVANCE = 'RELEVANCE',
}
export const enum ProductCollectionSortKeys {
  BEST_SELLING = 'BEST_SELLING',
  COLLECTION_DEFAULT = 'COLLECTION_DEFAULT',
  CREATED = 'CREATED',
  ID = 'ID',
  MANUAL = 'MANUAL',
  PRICE = 'PRICE',
  RELEVANCE = 'RELEVANCE',
  TITLE = 'TITLE',
}

export enum UnitSystem {
  IMPERIAL_SYSTEM = 'IMPERIAL_SYSTEM',
  METRIC_SYSTEM = 'METRIC_SYSTEM',
}

export enum DeliveryMethodType {
  LOCAL = 'LOCAL',
  NONE = 'NONE',
  PICKUP_POINT = 'PICKUP_POINT',
  PICK_UP = 'PICK_UP',
  RETAIL = 'RETAIL',
  SHIPPING = 'SHIPPING',
}
// Globals
export interface Language {
  endonymName: string
  isoCode: keyof typeof LanguageCode
  name: string
}

export interface Currency {
  isoCode: keyof typeof CurrencyCode
  name: string
  symbol: string
}
export interface Country {
  availableLanguages: Language[]
  currency: Currency
  isoCode: keyof typeof CountryCode
  name: string
  unitSystem: keyof typeof UnitSystem
}
export interface QueryRoot {
  products: ProductConnection
  collections: CollectionConnection
  cart: Cart
}

export interface Connection<T> {
  edges: T[]
  pageInfo: PageInfo
}
export interface MoneyV2 {
  amount: number
  currencyCode: keyof typeof CurrencyCode
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

export interface CartDiscountCode {
  applicable: boolean
  code: string
}
export interface CartDeliveryOption {
  code?: string
  deliveryMethodType: keyof typeof DeliveryMethodType
  description?: string
  estimatedCost: MoneyV2
  title?: string
}

export interface CartDeliveryGroup {
  deliveryAddress: MailingAddress
  deliveryOptions: Array<CartDeliveryOption>
  id: string
}
export interface Cart {
  attributes: Array<Attribute>
  buyerIdentity: CartBuyerIdentity
  lines: Connection<CartLine>
  checkoutUrl: string
  createdAt: string
  estimatedCost: CartEstimatedCost
  id: string
  note?: string
  updatedAt: string
  discountCodes: Array<CartDiscountCode>
  deliveryGroups: Connection<CartDeliveryGroup>
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

export interface Attribute {
  key: string
  value?: string
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
export interface CartLineUpdateInput {
  attributes?: AttributeInput[]
  id: string
  merchandiseId?: string
  quantity?: number
  sellingPlanId?: string
}
export type Merchandise = ProductVariant<'thumbnail'>
export interface CartEstimatedCost {
  subtotalAmount: MoneyV2
  totalAmount: MoneyV2
  totalDutyAmount: MoneyV2
  totalTaxAmount: MoneyV2
}

export interface CartLineEstimatedCost {
  subtotalAmount: MoneyV2
  totalAmount: MoneyV2
}

// Blog
export interface ArticleAuthor {
  bio: string
  email: string
  firstName: string
  lastName: string
  name: string
}
export interface Blog {
  authors: ArticleAuthor[]
  handle: string
  id: string
  metafield: Metafield
  onlineStoreUrl: string
  seo: SEO
  title: string
  articles: ArticleConnection
}
export interface ArticleConnection {
  edges: ArticleEdge[]
  pageInfo: PageInfo
}
export interface ArticleEdge {
  cursor: string
  node: Article
}
export interface Article {
  authorV2?: ArticleAuthor
  blog: Blog
  content: string
  contentHtml: string
  excerpt?: string
  excerptHtml?: string
  handle: string
  id: string
  image?: Image
  metafield?: Metafield
  onlineStoreUrl?: string
  publishedAt: DateTime
  seo?: SEO
  tags: string[]
  title: string
  comments: CommentConnection
}
export interface CommentConnection {
  edges: CommentEdge[]
  pageInfo: PageInfo
}
export interface CommentEdge {
  cursor: string
  node: Comment
}
export interface Comment {
  author: CommentAuthor
  content: string
  contentHtml: string
  id: string
}
export interface CommentAuthor {
  email: string
  name: string
}

// Customer
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

export interface CustomerCreateInput {
  acceptsMarketing?: boolean
  email: string
  firstName?: string
  lastName?: string
  password: string
  phone?: string
}
export interface CustomerCreatePayload {
  customer: Customer
  customerUserErrors: CustomerUserError[]
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
export interface CustomerAccessTokenDeletePayload {
  deletedAccessToken?: string
  deletedCustomerAccessTokenId?: string
  userErrors: UserError[]
}
export interface CartBuyerIdentityInput {
  countryCode?: keyof typeof CountryCode
  customerAccessToken?: string
  email?: string
  phone?: string
}

export interface CartBuyerIdentity {
  countryCode?: keyof typeof CountryCode
  customer?: Customer
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

export interface Domain {
  host: string
  sslEnabled: boolean
  url: string
}

export type ShopPolicy<Type extends string = 'unique'> = Type extends 'unique'
  ? {
      body: string
      handle: string
      id: string
      title: string
      url: string
    }
  : {
      body: string
      handle: string
      id?: string
      title: string
      url: string
    }

export type ShopPolicyWithDefault = ShopPolicy<'default'>
export interface PaymentSettings {
  acceptedCardBrands: Array<keyof typeof AcceptedCardBrand>
  cardVaultUrl: string
  countryCode: keyof typeof CountryCode
  currencyCode: keyof typeof CurrencyCode
  enabledPresentmentCurrencies: Array<keyof typeof CurrencyCode>
  shopifyPaymentsAccountId?: string
  supportedDigitalWallets: Array<keyof typeof DigitalWallet>
}

export interface Localization {
  availableContries: Country[]
  availableLanguages: Language[]
  country: Country
  language: Language
}
export interface Shop {
  description?: string
  id: string
  metafield?: Metafield
  moneyFormat: string
  name: string
  paymentSettings: PaymentSettings
  primaryDomain: Domain
  privacyPolicy?: ShopPolicy
  refundPolicy?: ShopPolicy
  shippingPolicy?: ShopPolicy
  shipsToCountries: Array<keyof typeof CountryCode>
  subscriptionPolicy?: ShopPolicyWithDefault
  termsOfService?: ShopPolicy
}
