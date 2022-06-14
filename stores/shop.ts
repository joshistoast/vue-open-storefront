import { defineStore } from 'pinia'
import { getShop } from '@/apollo/shop/queries/shop'
import { useClient } from '@/utilities/apollo-client'
import {
  Shop,
  Localization,
  CurrencyCode,
  CountryCode,
  UnitSystem,
  LanguageCode,
} from '@/types'

type ShopMut = {
  shop: Shop
  localization: Localization
}

interface ShopState extends Omit<Shop, 'name'> {
  title: string
  localization: Localization
  loading: boolean
  menuOpen: boolean
}

type ShopActions = {
  getShopGlobals(): Promise<void>
}

export const useShop = defineStore<'shop', ShopState, {}, ShopActions>('shop', {
  state: () => ({
    id: '',
    title: '',
    moneyFormat: '$',
    paymentSettings: {
      acceptedCardBrands: [],
      cardVaultUrl: '',
      countryCode: CountryCode.US,
      currencyCode: CurrencyCode.USD,
      enabledPresentmentCurrencies: [],
      supportedDigitalWallets: [],
    },
    primaryDomain: {
      host: '',
      sslEnabled: false,
      url: '',
    },
    shipsToCountries: [],
    localization: {
      availableContries: [],
      availableLanguages: [],
      country: {
        availableLanguages: [],
        currency: {
          isoCode: CurrencyCode.USD,
          name: '',
          symbol: '$',
        },
        isoCode: CountryCode.US,
        name: '',
        unitSystem: UnitSystem.METRIC_SYSTEM,
      },
      language: {
        endonymName: '',
        isoCode: LanguageCode.EN,
        name: '',
      },
    },
    loading: false,
    menuOpen: false,
  }),
  actions: {
    async getShopGlobals() {
      try {
        this.loading = true
        const { data } = await useClient().query<ShopMut>({
          query: getShop,
        })

        if (!data.shop || !data.localization) {
          throw 'No shop data'
        }
        const { name, ...shop } = data.shop
        const localization = data.localization
        this.localization = localization
        for (const [key, value] of Object.entries(shop)) {
          this[key] = value
        }
        this.title = name
      } catch (e) {
        return e
      } finally {
        this.loading = false
      }
    },
  },
  getters: {},
  persist: true,
})
