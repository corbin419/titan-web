<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import FarBook from '@/assets/img/farbook.png';
import GiveUpBook from '@/assets/img/giveup.png';
import RainBook from '@/assets/img/rainbook.png';
import SummerBook from '@/assets/img/summer.jpg';

const allCards = ref([
  {
    id: 1,
    image: FarBook,
    title: '當我開始遠行之後',
    author: '與其害怕 就出發',
  },
  {
    id: 2,
    image: GiveUpBook,
    title: '放棄之前，我從沒想過相信',
    author: '小日子選書',
  },
  {
    id: 3,
    image: RainBook,
    title: '在雨中相逢',
    author: '讀者推薦',
  },
  {
    id: 4,
    image: SummerBook,
    title: '那年夏天的海風',
    author: '文藝特輯',
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

// 📌 點擊卡片 → 移到最上層
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
    <!-- 卡片區塊 -->
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
          transform: `translateX(${i * 40}px) scale(${1 - i * 0.05})`,
          opacity: 1 - i * 0.1,
          transitionDelay: `${i * 100}ms`, // 加入延遲動畫
        }"
        @click="bringToFront(i)">
        <div class="w-full h-full bg-white rounded-xl shadow-xl overflow-hidden">
          <img :src="card.image" alt="poster" class="w-full h-64 object-cover" />
          <div class="p-3">
            <h3 class="text-base font-semibold truncate">{{ card.title }}</h3>
            <p class="text-sm text-light-black truncate">{{ card.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
