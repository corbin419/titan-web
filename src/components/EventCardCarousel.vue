<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventCard01 from '@/assets/img/EventCard/EventCard01.jpg';
import EventCard02 from '@/assets/img/EventCard/EventCard02.jpg';

const scrollRef = ref(null);
let intervalId = null;

// 根據裝置寬度決定滾動距離
function getCardWidth() {
  return window.innerWidth < 640 ? window.innerWidth : 608; // 320 卡片 + 16 gap
}

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

const eventInfo = [
  {
    id: 1,
    img: EventCard01,
    title: '《當我開始遠行之後》新書簽書見面會',
    date: '6 / 8',
    year: '2024',
    time: '14:00 – 17:00',
    location: '嘉義市靜林路89號  ·  白鹿書房',
    speaker: '布莉安娜．魏斯禮',
  },
  {
    id: 2,
    img: EventCard02,
    title: '《關於放棄的改變筆記》新書發售會',
    date: '5 /18',
    year: '2023',
    time: '13:30 – 15:00',
    location: '台北市松山區巷弄書屋二樓',
    speaker: '布莉安娜．魏斯禮',
  },
];
</script>

<template>
  <div class="relative w-full sm:w-[1200px] mx-auto">
    <h2 class="text-2xl sm:text-4xl font-noto mb-6 text-light-black">活動行事曆</h2>

    <div
      ref="scrollRef"
      class="flex overflow-x-auto scroll-smooth gap-2 scrollbar-hide snap-x snap-mandatory">
      <EventCard
        v-for="event in eventInfo"
        :key="event.id"
        :image="event.img"
        :title="event.title"
        :date="event.date"
        :year="event.year"
        :time="event.time"
        :location="event.location"
        :speaker="event.speaker"
        class="snap-start shrink-0 w-full sm:w-[600px]" />
    </div>

    <!-- 左右按鈕：手機隱藏 -->
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
