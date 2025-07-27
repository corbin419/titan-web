<script setup>
import {useRouter} from 'vue-router';

import BooksCard from '@/components/BooksCard.vue';
import SideBar from '@/components/SideBar.vue';

import ShelfBook01 from '@/assets/img/ShelfBook/ShelfBook01.png';
import ShelfBook02 from '@/assets/img/ShelfBook/ShelfBook02.png';
import ShelfBook03 from '@/assets/img/ShelfBook/ShelfBook03.png';
import ShelfBook04 from '@/assets/img/ShelfBook/ShelfBook04.png';
import ShelfBook05 from '@/assets/img/ShelfBook/ShelfBook05.png';
import ShelfBook06 from '@/assets/img/ShelfBook/ShelfBook06.png';
import ShelfBook07 from '@/assets/img/ShelfBook/ShelfBook07.png';
import ShelfBook08 from '@/assets/img/ShelfBook/ShelfBook08.png';
import ShelfBook09 from '@/assets/img/ShelfBook/ShelfBook09.png';
import ShelfBook10 from '@/assets/img/ShelfBook/ShelfBook10.png';
import ShelfBook11 from '@/assets/img/ShelfBook/ShelfBook11.png';
import ShelfBook12 from '@/assets/img/ShelfBook/ShelfBook12.png';
import ShelfBook13 from '@/assets/img/ShelfBook/ShelfBook13.png';
import ShelfBook14 from '@/assets/img/ShelfBook/ShelfBook14.png';
import ShelfBook15 from '@/assets/img/ShelfBook/ShelfBook15.png';
import ShelfBook16 from '@/assets/img/ShelfBook/ShelfBook16.png';
import ShelfBook17 from '@/assets/img/ShelfBook/ShelfBook17.png';
import ShelfBook18 from '@/assets/img/ShelfBook/ShelfBook18.png';
import ShelfBook19 from '@/assets/img/ShelfBook/ShelfBook19.png';
import ShelfBook20 from '@/assets/img/ShelfBook/ShelfBook20.png';

const Books = [
  {
    id: 1,
    img: ShelfBook01,
    title: '當我開始遠行之後',
    author: '布莉安娜．魏斯禮',
    route: '/BooksInfoPage',
  },
  {
    id: 2,
    img: ShelfBook02,
    title: '零點的叛變',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 3,
    img: ShelfBook03,
    title: '你也想念我嗎',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 4,
    img: ShelfBook04,
    title: '在雨中的重逢',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 5,
    img: ShelfBook05,
    title: '季風吹的約定',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 6,
    img: ShelfBook06,
    title: '日光下的慢練習',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 7,
    img: ShelfBook07,
    title: '關於放棄改變的筆記',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 8,
    img: ShelfBook08,
    title: '放棄之前我從來沒想過相信',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 9,
    img: ShelfBook09,
    title: '寫給逃避的改變',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 10,
    img: ShelfBook10,
    title: '靜候果實',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 11,
    img: ShelfBook11,
    title: '像跌倒依樣生活',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 12,
    img: ShelfBook12,
    title: '迷霧花園裡的秘密小徑',
    author: '布莉安娜．魏斯禮',
  },
  {
    id: 13,
    img: ShelfBook13,
    title: '艾梅莉塔與她的朋友們',
    author: '愛麗絲．費曼多',
  },
  {
    id: 14,
    img: ShelfBook14,
    title: '末班列車的乘客',
    author: '勞勃．克拉克',
  },
  {
    id: 15,
    img: ShelfBook15,
    title: '劇作家之死',
    author: '瑞秋亞．當斯',
  },
  {
    id: 16,
    img: ShelfBook16,
    title: '時間煮雨的午後',
    author: '黃思潔',
  },
  {
    id: 17,
    img: ShelfBook17,
    title: '古樹之誓',
    author: '派翠西亞．泰勒',
  },
  {
    id: 18,
    img: ShelfBook18,
    title: '致命催眠',
    author: '唐納．賈西亞',
  },
  {
    id: 19,
    img: ShelfBook19,
    title: '沉默不說的理由',
    author: '黃沛綺',
  },
  {
    id: 20,
    img: ShelfBook20,
    title: '分手之前我從來沒想用平靜',
    author: '李鴻予',
  },
];

const router = useRouter();

function goToPage(book) {
  if (book.route) {
    router.push(book.route);
  }
}
</script>

<template>
  <section class="flex">
    <div class="hidden sm:block sm:w-1/3 max-w-[380px]">
      <SideBar />
    </div>

    <div class="flex flex-col w-full px-8 xl:px-[180px] py-10">
      <!-- 頂部資訊 -->
      <div class="w-full flex justify-between p-4">
        <span class="font-noto text-[28px] font-bold text-light-black">全部書籍</span>
        <div class="flex gap-5 justify-center items-center pr-5">
          <font-awesome-icon
            icon="fa-solid fa-list"
            class="text-light-black hover:text-light-gray" />
          <font-awesome-icon
            icon="fa-solid fa-grip"
            class="text-light-black hover:text-light-gray" />
        </div>
      </div>
      <!-- 書籍列表 -->
      <div class="w-full flex flex-wrap justify-center md:justify-between">
        <div
          class="flex w-[70%] sm:w-1/2 md:w-1/3 xl:w-1/5 cursor-pointer hover:shadow"
          v-for="book in Books"
          :key="book.id"
          @click="goToPage(book)">
          <BooksCard :BookName="book.title" :author="book.author" :FavBook="book.img" />
        </div>
      </div>
      <!-- 書頁 -->
      <!-- <div class="w-full border h-[40px]"></div> -->
    </div>
  </section>
</template>
