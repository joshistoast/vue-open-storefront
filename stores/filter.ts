import { defineStore } from 'pinia'
import { Filter } from '@/types'

const productSortKeys = [
  {
    label: 'Best Selling',
    value: 'BEST_SELLING'
  },
  {
    label: 'Created At',
    value: 'CREATED_AT'
  },
  {
    label: 'ID',
    value: 'ID'
  },
  {
    label: 'Price',
    value: 'PRICE'
  },
  {
    label: 'Product Type',
    value: 'PRODUCT_TYPE'
  },
  {
    label: 'Relevance',
    value: 'RELEVANCE'
  },
  {
    label: 'Title',
    value: 'TITLE'
  },
  {
    label: 'Updated At',
    value: 'UPDATED_AT'
  },
  {
    label: 'Vendor',
    value: 'VENDOR'
  }
]

export const useFilters = defineStore('filter', {
  state: () => ({
    sortKeys: productSortKeys,
    sortKey: productSortKeys[0].value,
    reverse: false,
    query: '',
    filters: [] as Filter[]
  }),
  getters: {},
  actions: {}
})
