<script setup>
import {ref, onMounted, onBeforeUnmount, nextTick} from 'vue';
import BookCard from './SwiperBooksCards.vue';

import BookCard01 from '@/assets/img/BookCards/booksCards-01.jpg';
import BookCard02 from '@/assets/img/BookCards/booksCards-02.jpg';
import BookCard03 from '@/assets/img/BookCards/booksCards-03.jpg';
import BookCard04 from '@/assets/img/BookCards/booksCards-04.jpg';

const props = defineProps({
  title: {
    type: String,
    default: '發燒暢銷書',
  },
});

const originalBooks = [
  {id: 1, image: BookCard01, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
  {id: 2, image: BookCard02, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
  {id: 3, image: BookCard03, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
  {id: 4, image: BookCard04, title: '當我們開始行之後', author: '花青安譯、孫鵬峰'},
];

const repeatedBooks = [...originalBooks, ...originalBooks, ...originalBooks];
const containerRef = ref(null);
const cardWidth = ref(220 + 24);
let autoScrollTimer = null;

const scrollByOffset = (offset) => {
  if (containerRef.value) {
    containerRef.value.scrollBy({left: offset, behavior: 'smooth'});
  }
};

const autoScroll = () => {
  if (!containerRef.value) return;

  const container = containerRef.value;
  scrollByOffset(cardWidth.value);

  const maxScroll = cardWidth.value * originalBooks.length * 2;
  if (container.scrollLeft >= maxScroll) {
    container.scrollLeft = cardWidth.value * originalBooks.length;
  }
};

const updateCardWidth = () => {
  const card = containerRef.value?.querySelector('.book-card');
  if (card) {
    cardWidth.value = card.offsetWidth + 16;
  }
};

onMounted(() => {
  nextTick(() => {
    containerRef.value.scrollLeft = cardWidth.value * originalBooks.length;
    updateCardWidth();
  });
  window.addEventListener('resize', updateCardWidth);
  autoScrollTimer = setInterval(autoScroll, 4000);
});

onBeforeUnmount(() => {
  clearInterval(autoScrollTimer);
  window.removeEventListener('resize', updateCardWidth);
});
</script>

<template>
  <div class="relative w-full">
    <h2 class="text-xl font-semibold mb-6">{{ title }}</h2>

    <div
      ref="containerRef"
      class="flex overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory gap-4">
      <BookCard
        v-for="(book, index) in repeatedBooks"
        :key="index"
        :image="book.image"
        :title="book.title"
        :author="book.author"
        class="book-card snap-start shrink-0 w-full max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[220px]" />
    </div>

    <button
      class="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full z-10 w-10 h-10 flex items-center justify-center hover:bg-light-gray"
      @click="scrollByOffset(-cardWidth)">
      ←
    </button>
    <button
      class="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow rounded-full z-10 w-10 h-10 flex items-center justify-center hover:bg-light-gray"
      @click="scrollByOffset(cardWidth)">
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
