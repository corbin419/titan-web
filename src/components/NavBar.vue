<script setup>
import {ref, onMounted, onBeforeUnmount, watch} from 'vue';
import {useRouter} from 'vue-router';

import LOGO from '@/assets/img/LOGO.jpg';
import summerBook from '@/assets/img/summer.jpg';
import farBook from '@/assets/img/farBook.png';
import giveUpBook from '@/assets/img/giveUp.png';
import rainBook from '@/assets/img/rainBook.png';

import MessageBanner from '@/assets/img/messageBanner.jpg';
import Question from '@/assets/img/question.jpg';

const router = useRouter();

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
    route2: '/BookFilter',
  },
  {
    name: '精選書單',
    type: 'withBanner',
    options: [
      {
        label: '新書推薦',
        books: [
          {title: '那年夏天的海風', img: summerBook},
          {title: '當我開始遠行', img: farBook},
          {title: '在雨中相逢', img: rainBook},
        ],
      },
      {
        label: '熱銷排行',
        books: [
          {title: '放棄之前，我從沒想過相信', img: giveUpBook},
          {title: '當我開始遠行', img: farBook},
          {title: '那年夏天的海風', img: summerBook},
        ],
      },
      {
        label: '編輯推薦',
        books: [
          {title: '那年夏天的海風', img: summerBook},
          {title: '在雨中相逢', img: rainBook},
          {title: '放棄之前，我從沒想過相信', img: giveUpBook},
        ],
      },
    ],
  },
  {name: '作家專區', subitems: [], type: 'none', route: '/AuthorPage'},
  {name: '閱讀專欄', subitems: [], type: 'none', route: '/BooksInfoPage'},
  {name: '最新動態', subitems: [], type: 'none'},
  {name: '關於大田', subitems: [], type: 'none'},
  {
    name: '讀者專區',
    type: 'withBanner',
    options: [
      {
        label: '我的收藏',
        books: [
          {title: '那年夏天的海風', img: summerBook},
          {title: '在雨中相逢', img: rainBook},
          {title: '放棄之前，我從沒想過相信', img: giveUpBook},
        ],
      },
      {
        label: '讀者留言',
        books: [{title: '', img: MessageBanner}],
      },
      {
        label: '常見問題',
        books: [{title: '', img: Question}],
      },
    ],
    route2: '/BookShelfPage',
  },
];

const placeholderMap = {
  全部: '搜尋',
  書名: '請輸入書名',
  作者: '請輸入作者名稱',
  ISBN: '請輸入書籍 ISBN ',
};

const openIndex = ref(null);
const isSearchOpen = ref(false);
const searchType = ref('全部');
const showTypeDropdown = ref(false);
const keyword = ref('');
const searchTypes = ['全部', '書名', '作者', 'ISBN'];
const roundedBtn = ['法比歐', '高木直子', '台灣熱帶植物', '腦力訓練', '日語自學', '英語詞彙'];
const isMobileMenuOpen = ref(false);
const navRef = ref(null);
const selectedOptionIndex = ref(0);

function toggleDropdown(index) {
  const item = menuItems[index];
  const hasDropdown =
    (item.type === 'text' && item.subitems?.length > 0) || item.type === 'withBanner';
  openIndex.value = hasDropdown ? (openIndex.value === index ? null : index) : null;
  isSearchOpen.value = false;
  isMobileMenuOpen.value = false;
  showTypeDropdown.value = false;
}

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
  openIndex.value = null;
  isMobileMenuOpen.value = false;
  showTypeDropdown.value = false;
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  openIndex.value = null;
  isSearchOpen.value = false;
  showTypeDropdown.value = false;
}

function selectSearchType(type) {
  searchType.value = type;
  showTypeDropdown.value = false;
}

function onClickOutside(e) {
  if (!navRef.value?.contains(e.target)) {
    openIndex.value = null;
    isSearchOpen.value = false;
    isMobileMenuOpen.value = false;
    showTypeDropdown.value = false;
  }
}

function onOptionClick(option, i) {
  selectedOptionIndex.value = i;
  // 這裡可以擴充點擊banner左側option的邏輯
  console.log('點擊選項:', option);
}
// 每次切換 openIndex 時，重設 selectedOptionIndex
watch(openIndex, () => {
  selectedOptionIndex.value = 0;
});

onMounted(() => {
  document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<template>
  <nav
    ref="navRef"
    class="relative bg-white shadow-md px-10 h-[100px] flex items-center w-full"
    aria-label="主導覽列">
    <!-- 左側：手機顯示漢堡，電腦顯示LOGO -->
    <div class="flex items-center flex-1">
      <!-- 漢堡選單：手機/平板顯示，電腦隱藏 -->
      <button
        class="md:hidden text-2xl text-light-black"
        @click="toggleMobileMenu"
        aria-label="切換手機選單">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>

      <!-- LOGO：電腦板顯示，手機隱藏 -->
      <router-link to="/" class="hidden md:flex items-center" aria-label="首頁">
        <img :src="LOGO" alt="LOGO" class="w-[60px] h-[60px]" />
      </router-link>
    </div>

    <!-- 中間：手機/平板置中LOGO，電腦隱藏 -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
      <router-link to="/" aria-label="首頁">
        <img :src="LOGO" alt="LOGO" class="w-[60px] h-[60px]" />
      </router-link>
    </div>

    <!-- 中間選單：電腦顯示，手機隱藏 -->
    <ul
      class="hidden md:flex justify-center gap-6 text-light-black font-noto text-[20px] flex-nowrap"
      role="menubar">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="relative group cursor-pointer hover:text-green-gray"
        @click.stop="toggleDropdown(index)"
        role="menuitem"
        tabindex="0">
        <router-link v-if="item.route" :to="item.route" class="z-10 relative">
          {{ item.name }}
        </router-link>
        <span v-else class="z-10 relative">
          {{ item.name }}
        </span>
        <div
          class="absolute bottom-[-3px] left-0 w-full h-[3px] bg-green-light2 rounded-t-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
      </li>
    </ul>

    <!-- 右側搜尋 + 愛心ICON：電腦和手機皆顯示 -->
    <div class="flex items-center flex-1 justify-end gap-4">
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="text-light-black hover:text-light-gray cursor-pointer"
        @click="toggleSearch"
        aria-label="切換搜尋框" />
      <router-link to="/BookShelfPage" aria-label="我的收藏">
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="text-light-black hover:text-red-500 cursor-pointer" />
      </router-link>
    </div>

    <!-- 選單 dropdown -->
    <div
      v-if="openIndex !== null"
      class="absolute top-full left-0 w-full bg-white border-t border-light-gray shadow-lg z-40"
      @click.stop
      role="menu">
      <div class="max-w-[1070px] mx-auto flex justify-center items-center">
        <div
          v-if="menuItems[openIndex].type === 'text'"
          class="grid grid-cols-6 gap-4 p-4 px-6 w-full">
          <div
            v-for="(subitem, i) in menuItems[openIndex].subitems"
            :key="i"
            class="text-light-black hover:text-green-gray cursor-pointer font-noto-sans"
            @click="onSubitemClick(subitem)">
            {{ subitem }}
          </div>
        </div>
        <div
          v-else-if="menuItems[openIndex].type === 'withBanner'"
          class="flex justify-center items-center w-[1070px]">
          <div class="flex flex-col gap-4 w-1/4 text-light-black py-6">
            <div
              v-for="(option, i) in menuItems[openIndex].options"
              :key="i"
              class="flex items-center cursor-pointer hover:text-green-gray px-6"
              :class="{'text-green-gray font-bold': selectedOptionIndex === i}"
              @click="onOptionClick(option, i)">
              <span class="font-noto-sans">{{ option.label }} &gt;</span>
            </div>
          </div>
          <div class="flex gap-4 w-3/4 overflow-x-auto justify-center px-2">
            <div
              v-for="(book, i) in menuItems[openIndex].options[selectedOptionIndex].books"
              :key="i"
              :class="[
                'flex flex-col items-center cursor-pointer hover:shadow-lg transition rounded',
                menuItems[openIndex].name === '讀者專區' &&
                (menuItems[openIndex].options[selectedOptionIndex].label === '讀者留言' ||
                  menuItems[openIndex].options[selectedOptionIndex].label === '常見問題')
                  ? 'w-[400px] h-[180px] p-0 bg-white justify-center'
                  : 'max-w-[120px] p-3',
              ]">
              <img
                :src="book.img"
                :alt="book.title"
                :class="[
                  menuItems[openIndex].name === '讀者專區' &&
                  (menuItems[openIndex].options[selectedOptionIndex].label === '讀者留言' ||
                    menuItems[openIndex].options[selectedOptionIndex].label === '常見問題')
                    ? 'w-full h-full object-contain'
                    : 'w-24 h-32 object-cover rounded',
                ]" />
              <span v-if="book.title" class="mt-2 text-sm text-center text-gray">{{
                book.title
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center p-1 bg-green-light2">
        <router-link v-if="menuItems[openIndex].route2" :to="menuItems[openIndex].route2">
          <span
            class="font-noto-sans text-light-black hover:underline underline-offset-4 decoration-2"
            >{{ menuItems[openIndex].name }} &gt;</span
          >
        </router-link>
        <span v-else class="cursor-default text-gray-400">
          {{ menuItems[openIndex].name }} &gt;
        </span>
      </div>
    </div>

    <!-- 搜尋欄 -->
    <div
      v-if="isSearchOpen"
      class="absolute top-full left-0 w-full bg-white border-t border-light-gray shadow-lg z-40 flex-col"
      @click.stop>
      <div class="max-w-[1070px] mx-auto px-6 py-4">
        <div class="flex">
          <div class="relative">
            <button
              class="border border-light-gray px-4 py-2 text-gray hover:bg-light-gray flex items-center gap-1 rounded-tl-full rounded-bl-full"
              @click="showTypeDropdown = !showTypeDropdown"
              aria-haspopup="listbox"
              :aria-expanded="showTypeDropdown">
              {{ searchType }} <span class="text-sm">▼</span>
            </button>
            <ul
              v-if="showTypeDropdown"
              class="absolute top-full left-0 mt-1 bg-white border border-light-gray rounded shadow z-10 w-full"
              role="listbox">
              <li
                v-for="type in searchTypes"
                :key="type"
                @click="selectSearchType(type)"
                class="px-4 py-2 hover:bg-light-gray cursor-pointer"
                role="option">
                {{ type }}
              </li>
            </ul>
          </div>
          <input
            v-model="keyword"
            type="text"
            :placeholder="placeholderMap[searchType]"
            class="flex-1 border border-light-gray rounded px-4 py-2 focus:outline-none bg-gradient-green-light rounded-tr-full rounded-br-full"
            aria-label="搜尋輸入框" />
          <button class="text-white px-4 py-2 rounded" aria-label="搜尋按鈕">
            <font-awesome-icon icon="magnifying-glass" class="text-gray" />
          </button>
        </div>
      </div>
      <div class="max-w-[1070px] mx-auto flex flex-col items-center gap-3 py-2">
        <span>其他讀者都在搜</span>
        <div class="flex justify-center gap-4 flex-wrap">
          <button
            class="bg-light-gray rounded-full px-4 py-2"
            v-for="(btnName, i) in roundedBtn"
            :key="i">
            {{ btnName }}
          </button>
        </div>
      </div>
    </div>

    <!-- 手機版側邊選單 -->
    <transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 h-full w-3/4 bg-white z-50 shadow-lg overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="手機選單">
        <div class="p-4 flex flex-col">
          <button @click="toggleMobileMenu" class="mb-4 w-fit ml-auto" aria-label="關閉手機選單">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-xl" />
          </button>
          <ul class="flex flex-col gap-3">
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              class="text-lg text-light-black hover:text-green-gray border-b-2 border-gradient-green-light text-center py-2 font-noto-sans"
              @click="toggleMobileMenu">
              <router-link v-if="item.route" :to="item.route">
                {{ item.name }}
              </router-link>
              <span v-else>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
