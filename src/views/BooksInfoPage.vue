<script setup>
import AuthorCard from '@/components/AuthorCard.vue';
import BookCarousel from '@/components/BookCarousel.vue';
import BookInfoCard from '@/components/BookInfoCard.vue';
import ReaderComment from '@/components/ReaderComment.vue';

import Avatar01 from '@/assets/img/Avatar/Avatar01.png';

const Readers = [
  {
    id: 1,
    CnName: '妮可．勒佩拉 醫師',
    EnName: '妮可．勒佩拉 醫師',
    avatar: Avatar01,
    content:
      '布莉安娜的書，是療癒的美麗展現。她以極度細膩又深刻的筆觸，勾勒出人們在面對自我破壞、內在批判與情緒困境時的心路歷程。書中的每一句話彷彿都經過時間沉澱，不僅是一種知識的傳遞，更是一種心靈的陪伴。她對情緒智商的洞見，不僅僅是理論，更像是一道道光，照亮那些我們以為無人能懂的內在陰影。而她關於深度轉變的思維架構，不是要求我們改變成更「完美」的人，而是引導我們回到自己、擁抱脆弱與真實。布莉安娜的書不是喧囂的勵志書寫，而是寧靜卻堅定的支持。',
  },
  {
    id: 2,
    CnName: '妮可．勒佩拉 醫師',
    EnName: '妮可．勒佩拉 醫師',
    avatar: Avatar01,
    content:
      '布莉安娜的書，是療癒的美麗展現。她以極度細膩又深刻的筆觸，勾勒出人們在面對自我破壞、內在批判與情緒困境時的心路歷程。書中的每一句話彷彿都經過時間沉澱，不僅是一種知識的傳遞，更是一種心靈的陪伴。她對情緒智商的洞見，不僅僅是理論，更像是一道道光，照亮那些我們以為無人能懂的內在陰影。而她關於深度轉變的思維架構，不是要求我們改變成更「完美」的人，而是引導我們回到自己、擁抱脆弱與真實。布莉安娜的書不是喧囂的勵志書寫，而是寧靜卻堅定的支持。',
  },
  {
    id: 3,
    CnName: '妮可．勒佩拉 醫師',
    EnName: '妮可．勒佩拉 醫師',
    avatar: Avatar01,
    content:
      '布莉安娜的書，是療癒的美麗展現。她以極度細膩又深刻的筆觸，勾勒出人們在面對自我破壞、內在批判與情緒困境時的心路歷程。書中的每一句話彷彿都經過時間沉澱，不僅是一種知識的傳遞，更是一種心靈的陪伴。她對情緒智商的洞見，不僅僅是理論，更像是一道道光，照亮那些我們以為無人能懂的內在陰影。而她關於深度轉變的思維架構，不是要求我們改變成更「完美」的人，而是引導我們回到自己、擁抱脆弱與真實。布莉安娜的書不是喧囂的勵志書寫，而是寧靜卻堅定的支持。',
  },
  {
    id: 4,
    CnName: '妮可．勒佩拉 醫師',
    EnName: '妮可．勒佩拉 醫師',
    avatar: Avatar01,
    content:
      '布莉安娜的書，是療癒的美麗展現。她以極度細膩又深刻的筆觸，勾勒出人們在面對自我破壞、內在批判與情緒困境時的心路歷程。書中的每一句話彷彿都經過時間沉澱，不僅是一種知識的傳遞，更是一種心靈的陪伴。她對情緒智商的洞見，不僅僅是理論，更像是一道道光，照亮那些我們以為無人能懂的內在陰影。而她關於深度轉變的思維架構，不是要求我們改變成更「完美」的人，而是引導我們回到自己、擁抱脆弱與真實。布莉安娜的書不是喧囂的勵志書寫，而是寧靜卻堅定的支持。',
  },
  {
    id: 5,
    CnName: '妮可．勒佩拉 醫師',
    EnName: '妮可．勒佩拉 醫師',
    avatar: Avatar01,
    content:
      '布莉安娜的書，是療癒的美麗展現。她以極度細膩又深刻的筆觸，勾勒出人們在面對自我破壞、內在批判與情緒困境時的心路歷程。書中的每一句話彷彿都經過時間沉澱，不僅是一種知識的傳遞，更是一種心靈的陪伴。她對情緒智商的洞見，不僅僅是理論，更像是一道道光，照亮那些我們以為無人能懂的內在陰影。而她關於深度轉變的思維架構，不是要求我們改變成更「完美」的人，而是引導我們回到自己、擁抱脆弱與真實。布莉安娜的書不是喧囂的勵志書寫，而是寧靜卻堅定的支持。',
  },
  {
    id: 6,
    CnName: '妮可．勒佩拉 醫師',
    EnName: '妮可．勒佩拉 醫師',
    avatar: Avatar01,
    content:
      '布莉安娜的書，是療癒的美麗展現。她以極度細膩又深刻的筆觸，勾勒出人們在面對自我破壞、內在批判與情緒困境時的心路歷程。書中的每一句話彷彿都經過時間沉澱，不僅是一種知識的傳遞，更是一種心靈的陪伴。她對情緒智商的洞見，不僅僅是理論，更像是一道道光，照亮那些我們以為無人能懂的內在陰影。而她關於深度轉變的思維架構，不是要求我們改變成更「完美」的人，而是引導我們回到自己、擁抱脆弱與真實。布莉安娜的書不是喧囂的勵志書寫，而是寧靜卻堅定的支持。',
  },
];
</script>

<template>
  <section class="xl:w-[1200px] mx-auto flex flex-col gap-4 my-20">
    <div class="px-10 xl:px-0 text-sm text-gray-700 font-noto-sans">
      <ol class="flex flex-wrap items-center space-x-1">
        <li>
          <router-link to="/" class="hover:underline underline-offset-4">大田出版社</router-link>
          <span class="mx-1 text-light-black">/</span>
        </li>
        <li>
          <router-link to="/BookFilter" class="hover:underline underline-offset-4"
            >全部書籍</router-link
          >
          <span class="mx-1 text-light-black">/</span>
        </li>
        <li class="text-green-main font-medium">當我開始遠行之後，學會了不等風來，也能自己啟程</li>
      </ol>
    </div>
    <BookInfoCard />
  </section>
  <!-- 內容介紹 -->
  <section class="xl:w-[1200px] mx-auto flex flex-col gap-8 my-20 px-10 xl:px-0">
    <div class="font-noto text-2xl font-bold text-light-black">內容簡介</div>
    <div class="flex gap-6 font-noto-sans font-bold text-light-black">
      <div class="hidden sm:block border border-l-11 border-green-light2 h-[72px]"></div>
      <div class="flex flex-col justify-between py-2">
        <span>
          恐懼，不會護你周全；行動，才是最深層的防護。憂慮，不曾讓人安全；準備，才是最溫柔的靠山。
        </span>
        <span>過度思索，只是繞遠；唯有理解，能讓你踏實前行。</span>
      </div>
    </div>
    <div class="font-noto-sans text-light-black">
      真正需要翻越的，不是眼前的高山，而是內心那座難以言說的「自己」。
      在想望與現實之間，在渴望的生活與每日慣性之中，我們時常感到受困。那並非命運使然，而是我們自己，在無聲中阻擋了前行的路。
      也許你早已察覺，那些讓你止步不前的山，名字叫做：依賴、焦慮、羞愧、人際撕裂、金錢焦灼；又或者，它們更無形，像是一種揮之不去的不安感，一種對自己始終無法滿意的情緒陰影。
    </div>
    <div class="font-noto-sans text-light-black">
      但這次，我們選擇直視這些山。我們學會從破壞性的慣性中擷取線索，從身體與大腦的連結中認識自己；從潛意識的深處釋放過往，然後練習成為那個未來版本的自己——更穩定、更真實，也更自由。
      有一天，那些曾經讓你氣喘吁吁的高峰，將被你拋在身後，模糊得幾乎看不見。但你在攀登中塑造的模樣，會靜靜陪你一生。因為人生中，那些高山從來不是阻礙，它們，是通往真實的禮物。
    </div>
    <div class="font-noto text-2xl font-bold">本書特色</div>
    <div class="flex flex-col font-noto-sans text-light-black">
      <span>★Amazon Kindle 萬人標記、深刻共鳴★</span>
      <span>★台灣讀者誠實回響、情感熱流★</span>
      <span>★全球讀者持續推薦、療癒轉發★</span>
      <span>獻給你——願你與「自己的山」溫柔和解</span>
    </div>
  </section>
  <!-- 讀者書評 -->
  <section class="bg-gradient-green-light p-10 flex flex-col">
    <div class="xl:w-[1200px] mx-auto flex flex-col gap-6">
      <div class="mx-auto font-noto text-4xl font-bold">讀者書評</div>
      <span class="mx-auto font-noto-sans">
        本書自出版以來廣受好評，無論是文字風格、主題深度，或是情節張力，都引發眾多讀者共鳴。
      </span>
      <span class="mx-auto font-noto-sans">
        相信不論你是首次接觸本書主題，還是長期關注此領域的讀者，都能從中獲得啟發與感動。
      </span>
      <div class="flex flex-wrap w-full">
        <div
          v-for="reader in Readers"
          :key="reader.id"
          class="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
          <ReaderComment
            :ReaderContent="reader.content"
            :ReaderAvatar="reader.avatar"
            :ReaderCnName="reader.CnName"
            :ReaderEnName="reader.EnName" />
        </div>
      </div>
    </div>
  </section>
  <!-- 作者 -->
  <section class="xl:w-[1200px] mx-auto flex flex-col mt-20">
    <AuthorCard />
  </section>
  <!-- 更多好書推薦 -->
  <section class="xl:w-[1200px] mx-auto flex flex-col gap-6 mt-20">
    <div class="mx-auto font-noto text-4xl font-bold">更多好書推薦</div>
    <span class="mx-auto font-noto-sans">
      喜歡這本書的你，也別錯過以下同樣精彩的選書，讓閱讀的深度與感動持續延伸。
    </span>
    <BookCarousel />
  </section>
</template>
