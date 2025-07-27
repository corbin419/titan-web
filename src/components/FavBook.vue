<script setup>
defineProps({
  FavBook: String,
  title: String,
  author: String,
  content: String,
});
</script>

<template>
  <div
    class="flex flex-col sm:flex-row max-w-[600px] p-4 rounded-[4px] shadow shadow-light-black sm:shadow-none sm:hover:shadow">
    <div class="mx-auto sm:my-auto">
      <img :src="FavBook" alt="BookName" />
    </div>
    <div class="flex flex-col w-full p-2 gap-2">
      <div class="flex flex-col p-2 gap-1">
        <span class="font-noto text-light-black text-2xl">{{ title }}</span>
        <span class="font-noto-sans text-light-black">{{ author }}</span>
        <span class="line-clamp-3 leading-relaxed font-noto-sans text-light-black">
          {{ content }}
        </span>
      </div>

      <div class="flex px-2">
        <div class="flex w-full gap-1 sm:gap-2">
          <button
            class="group border border-light-black rounded-full px-4 py-1 font-noto-sans text-light-black hover:bg-gradient-green-light flex items-center w-fit mx-auto sm:mx-0">
            博客來
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="text-light-black text-sm ml-1 transition-transform duration-300 group-hover:scale-110" />
          </button>
          <button
            class="group border border-light-black rounded-full px-4 py-1 font-noto-sans text-light-black hover:bg-gradient-green-light flex items-center w-fit mx-auto sm:mx-0">
            晨星書店
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="text-light-black text-sm ml-1 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
        <button>
          <font-awesome-icon :icon="['fas', 'heart']" class="text-heart cursor-pointer" />
        </button>
      </div>
    </div>
  </div>
</template>
