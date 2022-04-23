import gql from 'graphql-tag'

export const Localization = gql`
  fragment Localization on Localization {
    country {
      currency {
        isoCode
        name
        symbol
      }
      isoCode
      name
    }
    availableCountries {
      name
      currency {
        name
      }
      isoCode
    }
    availableLanguages {
      name
      isoCode
      endonymName
    }
  }
`
