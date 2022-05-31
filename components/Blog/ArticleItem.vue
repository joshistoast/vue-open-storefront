<script setup lang="ts">
import { Article } from '@/types'
import { formatDate } from '@/utilities/helpers'

interface BlogArticle {
  article: Article
}
const props = defineProps<BlogArticle>()

const publishedAt = formatDate(new Date(props.article.publishedAt))
const timeAgo = useTimeAgo(props.article.publishedAt)

</script>

<template>
  <div class="grid grid-cols-4 gap-8 p-6 rounded-xl bg-gray-50">
    <UIShopifyImage
      v-if="article.image"
      :image="article.image"
      class="order-4 object-cover object-center col-span-1 rounded-md aspect-square lg:order-1"
    />
    <div class="grid order-1 col-span-3 gap-4 place-content-start lg:order-2">
      <div
        v-if="article.tags.length"
        class="flex flex-row flex-wrap items-center space-x-2"
      >
        <span
          v-for="tag in article.tags"
          class="px-3 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <div>
        <h4 class="text-xl font-bold leading-relaxed group-hover:underline">{{ article.title }}</h4>
        <p class="text-gray-500">{{ publishedAt }} • {{ timeAgo }}</p>
      </div>
      <p
        v-if="article.excerpt"
        class="font-medium text-gray-500"
      >
        {{ article.excerpt }}
      </p>
      <NuxtLink
        :to="{ name: 'blogs-handle-slug', params: { slug: article.handle } }"
        class="font-semibold text-indigo-600 hover:underline"
      >
        Read Full Article
      </NuxtLink>
    </div>
  </div>
</template>
