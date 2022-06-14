<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { Blog } from '@/types'
import { getBlog } from '@/apollo/blogs/queries/blog'

interface BlogResult {
  blog: Blog
}

const handle = useRoute().params.handle
const loadingMore = ref(false)

const { result, loading, error, fetchMore } = useQuery<BlogResult>(getBlog, {
  handle,
  first: 20
})

const blog = computed(() => result.value?.blog ?? null)
const blogExists = computed(() => !!blog.value)
const endCursor = computed(() => blogExists.value && blog.value.articles.pageInfo.endCursor)
const hasNextPage = computed(() => blogExists.value && blog.value.articles.pageInfo.hasNextPage)

const getMore = () => {
  // TODO
}

useHead({
  title: computed(() => blogExists.value && (blog.value.seo.title || blog.value.title)),
  meta: [
    { name: 'description', content: computed(() => blogExists.value && blog.value.seo.description) },
    { name: 'og:description', content: computed(() => blogExists.value && blog.value.seo.description) }
  ]
})

</script>

<template>
  <div>
    <div
      v-if="blogExists && !loading"
      class="grid gap-10"
    >
      <BlogHeader :blog="blog" />
      <BlogArticles :blog="blog" />
      <BlogFooter :blog="blog" @get-more="getMore" />
    </div>
    <PageMissing v-else-if="!blogExists && !loading" />
  </div>
</template>
