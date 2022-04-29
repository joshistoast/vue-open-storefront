<script setup lang="ts">

const menuOpen = ref(false)

</script>

<template>
  <header class="sticky top-0 flex flex-row text-gray-900 bg-white py-2.5 border-b border-gray-100">
    <div class="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex-shrink-0">
        <NavigationBrand />
      </div>
      <div class="hidden md:block">
        <NavigationMenu />
      </div>
      <NavigationActions />
    </div>
  </header>
</template>
