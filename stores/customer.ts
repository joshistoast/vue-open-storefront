import { defineStore } from 'pinia'
import { useClient } from '@/utilities/apollo-client'
import {
  Customer,
  CustomerAccessTokenCreateInput,
  CustomerAccessTokenDeleteInput,
  CustomerAccessToken,
  CustomerUserError,
  CustomerAccessTokenCreatePayload,
  CustomerCreateInput,
  CustomerCreatePayload,
} from '@/types'
import {
  customerAccessTokenCreate,
  customerAccessTokenDelete,
  customerCreate
} from '@/api/customer/mutations'
import {
  getCustomer
} from '@/api/customer/queries'

type CustomerMutTokenCreate = {
  customerAccessTokenCreate: CustomerAccessTokenCreatePayload
}

type CustomerMutTokenDelete = {}

type CustomerGet = {
  customer: Customer
}

export const useCustomer = defineStore(
  'customer',
  {
    state: () => ({
      customer: null as Customer | null,
      customerAccessToken: null as CustomerAccessToken | null,
      loading: false as boolean,
      customerUserErrors: null as CustomerUserError[],
    }),
    actions: {
      async customerCreate (input: CustomerCreateInput) {
        if (input) {
          const { data } = await useClient().mutate({
            mutation: customerCreate,
            variables: { input }
          })
          if (data.customerCreate.customer) {
            useRouter().push({ name: 'account-login', params: { email: input.email } })
          }
          if (data.customerCreate.customerUserErrors) {
            this.customerUserErrors = data.customerCreate.customerUserErrors
          }
        }
      },
      async login (email: string, password: string) {
        try {
          this.loading = true
          if (!this.customerAccessToken) {
            await this.customerAccessTokenCreate({ email, password })
          }
          if (!this.customer) {
            await this.getCustomer(this.customerAccessToken.accessToken)
          }
        } catch (e) {
          return e
        } finally {
          this.loading = false
        }
      },
      async logout () {},
      async customerAccessTokenCreate (input: CustomerAccessTokenCreateInput) {
        try {
          const { data } = await useClient().mutate<CustomerMutTokenCreate>({
            mutation: customerAccessTokenCreate,
            variables: {
              input,
            }
          })

          if (data.customerAccessTokenCreate.customerAccessToken) {
            this.customerAccessToken = data.customerAccessTokenCreate.customerAccessToken
          }
          if (data.customerAccessTokenCreate.customerUserErrors) {
            this.customerUserErrors = data.customerAccessTokenCreate.customerUserErrors
          }
        } catch (e) {
          return e
        }
      },
      async getCustomer (accessToken: string) {
        if (accessToken) {
          const { data } = await useClient().query({
            query: getCustomer,
            variables: { customerAccessToken: accessToken }
          })
          if (data.customer) {
            this.customer = data.customer
          } else {
            this.customer = null
            throw new Error('No customer found')
          }
        }
      },
      async customerAccessTokenDelete () {},
    },
    persist: {
      paths: ['customer', 'customerAccessToken'],
    },
    getters: {
      isSignedIn: (state) => !!state.customerAccessToken,
    },
  }
)
