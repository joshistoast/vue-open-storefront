<script setup lang="ts">

const menuOpen = ref(false)

</script>

<template>
  <header class="flex flex-row">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <NavigationBrand />
        </div>
        <div class="hidden md:block">
          <NavigationMenu />
        </div>
        <NavigationActions />
      </div>
    </div>
  </header>
</template>
