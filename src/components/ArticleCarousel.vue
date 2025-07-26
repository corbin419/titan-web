<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import ArticleCard from './ArticleCard.vue';

import ArticleCard01 from '@/assets/img/ArticleCard/ArticleCard01.jpg';
import ArticleCard02 from '@/assets/img/ArticleCard/ArticleCard02.jpg';
import ArticleCard03 from '@/assets/img/ArticleCard/ArticleCard03.jpg';

const scrollRef = ref(null);
let intervalId = null;

// 根據螢幕寬度設定卡片寬度（手機為視窗寬度，桌機為固定寬度）
function getCardWidth() {
  return window.innerWidth < 640 ? window.innerWidth : 336; // 320px 卡片 + 16px gap
}

// 自動輪播
function scrollNext() {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({left: getCardWidth(), behavior: 'smooth'});
}
function scrollPrev() {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({left: -getCardWidth(), behavior: 'smooth'});
}

onMounted(() => {
  intervalId = setInterval(scrollNext, 5000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const CardInfo = [
  {
    id: 1,
    title: '《作家玩樂誌》布莉安娜．魏斯禮心靈探索之旅',
    img: ArticleCard01,
    content:
      '本次邀請布莉安娜．魏斯禮，分享她對旅遊的見解與心靈轉化之路。對她而言，旅行不只是抵達目的地，更是一種重新認識自己的過程。她坦言，許多靈感並非來自寧靜書房，而是在某個陌生城市的小巷中，在遺世獨立的海邊黃昏裡浮現。',
  },
  {
    id: 2,
    title: '《作家訪談》筆下創造的靈魂，創作與心靈治癒',
    img: ArticleCard02,
    content:
      '在布莉安娜．魏斯禮的作品中，角色彷彿擁有真實靈魂，深刻觸動讀者心底最柔軟的角落。她分享，創作是她與內在情緒對話的方式，是一種自我療癒的歷程。',
  },
  {
    id: 3,
    title: '《作家訪談》布莉安娜．魏斯禮──創作與生活的平衡',
    img: ArticleCard03,
    content:
      '在文學與生活之間，布莉安娜．魏斯特找到屬於自己的節奏。她習慣在清晨散步後打開筆記本，記錄內心浮現的片段想法，讓生活自然地流進文字之中。',
  },
];
</script>

<template>
  <div class="relative w-full sm:w-[1200px] mx-auto">
    <h2 class="text-2xl sm:text-4xl font-noto mb-6 text-light-black">文字與觀點</h2>

    <div
      ref="scrollRef"
      class="flex overflow-x-auto scroll-smooth gap-4 scrollbar-hide snap-x snap-mandatory px-2 sm:px-0">
      <ArticleCard
        v-for="(article, index) in CardInfo"
        :key="index"
        :image="article.img"
        :title="article.title"
        :content="article.content"
        class="snap-start shrink-0 w-full sm:w-[400px]" />
    </div>

    <!-- 左右按鈕：在手機上隱藏 -->
    <button
      class="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full z-10 w-10 h-10 items-center justify-center hover:bg-gray-100 hidden sm:flex"
      @click="scrollPrev">
      ←
    </button>
    <button
      class="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full z-10 w-10 h-10 items-center justify-center hover:bg-gray-100 hidden sm:flex"
      @click="scrollNext">
      →
    </button>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
