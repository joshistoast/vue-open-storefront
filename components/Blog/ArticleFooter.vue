<script setup lang="ts">
import { Article } from '@/types'

interface ArticleHeader {
  article: Article
}
const props = defineProps<ArticleHeader>()

</script>

<template>

  <div class="w-full py-8 text-center rounded-lg bg-gray-50">
    <UIButton
      size="lg"
      icon="uil:arrow-left"
      :to="{ name: 'blogs-handle', params: { handle: props.article.blog.handle } }"
    >
      Go Back
    </UIButton>
  </div>

</template>
