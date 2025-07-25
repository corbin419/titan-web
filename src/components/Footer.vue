<script setup>
import LOGO from '@/assets/img/titan-logo.jpg';
</script>

<template>
  <footer class="bg-white border-t border-gray-200 text-light-black font-noto text-sm">
    <div
      class="max-w-7xl mx-auto py-10 px-6 flex flex-col items-center text-center gap-8 md:grid md:grid-cols-3 md:items-start md:text-left md:gap-0 font-noto-sans">
      <!-- 關於大田 -->
      <div class="w-full md:w-[340px] mb-8 md:mb-0">
        <h2 class="text-lg mb-1">關於大田</h2>
        <div class="flex items-center gap-4">
          <div class="h-[2px] bg-light-gray flex-grow"></div>
          <span class="text-light-gray font-bold font-mono whitespace-nowrap">SINCE 1997</span>
          <div class="h-[1px] flex-grow"></div>
        </div>
        <p class="leading-relaxed">
          我們希望以編輯的專業，為努力創作的作者，找到更多的讀者；也希望因大田的眼光與堅持，讓更多人熱愛閱讀與台灣。
        </p>
      </div>

      <!-- 聯絡我們 -->
      <div class="w-full md:w-[340px] mb-8 md:mb-0">
        <h2 class="text-lg mb-1">聯絡我們</h2>
        <div class="flex items-center gap-4">
          <div class="h-[2px] bg-light-gray flex-grow"></div>
          <span class="text-light-gray font-bold font-mono whitespace-nowrap">CONTACT US</span>

          <div class="h-[1px] flex-grow"></div>
        </div>
        <p>地址：台北市羅斯福路二段95號四樓之三</p>
        <p>電話：02-23696315</p>
        <p>
          Email：<a href="mailto:titan3@ms22.hinet.net" class="text-gradient-green hover:underline"
            >titan3@ms22.hinet.net</a
          >
        </p>
      </div>

      <!-- Logo + 社群 -->
      <div class="w-full md:w-[260px] flex flex-col items-center md:items-end">
        <img :src="LOGO" alt="大田出版 Logo" class="h-10 mb-4" />
        <div class="flex space-x-4 text-gray-500 text-xl">
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
          <font-awesome-icon :icon="['fab', 'square-instagram']" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <font-awesome-icon :icon="['fab', 'line']" />
        </div>
      </div>
    </div>

    <!-- 底部條 -->
    <div
      class="flex flex-col items-center text-center gap-4 w-full bg-gradient-green-light justify-center font-noto-sans md:flex-row md:justify-between md:items-center md:text-left md:gap-0">
      <div class="text-xs text-black py-4">Copyright &copy; 2009 TITAN Publishing Co., Ltd.</div>
      <div class="relative w-[80%] max-w-xs flex items-center">
        <input
          type="text"
          placeholder="輸入你的 email"
          class="w-full h-[29px] leading-[29px] border border-light-gray rounded-full px-4 text-sm focus:outline-none text-light-black bg-white" />

        <button
          class="absolute top-1/2 right-0 -translate-y-1/2 bg-green-light2 text-light-black text-xs h-[25px] px-3 rounded-full hover:bg-green-gray hover:text-light-gray transition-colors duration-200 cursor-pointer">
          訂閱電子報！
        </button>
      </div>
    </div>
  </footer>
</template>
