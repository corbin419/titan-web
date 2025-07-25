<script setup>
import EventCard from '@/components/EventCard.vue';
import EventCard01 from '@/assets/img/EventCard/EventCard01.jpg';
import EventCard02 from '@/assets/img/EventCard/EventCard02.jpg';

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
  <div class="relative w-[1200px]">
    <h2 class="text-4xl font-noto mb-6 text-light-black">活動行事曆</h2>

    <div
      ref="scrollRef"
      class="flex overflow-x-auto scroll-smooth gap-4 scrollbar-hide snap-x snap-mandatory">
      <EventCard
        v-for="event in eventInfo"
        :key="event.id"
        :image="event.img"
        :title="event.title"
        :date="event.date"
        :year="event.year"
        :time="event.time"
        :location="event.location"
        :speaker="event.speaker" />
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
