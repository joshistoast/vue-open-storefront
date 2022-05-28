import { defineStore } from 'pinia'
import { useClient } from '@/utilities/apollo-client'
import { cartCreate, cartLinesAdd, cartLinesRemove } from '@/api/cart/mutations'
import { CartLineInput } from '@/types'
import { formatLocalePrice } from '@/utilities/money'

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
    },
    async removeFromCart (lines: string[]) {
      try {
        this.loading = true
        const { data } = await useClient().mutate({
          mutation: cartLinesRemove,
          variables: {
            cartId: this.cart.id,
            lineIds: lines,
          }
        })
        if (!data.cartLinesRemove) {
          throw 'cartLinesRemove: error'
        }
        this.cart = data.cartLinesRemove.cart
      } catch (e) {
        return e
      } finally {
        this.loading = false
      }
    },
    async updateCartItem (lines: CartLineInput[]) {}
  },
  getters: {
    lineItems: (state) => state.cart?.lines?.edges,
    lineItemsCount() {
      return this.lineItems.length
    },
    subtotalAmount: (state): string => {
      const amount = +state.cart.estimatedCost.subtotalAmount.amount
      const code = state.cart.estimatedCost.subtotalAmount.currencyCode
      return formatLocalePrice(+amount, "en-US", code)
    },
    totalDutyAmount: (state): string => {
      if (!state?.cart?.estimatedCost?.totalDutyAmount) {
        return null
      }
      const amount = +state?.cart?.estimatedCost?.totalDutyAmount?.amount
      const code = state?.cart?.estimatedCost?.totalDutyAmount?.currencyCode
      return formatLocalePrice(+amount, "en-US", code)
    },
    totalTaxAmount: (state): string => {
      if (!state?.cart?.estimatedCost?.totalTaxAmount) {
        return null
      }
      const amount = +state.cart.estimatedCost.totalTaxAmount.amount
      const code = state.cart.estimatedCost.totalTaxAmount.currencyCode
      return formatLocalePrice(+amount, "en-US", code)
    },
    totalAmount: (state): string => {
      const amount = +state.cart.estimatedCost.totalAmount.amount
      const code = state.cart.estimatedCost.totalAmount.currencyCode
      return formatLocalePrice(+amount, "en-US", code)
    },
  },
  persist: true,
})
