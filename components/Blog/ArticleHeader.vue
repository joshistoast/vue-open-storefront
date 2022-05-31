<script setup lang="ts">
import { Article } from '@/types'
import { formatDate } from '@/utilities/helpers'
import { useTimeAgo, useClipboard, usePermission } from '@vueuse/core'

interface ArticleHeader {
  article: Article
}
const props = defineProps<ArticleHeader>()
const publishedAt = formatDate(new Date(props.article.publishedAt))
const publishedTimeAgo = useTimeAgo(props.article.publishedAt)
const canUseClipboard = usePermission('clipboard-write')
const { isSupported, copy } = useClipboard()
const shareText = ref('Share Article')

const shareLink = () => {
 const link = `${window.location.origin}/blogs/${props.article.handle}/${props.article.handle}`
 if (canUseClipboard && isSupported) {
    copy(link)
   shareText.value = 'Link Copied!'
 }
}

</script>

<template>

  <div class="grid gap-10 pt-14">
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
      <h1 class="text-lg font-extrabold md:text-3xl xl:text-4xl">{{ article.title }}</h1>
      <p
        v-if="article.seo.description || article.excerpt"
        class="mt-2 font-medium text-gray-500"
      >
        {{ article.seo.description || article.excerpt }}
      </p>
    </div>
    <div v-if="article.image">
      <UIShopifyImage
        class="w-full overflow-hidden rounded-lg"
        :image="article.image"
      />
    </div>
    <div class="grid gap-8 md:grid-cols-2">
      <div class="flex flex-col items-start space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
        <div>
          <h4 class="font-bold text-indigo-600">Written By</h4>
          <p>{{ article.authorV2.name }}</p>
        </div>
        <div>
          <h4 class="font-bold text-indigo-600">Published On</h4>
          <p>{{ publishedAt }} • {{ publishedTimeAgo }}</p>
        </div>
      </div>
      <div class="md:self-center md:justify-self-end">
        <UIButton
          color="alternative"
          icon="uil:share"
          @click="shareLink"
          title="Copy Article Link"
        >
          {{ shareText }}
        </UIButton>
      </div>
    </div>
  </div>

</template>
