<script setup>
import AuthorImg from '@/assets/img/author.png';
import {ref} from 'vue';

const isExpanded = ref(false);
</script>

<template>
  <section class="flex flex-col md:flex-row h-auto md:h-[500px]">
    <!-- 左邊圖片 -->
    <div class="flex w-full md:w-1/2 justify-end items-center p-6">
      <img :src="AuthorImg" alt="author" class="w-full h-auto md:h-full object-contain p-6" />
    </div>

    <!-- 右邊文字 -->
    <div class="flex flex-col w-full md:w-1/2 justify-center items-start gap-3 p-6">
      <div class="text-[32px] md:text-[40px]">布莉安娜．魏斯禮</div>

      <!-- 可展開的內容 -->
      <div
        :class="['transition-all duration-300 w-full md:w-2/3', isExpanded ? '' : 'line-clamp-3']">
        她是世界知名的身心靈作家，作品翻譯成十數種語言，風靡全球。多年來，她透過網路專欄與個人部落格持續分享洞見，文字柔軟卻有力量，寫下無數關於療癒與覺醒的篇章。
        她一生致力於一項使命——引導人們重新書寫內在的生命敘事，使其更加貼近真我、對齊靈魂的方向，進而活出清晰且有意識的存在狀態，喚醒潛藏的光與可能性。
      </div>

      <div class="font-semibold mt-2">獲獎與榮譽紀錄</div>
      <ul class="gap-2 list-disc pl-5">
        <li>曾獲歐森學院 Olson College 頒授名譽人文寫作博士學位</li>
        <li>文章散見於《Current Journal》《Thought&Light》等國際刊物</li>
        <li>著作翻譯為十餘國語言，全球累積銷量突破超過百萬冊</li>
      </ul>

      <!-- 底部按鈕與社群 -->
      <div
        class="border-t-2 border-light-gray w-full flex flex-col sm:flex-row py-3 justify-between gap-2">
        <!-- 閱讀更多按鈕 -->
        <button
          @click="isExpanded = !isExpanded"
          class="font-noto-sans text-light-black hover:underline decoration-2 underline-offset-4 text-left flex items-center gap-1">
          <span>{{ isExpanded ? '收起內容' : '閱讀更多' }}</span>
          <font-awesome-icon :icon="isExpanded ? ['fas', 'angle-up'] : ['fas', 'angle-down']" />
        </button>

        <!-- 社群 icon -->
        <div class="flex space-x-4 text-gray-500 text-xl">
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
          <font-awesome-icon :icon="['fab', 'square-instagram']" />
          <font-awesome-icon :icon="['fab', 'youtube']" />
          <font-awesome-icon :icon="['fab', 'line']" />
        </div>
      </div>
    </div>
  </section>
</template>
