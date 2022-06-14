import gql from 'graphql-tag'
import { Localization } from '../fragments/localization'
import { Shop } from '../fragments/shop'

export const getShop = gql`
  ${Localization}
  ${Shop}
  query shop {
    shop {
      ...Shop
    }
    localization {
      ...Localization
    }
  }
`
