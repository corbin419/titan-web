<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import FarBook from '@/assets/img/Swiper/SwiperBook-01.jpg';
import GiveUpBook from '@/assets/img/Swiper/SwiperBook-02.jpg';
import RainBook from '@/assets/img/Swiper/SwiperBook-03.jpg';

const allCards = ref([
  {
    id: 1,
    image: FarBook,
    title: '當我開始遠行之後',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 2,
    image: GiveUpBook,
    title: '像想念一樣生活',
    author: '黃沛綺',
  },
  {
    id: 3,
    image: RainBook,
    title: '迷霧花園裡的秘密小徑',
    author: '布莉安娜．魏斯禮',
  },
]);

const visibleCards = ref([...allCards.value]);
let timer = null;

// 自動輪播
const startAutoSlide = () => {
  timer = setInterval(() => {
    const first = visibleCards.value.shift();
    visibleCards.value.push(first);
  }, 3000);
};

const stopAutoSlide = () => {
  clearInterval(timer);
};

// 點擊卡片 → 移到最上層
const bringToFront = (index) => {
  const selected = visibleCards.value.splice(index, 1)[0];
  visibleCards.value.unshift(selected);
};

onMounted(startAutoSlide);
onBeforeUnmount(stopAutoSlide);

const responsiveSize = 'w-[300px] h-[420px]'; // 你可以調整這裡大小
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <div
      class="relative mx-auto"
      :class="responsiveSize"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide">
      <div
        v-for="(card, i) in visibleCards"
        :key="card.id"
        class="absolute transition-all duration-700 ease-in-out cursor-pointer"
        :style="{
          zIndex: visibleCards.length - i,
          transform: `translateX(${i * 40}px)`,
          opacity: 1 - i * 0.1,
          transitionDelay: `${i * 100}ms`,
        }"
        @click="bringToFront(i)">
        <div class="overflow-hidden box-content">
          <img :src="card.image" alt="poster" class="object-cover w-[260px] h-[360px]" />
          <div v-if="i === 0" class="p-3">
            <h3 class="text-base font-semibold truncate">{{ card.title }}</h3>
            <p class="text-sm text-light-black truncate">{{ card.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
