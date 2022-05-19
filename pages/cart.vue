<script setup lang="ts">

const count = ref(0)

useHead({
  title: computed(() => `Cart (${count.value})`),
})
</script>

<template>
  <div>
    Cart Page
    <button @click="count++" >Add</button>
  </div>
</template>
