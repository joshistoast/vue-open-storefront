<script setup lang="ts">
import { Article } from '@/types'

interface ArticleHeader {
  article: Article
}
const props = defineProps<ArticleHeader>()

</script>

<template>

  <div
    class="w-full my-6 prose max-w-none prose-base"
    v-html="article.contentHtml"
  >
  </div>

</template>
