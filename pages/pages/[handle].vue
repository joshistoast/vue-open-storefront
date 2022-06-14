<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { getPage } from '@/apollo/pages/queries/page'
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

useHead({
  title: computed(() => page.value?.seo?.title ?? page.value?.title),
  meta: [
    {name: 'description', content: page.value?.seo?.description ?? page.value?.bodySummary ?? null}
  ],
})

</script>

<template>
  <div>
    <template v-if="loading">
      Loading...
    </template>
    <template v-else-if="!isPageMissing && page?.body">
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
