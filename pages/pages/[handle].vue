<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { getPage } from '@/api/pages/queries/page'
import { Page } from '@/types'

interface PageResult {
  page: Page
}

const handle = computed(() => useRoute().params.handle)

const { result, loading } = useQuery<PageResult>(getPage, {
  handle: handle.value
})
const page = computed(() => result.value?.page)
const isPageMissing = computed(() => !loading.value && page.value === null)

useRoute().meta.title = computed(() => {
  return !isPageMissing.value ? page.value?.title : null
})
useHead({
  meta: [{name: 'description', content: computed(() => {
    return !isPageMissing.value && page.value?.seo ? page.value.seo.description : null
  })}]
})

</script>

<template>
  <div>
    <template v-if="loading">
      Loading...
    </template>
    <template v-else-if="!isPageMissing">
      <div
        class="prose-sm prose sm:prose-base"
        v-html="page.body"
      />
    </template>
    <template v-else-if="isPageMissing">
      <PageMissing />
    </template>
  </div>
</template>
