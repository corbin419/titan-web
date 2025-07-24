<script setup>
import {ref, computed} from 'vue';
import {useWindowSize} from '@vueuse/core';
import AuthorCard from '@/components/AuthorCard.vue';
import SwiperBooksCards from '@/components/SwiperBooksCards.vue';
import BookCard01 from '@/assets/img/BookCards/booksCards-01.jpg';
import BookCard02 from '@/assets/img/BookCards/booksCards-02.jpg';
import BookCard03 from '@/assets/img/BookCards/booksCards-03.jpg';
import BookCard04 from '@/assets/img/BookCards/booksCards-04.jpg';
import GoodBook01 from '@/assets/img/GoodBooks/GoodBooks-01.jpg';
import GoodBook02 from '@/assets/img/GoodBooks/GoodBooks-02.jpg';
import GoodBook03 from '@/assets/img/GoodBooks/GoodBooks-03.jpg';
import GoodBook04 from '@/assets/img/GoodBooks/GoodBooks-04.jpg';
import VideoImg from '@/assets/img/video.jpg';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faAngleUp, faAngleDown);

const isExpanded = ref(false);

const originalBooks = [
  {id: 1, image: BookCard01, title: '像想念依樣生活'},
  {id: 2, image: BookCard02, title: '當我們開始遠行之後'},
  {id: 3, image: BookCard03, title: '分手之前我從來沒想用平靜'},
  {id: 4, image: BookCard04, title: '想念之前我從沒想過自由'},
  {id: 5, image: GoodBook01, title: '日光下的練習'},
  {id: 6, image: GoodBook02, title: '那年夏天的海風'},
  {id: 7, image: GoodBook03, title: '艾梅莉塔與他的朋友們'},
  {id: 8, image: GoodBook04, title: '季風吹得約定'},
  {id: 9, image: BookCard01, title: '像想念依樣生活'},
  {id: 10, image: BookCard02, title: '當我們開始遠行之後'},
  {id: 11, image: BookCard03, title: '分手之前我從來沒想用平靜'},
  {id: 12, image: BookCard04, title: '想念之前我從沒想過自由'},
];

const {width} = useWindowSize();

const visibleBooks = computed(() => {
  const maxBooks = width.value < 640 ? 6 : 8; // 小於 sm 螢幕顯示 6 本，否則 8 本
  return isExpanded.value ? originalBooks : originalBooks.slice(0, maxBooks);
});
</script>

<template>
  <!-- 作者介紹 -->
  <section>
    <AuthorCard />
  </section>
  <!-- 作品列表 -->
  <section class="flex flex-col gap-4 items-center mx-auto p-6 w-fit">
    <div class="text-2xl font-noto text-left w-full">完整作品列表</div>
    <!-- 書籍區 -->
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 transition-all duration-500">
      <div v-for="(book, index) in visibleBooks" :key="index">
        <SwiperBooksCards
          :image="book.image"
          :title="book.title"
          class="snap-start shrink-0 w-full" />
      </div>
    </div>

    <!-- 展開／收起按鈕 -->
    <button
      @click="isExpanded = !isExpanded"
      class="rounded-full border px-[15px] py-1 hover:bg-gradient-green-light flex items-center gap-1 font-noto-sans text-green-gray">
      <span>{{ isExpanded ? '收起書籍' : '全部書籍' }}</span>
      <font-awesome-icon :icon="isExpanded ? ['fas', 'angle-up'] : ['fas', 'angle-down']" />
    </button>
  </section>
  <!-- 作者訪談區塊 -->
  <section class="bg-[#F7F6F1] flex flex-col items-center px-4 py-20">
    <div class="w-full max-w-[1200px] flex flex-col gap-6">
      <!-- 標題 -->
      <h2 class="font-bold text-[28px] sm:text-[32px] text-black font-noto text-left">作者訪談</h2>

      <!-- 內文 -->
      <p class="text-[16px] sm:text-[18px] leading-relaxed text-black font-noto-sans">
        作家莉娜在訪談中分享她如何從日常中汲取靈感，並將自己投射進文字與角色裡。
        她溫柔地談論創作，也不時露出可愛的笑容，展現真誠又自然的一面。透過這段對話，我們看見她作品背後的溫度與心意。
      </p>

      <!-- 影片預覽圖（含播放按鈕 & 說明文字） -->
      <div class="relative w-full mt-6">
        <img
          :src="VideoImg"
          alt="作者訪談影片預覽"
          class="w-full h-auto rounded-lg shadow-md object-cover" />

        <!-- 遮罩與文字：疊在影片中間 -->
        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black/30">
          <svg
            class="w-16 h-16 mb-4 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- 作者活動 -->
  <section></section>
</template>
