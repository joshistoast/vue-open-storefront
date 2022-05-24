import { defineStore } from 'pinia'
import { useClient } from '@/utilities/apollo-client'
import { cartCreate, cartLinesAdd } from '@/api/cart/mutations'
import { CartLineInput } from '@/types'

export const useCart = defineStore('cart', {
  state: () => ({
    cart: {
      checkoutUrl: null,
      estimatedCost: {
        subtotalAmount: {
          amount: "",
          currencyCode: "USD",
        },
        totalTaxAmount: {
          amount: "",
          currencyCode: "USD",
        },
        totalDutyAmount: {
          amount: "",
          currencyCode: "USD",
        },
        totalAmount: {
          amount: "",
          currencyCode: "USD",
        },
      },
      id: null,
      lines: {
        edges: [],
      },
      discountCodes: [],
    },
    loading: false,
  }),
  actions: {
    async cartCreate () {
      try {
        this.loading = true
        const { data } = await useClient().mutate({
          mutation: cartCreate
        })
        if (!data.cartCreate.cart.id) {
          throw "cartCreate: error"
        }
        this.cart.id = data?.cartCreate.cart?.id ?? null
        this.cart.checkoutUrl = data?.cartCreate.cart?.checkoutUrl ?? null
      } catch (e) {
        return e
      } finally {
        this.loading = false
      }
    },
    async getCart () {

      if (!this.cart.id) {
        await this.cartCreate()
      }

      try {
        this.loading = true
      } catch (e) {
        return e
      } finally {
        this.loading = false
      }
    },
    async addToCart (lines: CartLineInput[]) {
      try {
        this.loading = true
        if (!this.cart.id) {
          await this.cartCreate()
        }
        const { data } = await useClient().mutate({
          mutation: cartLinesAdd,
          variables: {
            cartId: this.cart.id,
            lines,
          }
        })
        if (!data.cartLinesAdd) {
          throw 'cartLinesAdd: error'
        }
        this.cart = data?.cartLinesAdd?.cart
      } catch (e) {
        return e
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    lineItems: (state) => {
      return state.cart?.lines?.edges
    },
    lineItemsCount() {
      return this.lineItems.length
    }
  },
  persist: true,
})
