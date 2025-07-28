<script setup>
import {useRouter} from 'vue-router';

import SideBar from '@/components/SideBar.vue';
import FavBookCard from '@/components/FavBook.vue';

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

const router = useRouter();

function goToPage(book) {
  if (book.route) {
    router.push(book.route);
  }
}

const Books = [
  {
    id: 1,
    name: '當我開始遠行之後',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook01,
    route: '/BooksInfoPage',
    content:
      '真正需要翻越的，不是眼前的高山，而是內心那座難以言說的「自己」。在想望與現實之間，在渴望的生活與每日慣性之中，我們時常感到受困。那並非命運使然，而是我們自己，在無聲中阻擋了前行的路。也許你早已察覺，那些讓你止步不前的山，名字叫做：依賴、焦慮、羞愧、人際撕裂、金錢焦灼；又或者，它們更無形，像是一種揮之不去的不安感，一種對自己始終無法滿意的情緒陰影。但這次，我們選擇直視這些山。我們學會從破壞性的慣性中擷取線索，從身體與大腦的連結中認識自己；從潛意識的深處釋放過往，然後練習成為那個未來版本的自己——更穩定、更真實，也更自由。有一天，那些曾經讓你氣喘吁吁的高峰，將被你拋在身後，模糊得幾乎看不見。但你在攀登中塑造的模樣，會靜靜陪你一生。因為人生中，那些高山從來不是阻礙，它們，是通往真實的禮物。',
  },
  {
    id: 2,
    name: '零點叛變',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook02,
    content:
      '在一個所有人都被要求於午夜前入眠、清晨零點重新啟動人生的城市，17歲的索伊在某夜午夜醒來，發現城市仍運轉，但世界像是被切割成兩半。這場「零點叛變」讓她開始接觸一群「夜行者」，他們在政府不允許的時間思考、創作、記憶。當索伊逐漸理解自己失去的過去，也面臨選擇：安分留在白晝，還是在黑夜中尋回自由。',
  },
  {
    id: 3,
    name: '鏽蝕王冠',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook03,
    content:
      '曾經統治大陸的「鐵之王朝」，如今只剩下腐鏽的王冠與支離破碎的後裔。流亡王子艾登在父親死後，接下了這頂象徵沒落的王冠。他帶著僅存的幾位忠誠者，穿越荒原、沼澤與被遺忘的城市，尋找曾經背叛王朝的五個貴族後裔。這是一段關於責任、贖罪與記憶的旅程——在權力鏽蝕之前，能否找到一種不再建立於征服的統治？',
  },
  {
    id: 4,
    name: '你也想念我嗎?',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook04,
    content:
      '本書收錄兩位分隔多年的青梅竹馬間的一百封書信（或電郵）。一人移居國外、一人留在故鄉，他們在不聯絡的八年後，因一次意外重新開始書信往來。字裡行間透露的不只是對彼此的想念，還有對自己過去選擇的懊悔、無法言說的愛、與當年來不及面對的情感。這不僅是對舊情的書寫，也是兩人自我療癒的過程。',
  },
  {
    id: 5,
    name: '關於放棄改變的筆記?',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook05,
    content:
      '這本書並不是鼓勵你「停止改變」，而是記錄那些我們曾經試圖改變、最終放棄的時刻，以及放棄之後，生活其實還是繼續下去的經驗。作者以簡潔而銳利的語句，記下那些面對人生低潮、失敗、自我懷疑時的真實片段，並試圖重新定義「不改變」是否真的等同於失敗。',
  },
  {
    id: 6,
    name: '放棄之前，我從來沒想過相信?',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook06,
    content:
      '女主角琪安在經歷一次重大的職涯與情感崩毀後，決定放棄所有努力過的事，回到一座小鎮躲起來。不料在當地一家書店打工時，她認識了一群也在「逃避」的人。透過日常交流與彼此的故事，她逐漸明白，原來「相信」不是一開始就能做到的事，而是一次次跌倒後選擇回頭的勇氣。',
  },
  {
    id: 7,
    name: '寫給逃避的改變',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook07,
    content:
      '這是一本寫給那些覺得自己「太晚了」、「不敢改變」的人的書。以一封封「寫給你」的短文形式，作者透過溫柔而真摯的語氣與讀者對話，談論拖延、恐懼、選擇、與那些我們心底深處不敢面對的「改變」。不批判、不催促，只是陪伴你承認：有些時候，我們選擇逃避，是因為我們還在等那個能一起走下去的理由。',
  },
  {
    id: 8,
    name: '漠然，是累積信任的練習',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook08,
    content:
      '一段感情的開始，往往是熱烈與投入；但維繫的過程，卻像緩慢的河流——平靜甚至讓人懷疑是否還在流動。本書透過一對長期同居卻分隔兩地的伴侶，記錄他們面對冷淡、爭吵、沉默的生活日常。在一段看似「漠然」的關係裡，兩人是否能學會另一種「信任的語言」？',
  },
  {
    id: 9,
    name: '日光下的慢練習',
    author: '布莉安娜．魏斯禮',
    img: ShelfBook09,
    content:
      '一個月三十天，三十篇日光下的練習。作者試圖在喧囂與焦慮之中，以簡單的日常作為練習，例如「每天散步十分鐘」、「不在手機裡度過早晨」、「記錄今天喝過的第一口水」。每一篇都結合自省與觀察，邀請讀者一起慢下來，學習和當下的自己好好相處。',
  },
  {
    id: 10,
    name: '艾梅莉塔與她的朋友們',
    author: '愛麗絲．費曼多',
    img: ShelfBook10,
    content:
      '3歲的魔髮族女孩艾梅莉塔剛進入幼兒園，對新環境既緊張又好奇。她的頭髮會動、會幫她打招呼，也會調皮地把粉筆偷藏起來。在這所充滿各種族孩子的神奇學校裡，她結識了章魚女孩美、水母公主、橘子雞女孩艾蘭妮和老鼠廚師的小孩。每一則短篇記錄一場小冒險與成長，也描繪出友誼、包容與勇氣的意義。適合大人與孩子一同閱讀。',
  },
];
</script>

<template>
  <section class="flex">
    <div class="hidden sm:block sm:w-1/3 max-w-[380px]">
      <SideBar />
    </div>

    <div class="flex flex-col w-full px-2 xl:px-[100px] py-10">
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
      <div class="w-full flex flex-wrap justify-center md:justify-between gap-3 sm:gap-0">
        <div
          v-for="book in Books"
          :key="book.id"
          class="w-full xl:w-1/2 flex justify-center"
          @click="goToPage(book)">
          <FavBookCard
            :FavBook="book.img"
            :title="book.name"
            :author="book.author"
            :content="book.content" />
        </div>
      </div>
      <!-- 書頁 -->
      <!-- <div class="w-full border h-[40px]"></div> -->
    </div>
  </section>
</template>
