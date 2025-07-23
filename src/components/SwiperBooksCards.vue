<template>
  <div class="flex flex-col items-center text-center gap-1">
    <div class="bg-gradient-green-light p-8">
      <img
        :src="image"
        :alt="title"
        class="mb-2 drop-shadow-md"
        style="width: auto; height: auto; max-width: 100%" />
    </div>
    <h3 class="w-full text-left text-sm font-semibold">{{ title }}</h3>
    <p class="w-full text-left text-xs text-gray-600">{{ author }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  author: String,
});
</script>
