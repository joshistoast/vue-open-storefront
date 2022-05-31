<script setup lang="ts">
import { Blog } from '@/types'

interface BlogArticles {
  blog: Blog
}
defineProps<BlogArticles>()

</script>

<template>
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <template v-if="blog.articles.edges?.length">
      <BlogArticleItem
        v-for="(article, i) in blog.articles.edges"
        :article="article.node"
        :key="i"
      />
    </template>
    <template v-else>
      No posts yet
    </template>
  </div>
</template>
