<script setup>
import SwiperCard from '@/components/SwiperCard.vue';
import BannerBook from '@/assets/img/BannerBook-01.jpg';
import CtaBanner from '@/assets/img/CtaBanner.jpg';

const ctaBtn = [
  {id: 1, name: '全部書籍'},
  {id: 2, name: '小說'},
  {id: 3, name: '散文'},
  {id: 4, name: '詩集'},
  {id: 5, name: '人文社科'},
  {id: 6, name: '心理成長'},
  {id: 7, name: '旅遊攝影'},
  {id: 8, name: '生活風格'},
  {id: 9, name: '青少年讀'},
];
</script>

<template>
  <!-- 滑動banner -->
  <section class="bg-gradient-beige">
    <div class="flex px-[360px] py-[175px] justify-center gap-20 items-center">
      <div class="flex flex-col gap-4">
        <span class="font-noto text-5xl font-bold text-black">在雨夜裡閱讀</span>
        <span class="font-noto text-[40px] text-black">精選書籍</span>
        <p class="font-noto-sans">
          有些書適合晴天閱讀，有些則只在夜裡低語。這份書單，為孤獨、潮濕而需要字句取暖的你而準備。
        </p>
        <div
          class="text-green-main hover:underline underline-offset-4 decoration-2 cursor-pointer font-bold w-fit">
          查看書單 &gt;
        </div>
      </div>
      <SwiperCard />
    </div>
  </section>
  <!-- 試閱Banner -->
  <section class="flex justify-center px-[360px] py-[175px] gap-20">
    <img :src="BannerBook" class="w-[508px] h-[596px]" />
    <div class="flex flex-col gap-8 justify-center">
      <span class="text-[40px] font-noto text-light-black">《時間煮雨的午後》</span>
      <div class="font-noto-sans text-[18px] text-light-black max-h-[224px] line-clamp-6">
        他總是在午後五點抵達，推開那扇永遠吱嘎作響的門。「妳又看那本書？」他問。我沒回應，只將書翻至下一頁。世界安靜地往前走，像每一個日常。
        窗外的雨已經下了一整天，像是忘記了停止的方法。屋簷滴水，滴答、滴答，和牆角那座老舊掛鐘的聲音交錯成一種溫吞的節奏。他脫下濕漉漉的外套，掛在椅背上，沒有多說什麼，只坐到我對面，拿起那本沒人看的報紙。
        我知道他不是在看報紙。他只是想坐著，和我在同一個空間裡靜靜地耗掉這段午後時間。
        「雨什麼時候才會停呢？」我說，視線仍停在書頁上，但其實一個字也沒讀進去。
        他沒立刻回答，而是過了一會兒，才慢悠悠地說：「可能明天，也可能不會。像有些人離開了，就再也不回來一樣。」
        我愣了一下，指尖無意識地在書頁邊緣來回摩擦。這是我們之間的遊戲——用不明說的語言談論過去，用第三人稱包裝彼此的傷口。我從來沒有問過他當年為什麼離開，也從來沒有說過，我一個人是怎麼度過那些雨季的。
        他將報紙折起來，動作像是為一場無聲對話畫上句點。「我今天在路上看到一個女孩，撐著透明傘，和妳以前一樣。」他頓了頓，「我差點叫出妳的名字。」
        我抬起頭，終於看向他。他的眼神沒閃躲，裡頭像藏了一場下不完的雨。 「那她呢？」我問。
        他輕輕笑了，像風穿過簷下藤蔓時不經意的顫動。「她只是個陌生人，不會坐在這裡，聽我說這些話。」
        我點點頭，將書闔上，終於不再假裝閱讀。「那我們來泡杯茶吧，這雨還會下很久。」
      </div>
      <div
        class="text-green-main hover:underline underline-offset-4 decoration-2 cursor-pointer font-bold w-fit">
        閱讀試閱 &gt;
      </div>
    </div>
  </section>
  <!-- CTA -->
  <section
    class="bg-cover bg-center h-[400px] w-full flex flex-col px-[360px] py-[175px]"
    :style="{backgroundImage: `url(${CtaBanner})`}">
    <div class="flex flex-col h-[129px] gap-8">
      <span class="font-noto text-3xl">在閱讀的世界裡迷路，也是一種發現。</span>
      <div class="flex divide-x-2 divide-gray-300">
        <button
          v-for="btns in ctaBtn"
          :key="btns.id"
          class="px-4 text-light-black font-bold first:pl-0 last:pr-0 hover:underline underline-offset-5 decoration-2 cursor-pointer">
          {{ btns.name }}
        </button>
      </div>
    </div>
  </section>
  <!-- 書籍推薦區域 -->
  <section></section>
</template>
