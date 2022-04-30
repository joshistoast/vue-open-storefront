import { defineStore } from 'pinia'
import { getShop } from '~~/api/shop/queries/shop'
import { useClient } from '~~/utilities/apollo-client'

export const useShop = defineStore('shop', {
  state: () => ({
    title: '',
    description: '',
    loading: false,
    localization: {
      country: {
        currency: {
          isoCode: 'USD',
        }
      }
    },
    primaryDomain: null,
    moneyFormat: '$',
    menuOpen: false,
  }),
  actions: {
    async getShopGlobals () {
      try {
        this.loading = true
        const { data } = await useClient().query({
          query: getShop
        })

        if (!data.shop) {
          throw "No shop data"
        }
        this.title = data?.shop?.name ?? ''
        this.description = data?.shop?.description ?? ''
        this.moneyFormat = data?.shop?.moneyFormat ?? '$'
        this.localization = data?.shop?.localization ?? {}
        this.primaryDomain = data?.shop?.primaryDomain ?? null

      } catch (e) {
        return e
      } finally {
        this.loading = false
      }
    }
  },
  getters: {},
  persist: true,
})
