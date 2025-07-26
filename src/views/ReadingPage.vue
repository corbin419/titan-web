<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import MyNav from '@/components/ReadingNav.vue';
import MyFooter from '@/components/ReadingFooter.vue';
import Page01 from '@/assets/img/ReadIMG/ReadingPage01.png';
import Page02 from '@/assets/img/ReadIMG/ReadingPage02.png';
import Page03 from '@/assets/img/ReadIMG/ReadingPage03.png';
import Page04 from '@/assets/img/ReadIMG/ReadingPage04.png';
import Book from '@/assets/img/ReadIMG/book.jpg';

const showHeaderFooter = ref(false);

const triggerNavRef = ref(null);
const triggerFooterRef = ref(null);

const currentPage = ref(0);

const Pages = [
  {id: 1, img: Book},
  {id: 2, img: Page01},
  {id: 3, img: Page02},
  {id: 4, img: Page03},
  {id: 5, img: Page04},
];

const nextPage = () => {
  if (currentPage.value < Pages.length - 1) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 0) currentPage.value--;
};

const progress = computed(() => {
  if (Pages.length <= 1) return 0;
  return (currentPage.value / (Pages.length - 1)) * 100;
});

const handleClickOutside = (event) => {
  if (
    !triggerNavRef.value?.contains(event.target) &&
    !triggerFooterRef.value?.contains(event.target)
  ) {
    showHeaderFooter.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <section class="w-screen h-screen flex flex-col relative overflow-hidden bg-[#F1F1F1]">
    <!-- 顯示 Nav -->
    <transition name="fade">
      <MyNav v-if="showHeaderFooter" />
    </transition>

    <!-- 主體內容 -->
    <div class="flex-1 w-full flex flex-col items-center justify-between overflow-hidden">
      <!-- Nav 觸發區 -->
      <div
        ref="triggerNavRef"
        class="w-full h-[100px] cursor-pointer"
        @click.stop="showHeaderFooter = true"></div>

      <!-- 閱讀內容 -->
      <div class="relative w-full flex-1 flex items-center justify-center">
        <!-- 左右點擊控制區 -->
        <div class="absolute left-0 top-0 h-full w-1/4 cursor-pointer z-10" @click="prevPage"></div>
        <div
          class="absolute right-0 top-0 h-full w-1/4 cursor-pointer z-10"
          @click="nextPage"></div>

        <!-- 書頁圖片 -->
        <img
          :src="Pages[currentPage].img"
          alt="閱讀內容"
          class="max-h-[calc(100vh-200px)] max-w-[90vw] object-contain rounded-xl shadow-lg z-0 transition duration-300" />
      </div>

      <!-- Footer 觸發區 -->
      <div
        ref="triggerFooterRef"
        class="w-full h-[100px] cursor-pointer"
        @click.stop="showHeaderFooter = true"></div>
    </div>

    <!-- 顯示 Footer -->
    <transition name="fade">
      <MyFooter v-if="showHeaderFooter" :progress="progress" />
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
