<script setup lang="ts">
import { Collection } from '@/types'

interface CollectionFooter {
  collection: Collection
  loading: boolean
}
defineProps<CollectionFooter>()

const emit = defineEmits([
  'getMore'
])

</script>

<template>
  <div class="w-full py-4 text-center">
    <div v-if="collection?.products.pageInfo.hasNextPage">
      <UIButton
        @click="emit('getMore')"
        size="lg"
        icon="uil:redo"
        color="alternative"
        :disabled="loading"
      >
        {{ loading ? 'Loading...' : 'Load More Products' }}
      </UIButton>
    </div>
    <div v-else>
      <span class="text-lg font-medium text-gray-500">No more products</span>
    </div>
  </div>
</template>
