<script setup>
defineProps({
  image: {
    type: String,
    default: '', // 使用者可傳入圖片路徑
  },
  title: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  year: {
    type: String,
    default: '',
  },
  time: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  speaker: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-col">
    <!-- 圖片 -->
    <div>
      <img :src="image || defaultImage" :alt="title" class="w-[590px] h-auto object-cover rounded" />
    </div>

    <!-- 文字區 -->
    <div class="flex p-2 gap-6 w-full">
      <!-- 左側時間區 -->
      <div class="text-light-black font-noto-sans mb-1 flex flex-col gap-2 w-[20%]">
        <div class="text-sm border-b-2 border-light-gray w-fit">{{ year }}</div>
        <div class="text-2xl sm:text-4xl">{{ date }}</div>
      </div>

      <!-- 中線 -->
      <div class="border-l-2 border-light-black"></div>

      <!-- 右側內容 -->
      <div class="text-[14px] text-light-black flex flex-col w-[70%] gap-2">
        <div class="font-bold font-noto-sans text-light-black">
          {{ title }}
        </div>
        <div class="flex gap-6 flex-wrap">
          <div v-if="time"><font-awesome-icon :icon="['far', 'clock']" /> {{ time }}</div>
          <div v-if="location">
            <font-awesome-icon :icon="['fas', 'location-dot']" /> {{ location }}
          </div>
        </div>
        <div v-if="speaker"><font-awesome-icon :icon="['fas', 'book-open']" /> {{ speaker }}</div>
      </div>
    </div>
  </div>
</template>
