<template>
  <div class="flex flex-col items-center text-center gap-2">
    <div class="bg-gradient-green-light w-full flex justify-center py-8">
      <img
        :src="image"
        :alt="title"
        class="mb-2 drop-shadow-md"
        style="width: auto; height: auto; max-width: 100%" />
    </div>
    <h3 class="w-full text-left text-[16px] font-semibold">{{ title }}</h3>
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
