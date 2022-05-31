<script setup lang="ts">
import { Blog } from '@/types'

interface BlogHeader {
  blog: Blog
}
defineProps<BlogHeader>()

const email = ref('')

// TODO: newsletter subscribe

</script>

<template>
  <div class="grid items-end grid-cols-1 pb-6 border-b border-gray-200 md:grid-cols-2 pt-14">
    <div>
      <h1 class="text-lg font-extrabold md:text-3xl xl:text-4xl">{{ blog.title }}</h1>
      <p
        v-if="blog.seo.description"
        class="mt-2 font-medium text-gray-500"
      >
        {{ blog.seo.description }}
      </p>
    </div>
    <div class="flex flex-row items-center mt-4 space-x-2 md:justify-end">
      <UIInput
        placeholder="Enter your email"
        v-model="email"
        type="email"
      />
      <UIButton>Subscribe</UIButton>
    </div>
  </div>
</template>
