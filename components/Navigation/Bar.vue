<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 z-50 flex flex-row bg-white py-2.5 border-b border-gray-200">
    <div class="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center flex-shrink-0">
        <NavigationBrand />
        <NavigationMenu />
      </div>
      <NavigationActions />
    </div>
  </header>
</template>
