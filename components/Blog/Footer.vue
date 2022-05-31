<script setup lang="ts">
import { Blog } from '@/types'

interface BlogFooter {
  blog: Blog
}
defineProps<BlogFooter>()

const emit = defineEmits([
  'getMore'
])

</script>

<template>
  <div class="w-full py-4 text-center">
    <div v-if="blog.articles.pageInfo.hasNextPage">
      <UIButton
        @click="emit('getMore')"
        size="lg"
        icon="uil:redo"
        color="alternative"
      >
        Load More Articles
      </UIButton>
    </div>
    <div v-else>
      <span class="text-lg font-medium text-gray-500">No more articles</span>
    </div>
  </div>
</template>
