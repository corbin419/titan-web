<script setup>
import FarBook from '@/assets/img/BookInfo/FarBook.jpg';
</script>

<template>
  <div class="xl:w-[1200px] mx-auto flex flex-col sm:flex-row px-10 xl:px-0">
    <router-link to="/ReadingPage">
      <div class="relative w-fit group bg-gradient-green-light px-10 py-6 flex justify-center">
        <img :src="FarBook" alt="當我開始遠行" class="shadow-light-black shadow-md" />

        <!-- Hover 遮罩（底部 20%） -->
        <div
          class="absolute bottom-0 left-0 w-full h-[20%] bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
          <span class="text-white text-xl font-bold"
            ><font-awesome-icon icon="fa-solid fa-glasses" class="mr-3" />試閱</span
          >
        </div>
      </div>
    </router-link>
    <div class="flex flex-col justify-between px-8 py-6 gap-5">
      <div class="font-noto text-3xl font-bold text-light-black break-words">
        當我開始遠行之後，學會了不等風來，也能自己啟程
      </div>
      <!-- 書籍介紹 -->
      <div class="flex flex-col gap-2 font-noto-sans">
        <span>作 者： 布莉安娜．魏斯禮</span>
        <span>譯 者： 林暮青</span>
        <span>出版日期： 2024/06/01</span>
        <span>ISBN： 978-986-98765-43-2</span>
        <span>定 價： 399元</span>
      </div>
      <!-- 按鈕區塊 -->
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          class="group border border-light-black rounded-full px-4 py-1 font-noto-sans text-light-black hover:bg-gradient-green-light transition-colors duration-300 flex items-center">
          收藏
          <font-awesome-icon
            icon="fa-regular fa-heart"
            class="text-light-black group-hover:text-red-500 transition-colors duration-300 ml-1" />
        </button>

        <button
          class="group border border-light-black rounded-full px-4 py-1 font-noto-sans text-light-black hover:bg-gradient-green-light flex items-center">
          博客來
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="text-light-black text-sm ml-1 transition-transform duration-300 group-hover:scale-110" />
        </button>

        <button
          class="group border border-light-black rounded-full px-4 py-1 font-noto-sans text-light-black hover:bg-gradient-green-light flex items-center">
          晨星書店
          <font-awesome-icon
            icon="fa-solid fa-arrow-up-right-from-square"
            class="text-light-black text-sm ml-1 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
    </div>
  </div>
</template>
