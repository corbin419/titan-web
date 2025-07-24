import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import AuthorPage from '@/views/AuthorPage.vue';
import BookFilter from '@/views/BookFilter.vue';
import BookShelfPage from '@/views/BookShelfPage.vue';
import BooksInfoPage from '@/views/BooksInfoPage.vue';
import ReadingPage from '@/views/ReadingPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Titan-HomePage',
      component: HomePage,
    },
    {
      path: '/AuthorPage',
      name: 'Titan-AuthorPage',
      component: AuthorPage,
    },
    {
      path: '/BookFilter',
      name: 'Titan-BookFilter',
      component: BookFilter,
    },
    {
      path: '/BookShelfPage',
      name: 'Titan-BookShelfPage',
      component: BookShelfPage,
    },
    {
      path: '/BooksInfoPage',
      name: 'Titan-BooksInfoPage',
      component: BooksInfoPage,
    },
    {
      path: '/ReadingPage',
      name: 'Titan-ReadingPage',
      component: ReadingPage,
    },
  ],
});

export default router;
