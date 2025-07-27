<script setup>
import {useRoute} from 'vue-router';
import NavBar from './components/NavBar.vue';
import MyFooter from '@/components/Footer.vue';

const route = useRoute();

// 設定哪些路由不顯示 NavBar/Footer
const hideLayoutPages = ['/ReadingPage']; // 可以放入不想顯示 nav/footer 的路由路徑
</script>

<template>
  <div>
    <!-- 判斷是否顯示 NavBar -->
    <NavBar v-if="!hideLayoutPages.includes(route.path)" />
    <router-view />
    <!-- 判斷是否顯示 Footer -->
    <MyFooter v-if="!hideLayoutPages.includes(route.path)" />
  </div>
</template>
