<script setup>
import {ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
import ArticleCard from './ArticleCard.vue';

import ArticleCard01 from '@/assets/img/ArticleCard/ArticleCard01.jpg';
import ArticleCard02 from '@/assets/img/ArticleCard/ArticleCard02.jpg';
import ArticleCard03 from '@/assets/img/ArticleCard/ArticleCard03.jpg';

const scrollRef = ref(null);
let intervalId = null;
const cardWidth = 320 + 16; // 卡片寬度 + gap（你可根據實際設計微調）

// 自動輪播
function scrollNext() {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({left: cardWidth, behavior: 'smooth'});
}
function scrollPrev() {
  const el = scrollRef.value;
  if (!el) return;
  el.scrollBy({left: -cardWidth, behavior: 'smooth'});
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
      '本次邀請布莉安娜．魏斯禮，分享她對旅遊的見解與心靈轉化之路。對她而言，旅行不只是抵達目的地，更是一種重新認識自己的過程。她坦言，許多靈感並非來自寧靜書房，而是在某個陌生城市的小巷中，在遺世獨立的海邊黃昏裡浮現。旅途中的不確定與驚喜，不僅豐富了她的寫作題材，也讓她在每一次遠行中與內心更加靠近。她相信，離開舒適圈，正是心靈開始自由的時刻。',
  },
  {
    id: 2,
    title: '《作家訪談》筆下創造的靈魂，創作與心靈治癒',
    img: ArticleCard02,
    content:
      '在布莉安娜．魏斯禮的作品中，角色彷彿擁有真實靈魂，深刻觸動讀者心底最柔軟的角落。她分享，創作是她與內在情緒對話的方式，是一種自我療癒的歷程。當世界讓人感到迷惘，她便用文字為自己劃出一處安靜之所。她認為，每個角色的誕生都源自某段未竟的對話或壓抑的情緒，而書寫過程中的釋放與理解，讓她學會溫柔看待自己與他人。創作，於她，是深層的自我修復旅程。',
  },
  {
    id: 3,
    title: '《作家訪談》布莉安娜．魏斯禮──創作與生活的平衡',
    img: ArticleCard03,
    content:
      '在文學與生活之間，布莉安娜．魏斯特找到屬於自己的節奏。她分享，創作不應與現實割裂，而是源自日常的觀察與體會。她習慣在清晨散步後打開筆記本，記錄內心浮現的片段想法，讓生活自然地流進文字之中。她相信，唯有身心平衡，創作才會持久且真實。她提醒年輕創作者，靈感並非來自壓力，而是源於對世界真誠的感受力。寫作，是生活的一部分，而非逃離生活的方式。',
  },
];
</script>

<template>
  <div class="relative w-[1200px]">
    <h2 class="text-4xl font-noto mb-6 text-light-black">文字與觀點</h2>

    <div
      ref="scrollRef"
      class="flex overflow-x-auto scroll-smooth gap-4 scrollbar-hide snap-x snap-mandatory">
      <ArticleCard
        v-for="(article, index) in CardInfo"
        :key="index"
        :image="article.img"
        :title="article.title"
        :content="article.content"
        class="snap-start shrink-0 w-[320px]" />
    </div>

    <!-- 左右按鈕 -->
    <button
      class="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full z-10 w-10 h-10 flex items-center justify-center hover:bg-gray-100"
      @click="scrollPrev">
      ←
    </button>
    <button
      class="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full z-10 w-10 h-10 flex items-center justify-center hover:bg-gray-100"
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
