<script setup>
import NavBar from './components/NavBar.vue';
import MyFooter from '@/components/Footer.vue';
</script>

<template>
  <NavBar />
  <router-view />
  <MyFooter />
</template>
