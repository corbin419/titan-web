<script setup>
import {ref} from 'vue';
import AuthorCard from '@/components/AuthorCard.vue';
import SwiperBooksCards from '@/components/SwiperBooksCards.vue';
import BookCard01 from '@/assets/img/BookCards/booksCards-01.jpg';
import BookCard02 from '@/assets/img/BookCards/booksCards-02.jpg';
import BookCard03 from '@/assets/img/BookCards/booksCards-03.jpg';
import BookCard04 from '@/assets/img/BookCards/booksCards-04.jpg';

const originalBooks = [
  {id: 1, image: BookCard01, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
  {id: 2, image: BookCard02, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
  {id: 3, image: BookCard03, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
  {id: 4, image: BookCard04, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
];

const isExpanded = ref(false);
</script>

<template>
  <section>
    <AuthorCard />
  </section>

  <section class="flex flex-col gap-4 items-center w-full p-6">
    <div class="text-2xl font-noto">完整作品列表</div>

    <div
      :class="[
        'overflow-hidden transition-all duration-500',
        isExpanded ? 'max-h-full' : 'max-h-[500px]',
      ]">
      <div class="flex gap-2">
        <div class="flex flex-col" v-for="(book, index) in originalBooks" :key="index">
          <SwiperBooksCards
            :image="book.image"
            :title="book.title"
            class="snap-start shrink-0 w-[220px]" />
        </div>
      </div>
    </div>

    <!-- 切換展開按鈕 -->
    <button
      @click="isExpanded = !isExpanded"
      class="rounded-full border px-[15px] py-0.5 hover:bg-gradient-green-light">
      {{ isExpanded ? '收起書籍' : '全部書籍' }}
    </button>
  </section>
</template>
