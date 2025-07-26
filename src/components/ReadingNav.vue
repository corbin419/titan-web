<script setup>
import {ref} from 'vue';

const progress = ref(0);
</script>

<template>
  <nav class="flex justify-between items-center px-8 bg-white h-[100px]">
    <router-link to="/">
      <div class="">
        <font-awesome-icon icon="fa-solid fa-house" class="hover:text-light-black" />
      </div>
    </router-link>
    <div class="font-noto text-2xl font-bold text-light-black">
      當我開始遠行之後，學會了不等風來，也能自己啟程
    </div>
    <div class="flex gap-6">
      <div><font-awesome-icon icon="magnifying-glass" class="hover:text-gray" /></div>
      <div><font-awesome-icon icon="fa-regular fa-bookmark" class="hover:text-gray" /></div>
      <div><font-awesome-icon icon="fa-solid fa-computer" class="hover:text-gray" /></div>
      <div><font-awesome-icon icon="fa-solid fa-ellipsis" class="hover:text-gray" /></div>
    </div>
  </nav>
</template>
