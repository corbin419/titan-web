<script setup>
import LOGO from '@/assets/img/LOGO.jpg';
</script>

<template>
  <nav class="h-[100px] bg-white shadow-md flex flex-row">
    <div class="border border-red-500 flex-2/12 flex justify-center items-center">
      <img :src="LOGO" class="w-[60px] h-[60px]" />
    </div>
    <ul class="flex flex-row gap-[16px] flex-8/12 justify-center items-center border border-amber-300">
      <li>全部書籍</li>
      <li>精選書單</li>
      <li>作家專區</li>
      <li>閱讀專欄</li>
      <li>最新動態</li>
      <li>關於大田</li>
      <li>讀者專區</li>
    </ul>
    <div class="flex-2/12 border border-amber-600"></div>
  </nav>
</template>
