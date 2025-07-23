<script setup>
import SwiperCard from '@/components/SwiperCard.vue';
</script>

<template>
  <section class="flex border border-black w-full justify-center p-8 bg-light-gray">
    <div class="border border-red-500">
      <span>在雨夜裡閱讀</span>
      <span>精選閱讀</span>
      <p>
        有些書適合晴天閱讀，有些則只在夜裡低語。這份書單，為孤獨、潮濕而需要字句取暖的你而準備。
      </p>
      <div class="cursor-pointer">查看書庫 &gt;</div>
    </div>
    <SwiperCard />
  </section>
</template>
