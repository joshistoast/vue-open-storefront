<script setup lang="ts">
// TODO: add quick video tutorial instead
</script>

<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-full max-w-6xl p-6">
      <h1 class="text-lg font-extrabold md:text-3xl xl:text-4xl">Getting Started</h1>
      <p class="my-3">3 steps and you're good to go :)</p>
      <div class="grid w-full grid-cols-1 gap-2 p-8 my-4 rounded-lg bg-gray-50">
        <div>1. Create a private shopify app on your store with full storefront api permissions</div>
        <div>2. Once created and installed, enter your <span class="font-bold">Storefront access token</span> and <span class="font-bold">Storefront api url</span> into <span class="font-bold">store.config.ts</span></div>
        <div>3. Remove this <span class="font-bold">GettingStarted</span> component from <span class="font-bold">app.vue</span> and the file tree</div>
      </div>
    </div>
  </div>
</template>
