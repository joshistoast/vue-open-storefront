<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { collectionByHandle } from '~~/api/products/queries/collection'
import { Collection } from '~~/types'

interface CollectionResult {
  collection: Collection
}

const route = useRoute()
const handle = computed(() => route.params.handle)

// get collection
const { result, loading, error, refetch, fetchMore } = useQuery<CollectionResult>(collectionByHandle, {
  handle: handle.value,
})

const collection = useResult(result, null, (data) => data.collection)
const collectionMissing = computed(() => collection.value === null)

// set page meta title
route.meta.title = collection.value?.title || null

</script>

<template>
  <div>
    <p v-if="loading">Loading...</p>
    <p v-if="error">Error: {{ error.message }}</p>
    <p v-if="!collectionMissing">Collection: {{ collection.title }}</p>
    <p v-else>Collection Not Found</p>
  </div>
</template>
