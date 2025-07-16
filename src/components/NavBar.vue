<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import LOGO from '@/assets/img/LOGO.jpg';
import summerBook from '@/assets/img/summer.jpg';
import farBook from '@/assets/img/farbook.png';
import giveupBook from '@/assets/img/giveup.png';
import rainBook from '@/assets/img/rainbook.png';

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
        img: farBook,
      },
      {
        title: '在雨中相逢',
        img: rainBook,
      },
      {
        title: '放棄之前，我從沒想過相信',
        img: giveupBook,
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

//placeholder 文字
const placeholderMap = {
  全部: '搜尋',
  書名: '請輸入書名',
  作者: '請輸入作者名稱',
  ISBN: '請輸入書籍 ISBN ',
};

const openIndex = ref(null);
const navRef = ref(null);
const isSearchOpen = ref(false);
const searchType = ref('全部'); // 預設搜尋類型
const showTypeDropdown = ref(false);
const keyword = ref('');
const searchTypes = ['全部', '書名', '作者', 'ISBN'];

function selectSearchType(type) {
  searchType.value = type;
  showTypeDropdown.value = false;
}

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
    <ul
      class="flex flex-row gap-3 flex-[8_8_0%] justify-between items-center relative max-w-[1070px] px-4">
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
      <div class="max-w-[1070px] mx-auto flex justify-center items-center">
        <!-- 純文字分類 -->
        <div
          v-if="menuItems[openIndex].type === 'text'"
          class="grid grid-cols-4 gap-3 p-4 px-6 w-full">
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
          class="flex justify-center items-center w-[1070px]">
          <!-- 左邊子選單 -->
          <div class="flex flex-col gap-4 w-1/4 text-gray-700 py-6">
            <div
              v-for="(option, i) in menuItems[openIndex].options"
              :key="i"
              class="flex items-center cursor-pointer hover:text-green-700 px-6">
              <span>{{ option }}&gt;</span>
            </div>
          </div>

          <!-- 右邊推薦卡片 -->
          <div class="flex gap-4 w-3/4 overflow-x-auto justify-center">
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
      <div class="max-w-[1070px] mx-auto px-6 py-4">
        <div class="flex">
          <!-- 類型下拉 -->
          <div class="relative">
            <button
              class="border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-1 rounded-tl-full rounded-bl-full"
              @click="showTypeDropdown = !showTypeDropdown">
              {{ searchType }} <span class="text-sm">▼</span>
            </button>
            <!-- 下拉選單 -->
            <ul
              v-if="showTypeDropdown"
              class="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow z-10 w-full">
              <li
                v-for="type in searchTypes"
                :key="type"
                @click="selectSearchType(type)"
                class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {{ type }}
              </li>
            </ul>
          </div>

          <!-- 搜尋輸入框 -->
          <input
            v-model="keyword"
            type="text"
            :placeholder="placeholderMap[searchType]"
            class="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none min-w-fit bg-[#F3F5F4] rounded-tr-full rounded-br-full" />
          <!-- 搜尋按鈕 -->
          <button class="text-white px-4 py-2 rounded">
            <font-awesome-icon icon="magnifying-glass" class="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
