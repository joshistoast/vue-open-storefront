<script setup lang="ts">
import { useShop } from '@/stores/shop'
import { useQuery } from '@vue/apollo-composable'
import { collectionByHandle } from '@/apollo/products/queries/collection'
import { Collection } from '@/types'

interface CollectionResult {
  collection: Collection
}

const route = useRoute()
const handle = computed(() => route.params.handle)
const loadingMore = ref(false)

// get collection
const { result, loading, error, refetch, fetchMore } = useQuery<CollectionResult>(collectionByHandle, {
  handle: handle.value,
  first: 32
})
const collection = computed(() => result.value?.collection)
const endCursor = computed(() => collection.value.products.pageInfo.endCursor)

const getMore = () => {
  loadingMore.value = true
  fetchMore({
    variables: {
      after: endCursor.value
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      loadingMore.value = false
      return {
        ...prev,
        collection: {
          ...prev.collection,
          products: {
            ...prev.collection.products,
            edges: [
              ...prev.collection.products.edges,
              ...fetchMoreResult.collection.products.edges
            ],
            pageInfo: fetchMoreResult.collection.products.pageInfo
          }
        }
      }
    }
  })
}

useHead({
  title: computed(() => collection.value?.seo?.title ?? collection.value?.title ?? null),
  meta: [
    {  name: 'description', content: collection.value?.seo?.description ?? collection.value?.description ?? null },
  ],
})
</script>

<template>
  <div>
    <template v-if="loading">
      loading...
    </template>
    <template v-else-if="!loading && !error && result.collection">
      <CollectionHeader :collection="result.collection" />

      <section class="pt-6 pb-24" aria-labelledby="collection-heading">
        <h2 id="products-heading" class="sr-only">Products</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <LazyProductCard
            v-for="product in result.collection.products.edges"
            :key="product.node.is"
            :product="product.node"
          />
        </div>
      </section>
      <CollectionFooter
        :loading="loadingMore"
        :collection="collection"
        @getMore="getMore"
      />
    </template>
    <template v-else>
      <PageMissing />
    </template>
  </div>
</template>
