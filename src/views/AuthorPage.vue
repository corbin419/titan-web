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
  <section>
    <AuthorCard />
  </section>

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
</template>
