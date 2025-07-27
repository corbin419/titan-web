<script setup>
import AuthorCard from '@/components/AuthorCard.vue';
import BookCarousel from '@/components/BookCarousel.vue';
import BookInfoCard from '@/components/BookInfoCard.vue';
import ReaderComment from '@/components/ReaderComment.vue';

import Avatar01 from '@/assets/img/Avatar/Avatar01.png';
import Avatar02 from '@/assets/img/Avatar/Avatar02.png';
import Avatar03 from '@/assets/img/Avatar/Avatar03.png';
import Avatar04 from '@/assets/img/Avatar/Avatar04.png';
import Avatar05 from '@/assets/img/Avatar/Avatar05.png';
import Avatar06 from '@/assets/img/Avatar/Avatar06.png';
import Avatar07 from '@/assets/img/Avatar/Avatar07.png';
import Avatar08 from '@/assets/img/Avatar/Avatar08.png';
import {ref} from 'vue';

const Readers = [
  {
    id: 1,
    CnName: '林語心 作家',
    EnName: 'Yuxin Lin',
    avatar: Avatar02,
    content:
      '這本書如同一場靜謐的革命。布莉安娜用字句編織出一道道意識的光，照進我們那長年未曾探訪的內在角落。《當我開始遠行之後，學會了不等風來，也能自己啟程》教會我一件事：改變，不在於等待什麼發生，而是來自你願不願意踏出第一步。這本書不炫技、不說教，卻句句入心。它讓我重拾行動的勇氣，也讓我更加溫柔地與自己相處。布莉安娜不是在告訴我們「你應該如何生活」，她是在邀請我們「回到自己」──這是一份罕見的溫柔力量。',
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
    CnName: '史蒂芬．艾森柏格 醫師',
    EnName: 'Steven Eisenberg',
    avatar: Avatar03,
    content:
      '布莉安娜．魏斯禮所寫的這本傑作，是讓我們瞭解自己為何要自我破壞、我們什麼時候會這麼做，以及如何停止這種自我破壞行為的完美指南。在這本書中，布莉安娜並未以高高在上的姿態告訴我們應該怎麼做，而是像一位經歷過痛苦且已學會自我修復的旅人，誠實地與我們分享她的理解與路徑。她將自我破壞行為背後的深層情感剖析得極為透徹，不只是講述現象，更追根究柢地解析了這些行為背後的需求與恐懼。更難能可貴的是，她不只是指出問題，而是給出具體、可實踐的方向，引導我們逐步走出習以為常卻令人窒息的循環。',
  },
  {
    id: 4,
    CnName: '田中圭介 心理學教授',
    EnName: 'Keisuke Tanaka',
    avatar: Avatar04,
    content:
      '魏斯禮的這部作品，是當代心理學與靈性成長之間少有的橋樑。她清楚地指出人類在內在破壞中所經歷的重複模式，並提供了具體的方法與覺察途徑，引領我們從混亂中走向清明。《當我開始遠行之後，學會了不等風來，也能自己啟程》並非單純講述正面思考，而是直指內心陰影的書寫。每個章節都像是深入潛意識的潛水之旅，令人震撼，也讓人重獲力量。布莉安娜的文字，柔軟而有力，是每一位尋求改變者值得擁抱的禮物。',
  },
  {
    id: 5,
    CnName: '李歐．哈里森 身心療癒導師',
    EnName: 'Leo Harrison',
    avatar: Avatar05,
    content:
      '《當我開始遠行之後，學會了不等風來，也能自己啟程》是一本少見的靈性與實用並重的心靈作品。布莉安娜用詩意卻堅實的語言，剖析我們日常生活中極少被揭開的層面：自我破壞、情感麻痺與心理依賴。這不是一本單純提供答案的書，而是一本會陪你一起提問、流淚、再度站起來的作品。它提醒我們，我們不需要等到一切「準備好了」才能出發。我會把這本書推薦給每位想真正改變人生的人，因為這不是激勵語錄的集合，而是一條真正可行的轉化之路。',
  },
  {
    id: 6,
    CnName: '張曼瑜 臨床心理師',
    EnName: 'Dr. Mandy Chang ',
    avatar: Avatar06,
    content:
      '布莉安娜．魏斯禮的書是現代心靈轉化的航海圖。在她柔軟卻堅定的文字中，我看見一位作家如何把複雜的心理旅程轉化為讀者內在的鏡子。《當我開始遠行之後，學會了不等風來，也能自己啟程》是一場誠實且不妥協的對話，邀請我們檢視自己逃避已久的傷口，並溫柔地對它們說：「我準備好了。」布莉安娜不僅是文字的建築師，更是療癒語言的發明者。這本書給了我極大的靈感，也提醒我：我們不必等風起，我們本來就有啟程的力量。',
  },
  {
    id: 7,
    CnName: '陳浩然 心靈講師',
    EnName: 'Howard Chen',
    avatar: Avatar07,
    content:
      '布莉安娜的書是我這幾年讀過最讓我感到「回家」的一本書。《當我開始遠行之後，學會了不等風來，也能自己啟程》像是一面鏡子，映照出我們最深處的渴望與恐懼。她談的不只是個人成長，更是一種深層的靈魂覺醒。在閱讀的過程中，我不斷被提醒：「療癒，不是為了變得更完美，而是為了接納原本的自己。」這本書不只是讀物，它更像是一位智者朋友，總是在你最需要的時候，輕聲對你說：「你不必等風來，因為你就是風。」',
  },
  {
    id: 8,
    CnName: '彤恩．蘇魯埃塔 電視劇女星',
    EnName: 'Dawn Zulueta',
    avatar: Avatar08,
    content:
      '來自上天的啟示。書裡的文字深深觸動了我的內心。 閱讀《當我開始遠行之後，學會了不等風來，也能自己啟程》的過程，不只是「閱讀」，而是一場與自己靈魂對話的儀式。我時常需要中斷閱讀，因為某些段落所揭示的真理太過直接、太過震撼，使我流下淚水，不是悲傷，而是一種如釋重負的釋放。布莉安娜彷彿能說出那些我們從未敢對自己坦白的話語，她理解人們如何在恐懼中築起防衛，卻又渴望連結與療癒。她的書不只是提供安慰，而是讓人願意面對自己的破碎，並鼓起勇氣踏上重建的旅程。',
  },
];

const activeReaderId = ref(null);
const isExpanded = ref(false);

function handleActive(id) {
  activeReaderId.value = activeReaderId.value === id ? null : id;
  isExpanded.value = true; // 點擊任何卡片時展開區域
}
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
      <div
        class="flex flex-wrap w-full transition-all duration-300"
        :class="isExpanded ? 'h-auto' : 'h-[540px] overflow-hidden'">
        <div
          v-for="reader in Readers"
          :key="reader.id"
          :class="
            activeReaderId === reader.id
              ? 'w-full flex justify-center'
              : 'w-full sm:w-1/2 lg:w-1/3 flex justify-center'
          ">
          <ReaderComment
            :ReaderContent="reader.content"
            :ReaderAvatar="reader.avatar"
            :ReaderCnName="reader.CnName"
            :ReaderEnName="reader.EnName"
            :id="reader.id"
            @active="handleActive" />
        </div>
      </div>
      <button
        @click="isExpanded = !isExpanded"
        class="rounded-full border px-[15px] py-1 hover:bg-gradient-green-light flex items-center gap-1 font-noto-sans text-light-black w-fit mx-auto">
        <span>{{ isExpanded ? '閱讀較少' : '閱讀更多' }}</span>
        <font-awesome-icon :icon="isExpanded ? ['fas', 'angle-up'] : ['fas', 'angle-down']" />
      </button>
    </div>
  </section>
  <!-- 作者 -->
  <section class="xl:w-[1200px] mx-auto flex flex-col mt-20">
    <AuthorCard />
  </section>
  <!-- 更多好書推薦 -->
  <section class="xl:w-[1200px] mx-auto flex flex-col gap-6 mt-20 px-5">
    <div class="mx-auto font-noto text-4xl font-bold">更多好書推薦</div>
    <span class="mx-auto font-noto-sans">
      喜歡這本書的你，也別錯過以下同樣精彩的選書，讓閱讀的深度與感動持續延伸。
    </span>
    <BookCarousel />
  </section>
</template>
