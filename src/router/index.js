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
      path: '/HomePage',
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
      path: '/',
      name: 'Titan-BookShelfPage',
      component: BookShelfPage,
    },
    {
      path: '/',
      name: 'Titan-BooksInfoPage',
      component: BooksInfoPage,
    },
    {
      path: '/',
      name: 'Titan-ReadingPage',
      component: ReadingPage,
    },
  ],
});

export default router;
