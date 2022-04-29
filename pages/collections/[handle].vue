<script setup lang="ts">
import { useShop } from '@/stores/shop'
import { useQuery, useResult } from '@vue/apollo-composable'
import { collectionByHandle } from '@/api/products/queries/collection'
import { Collection } from '@/types'

interface CollectionResult {
  collection: Collection
}

const route = useRoute()
const shop = useShop()
const handle = computed(() => route.params.handle)

// get collection
const { result, loading, error, refetch, fetchMore } = useQuery<CollectionResult>(collectionByHandle, {
  handle: handle.value,
})

const collection = useResult(result, null, (data) => data.collection)
const collectionMissing = computed(() => !loading.value && collection.value === null)

useRoute().meta.title = computed(() => {
  if (!collectionMissing.value) {
    return collection.value?.title
  } else {
    return null
  }
})

</script>

<template>
  <div>
    <template v-if="loading">
      loading...
    </template>
    <template v-else-if="!loading && !error && !collectionMissing">
      <CollectionHeader :collection="result.collection" />
      <CollectionFilters />
    </template>
    <template v-else-if="collectionMissing && !loading">
      <PageMissing />
    </template>
  </div>
</template>
