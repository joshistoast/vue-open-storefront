<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { Article } from '@/types'
import { getArticle } from '@/apollo/blogs/queries/article'

interface ArticleResult {
  blog: {
    id: string,
    articleByHandle: Article
  }
}

const blogHandle = useRoute().params.handle
const articleHandle = useRoute().params.slug

const { result, loading, error } = useQuery<ArticleResult>(getArticle, {
  blogHandle,
  articleHandle
})
const articleExists = computed(() => !!result.value?.blog?.articleByHandle)
const article = computed(() => result.value?.blog?.articleByHandle)

useHead({
  title: computed(() => articleExists.value && (article.value.seo.title || article.value.title)),
  meta: [
    { name: 'description', content: computed(() => articleExists.value && (article.value.seo.description || article.value.excerpt)) },
    { name: 'og:description', content: computed(() => articleExists.value && (article.value.seo.description || article.value.excerpt)) }
  ]
})

</script>

<template>
  <div>
    <div
      v-if="articleExists && !loading"
      class="grid w-full gap-10"
    >
      <BlogArticleHeader :article="article" />
      <BlogArticleBody :article="article" />
      <BlogArticleFooter :article="article" />
    </div>
    <PageMissing v-else-if="!articleExists && !loading" />
  </div>
</template>
