<script setup>
import SideBtn from '@/components/SideBtn.vue';

const FilterOptions = [
  '全部書籍',
  '勵志成長',
  '圖像創作',
  '文學小說',
  '生活風格',
  '藝術設計',
  '語言學習',
  '親子教養',
  '人文社科',
  '商業理財',
  '旅行',
];

const BuyOptions = ['博客來網路書店', '晨星網路書店'];
</script>

<template>
  <div class="w-full h-full flex flex-col items-center px-7 py-9 gap-2 shadow-[4px_0_12px_-2px_rgba(0,0,0,0.1)]">
    <!-- 搜尋欄 -->
    <div class="relative">
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        class="bg-gradient-green-light rounded-[4px] w-full h-[60px] pl-10 pr-4 font-noto-sans focus:outline-none"
        placeholder="搜尋" />
    </div>

    <!-- 通路 -->
    <span class="w-[220px] my-3 px-3 font-noto-sans text-[12px] text-start text-light-black"
      >網路通路</span
    >
    <div v-for="(items, index) in BuyOptions" :key="index">
      <SideBtn :btn-name="items" />
    </div>
    <div class="w-[80%] border border-b-1 border-light-gray"></div>
    <!-- 分類 -->
    <span class="w-[220px] my-3 px-3 font-noto-sans text-[12px] text-start text-light-black"
      >全部分類</span
    >
<div v-for="(items, index) in FilterOptions" :key="index">
  <SideBtn
    :btn-name="items"
    :highlight="items === '全部書籍'" />
</div>
  </div>
</template>
