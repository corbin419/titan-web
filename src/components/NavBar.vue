<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import LOGO from '@/assets/img/LOGO.jpg';
import summerBook from '@/assets/img/summer.jpg';

const menuItems = [
  {
    name: '全部書籍',
    type: 'text',
    subitems: [
      '文學小說',
      '圖文插畫',
      '心理勵志',
      '自然科普',
      '醫療保健',
      '旅遊休閒',
      '藝術技藝',
      '親子童書',
      '宗教命理',
      '商業財經',
      '學習語言',
      '生活飲食',
      '社科人文',
      '得獎作品',
      '周邊商品',
    ],
  },
  {
    name: '精選書單',
    type: 'withBanner',
    options: ['新書推薦', '熱銷排行', '編輯推薦'],
    banner: [
      {
        title: '那年夏天的海風',
        img: summerBook,
      },
      {
        title: '當我開始遠行',
        img: summerBook,
      },
      {
        title: '在雨中相逢',
        img: summerBook,
      },
      {
        title: '放棄之前，我從沒想過相信',
        img: summerBook,
      },
    ],
  },
  {name: '作家專區', subitems: [], type: 'none'},
  {name: '閱讀專欄', subitems: [], type: 'none'},
  {name: '最新動態', subitems: [], type: 'none'},
  {name: '關於大田', subitems: [], type: 'none'},
  {
    name: '讀者專區',
    type: 'withBanner',
    options: ['我的收藏', '讀者留言', '常見問題'],
    banner: [],
  },
];
const openIndex = ref(null);
const navRef = ref(null);
const isSearchOpen = ref(false);

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
  openIndex.value = null; // 如果正在開其他選單就關掉
}

function toggleDropdown(index) {
  const item = menuItems[index];

  const hasDropdown =
    (item.type === 'text' && item.subitems && item.subitems.length > 0) ||
    item.type === 'withBanner';

  openIndex.value = hasDropdown ? (openIndex.value === index ? null : index) : null;
}

function onClickOutside(event) {
  if (!navRef.value) return;
  if (!navRef.value.contains(event.target)) {
    openIndex.value = null;
  }
  if (!navRef.value.contains(event.target)) {
    openIndex.value = null;
    isSearchOpen.value = false; //搜尋欄位
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<template>
  <nav ref="navRef" class="relative h-[100px] bg-white shadow-md flex flex-row font-noto">
    <!-- LOGO -->
    <div class="flex-[2_2_0%] flex justify-center items-center">
      <img :src="LOGO" alt="大田LOGO" class="w-[60px] h-[60px]" />
    </div>

    <!-- 選單選項 -->
    <ul class="flex flex-row gap-4 flex-[8_8_0%] justify-center items-center relative">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="relative group px-2 py-1 cursor-pointer text-gray-700 select-none"
        @click.stop="toggleDropdown(index)">
        <span class="z-10 relative">{{ item.name }}</span>

        <!-- 底線（hover 用） -->
        <div
          class="absolute bottom-0 left-0 w-full h-[2px] bg-[#D6E6DC] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      </li>
    </ul>

    <!-- 下拉選單（點擊展開） -->
    <div
      v-if="openIndex !== null"
      class="absolute top-full left-0 w-full bg-white border-t border-gray-300 shadow-lg z-40"
      @click.stop>
      <div class="max-w-[1200px] mx-auto px-6 py-4 flex justify-center items-center">
        <!-- 純文字分類 -->
        <div
          v-if="menuItems[openIndex].type === 'text'"
          class="grid grid-cols-4 gap-3 p-4 min-w-[60%] px-6">
          <div
            v-for="(subitem, i) in menuItems[openIndex].subitems"
            :key="i"
            class="text-gray-700 hover:text-green-700 cursor-pointer">
            {{ subitem }}
          </div>
        </div>

        <!-- 卡片格式精選 -->
        <div
          v-else-if="menuItems[openIndex].type === 'withBanner'"
          class="flex w-[60%] justify-center items-center">
          <!-- 左邊子選單 -->
          <div class="flex flex-col gap-4 w-1/4 text-gray-700">
            <div
              v-for="(option, i) in menuItems[openIndex].options"
              :key="i"
              class="flex items-center cursor-pointer hover:text-green-700 px-6">
              <span>{{ option }}&gt;</span>
            </div>
          </div>

          <!-- 右邊推薦卡片 -->
          <div class="flex gap-auto w-3/4 overflow-x-auto justify-end">
            <div
              v-for="(book, i) in menuItems[openIndex].banner"
              :key="i"
              class="flex flex-col items-center cursor-pointer hover:shadow-lg transition p-2 rounded max-w-[120px]">
              <img :src="book.img" alt="book.title" class="w-24 h-32 object-cover rounded" />
              <span class="mt-2 text-sm text-center text-gray-800">{{ book.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 最下方提示（僅限全部書籍） -->
      <div
        class="w-full flex justify-center items-center p-1 bg-gray-100"
        v-if="menuItems[openIndex].name === '全部書籍' || '精選書單'">
        <span>全部書籍 ></span>
      </div>
    </div>

    <!-- 搜尋/書櫃 icon -->
    <div class="flex-[2_2_0%] flex items-center justify-center gap-4">
      <font-awesome-icon icon="magnifying-glass" class="text-gray-500" @click="toggleSearch" />
      <font-awesome-icon
        :icon="['far', 'heart']"
        class="text-gray-500 hover:text-red-500 transition-colors duration-300" />
    </div>
    <!-- 搜尋欄下拉區塊 -->
    <div
      v-if="isSearchOpen"
      class="absolute top-full left-0 w-full bg-white border-t border-gray-300 shadow-lg z-40"
      @click.stop>
      <div class="max-w-[1200px] mx-auto px-6 py-4">
        <input
          type="text"
          placeholder="請輸入書名、作者、關鍵字"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
      </div>
    </div>
  </nav>
</template>
