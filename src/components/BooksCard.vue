<script setup>
defineProps({
  FavBook: String,
  BookName: String,
  author: String,
});
</script>

<template>
  <div class="flex flex-col gap-4 p-2 justify-center">
    <div class="flex flex-col relative w-full">
      <img :src="FavBook" alt="BookName" />
      <div class="absolute bottom-0 right-0 p-2">
        <font-awesome-icon
          icon="fa-regular fa-heart"
          class="text-2xl text-gray hover:text-red-500 transition-colors duration-300" />
      </div>
    </div>
    <div class="flex flex-col px-2 gap-1">
      <span class="font-noto-sans">{{ BookName }}</span>
      <span class="font-noto-sans text-green-gray text-[12px]">{{ author }}</span>
    </div>
  </div>
</template>
