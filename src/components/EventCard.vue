<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-col max-w-[590px]">
    <!-- 圖片 -->
    <div>
      <img :src="image" :alt="title" class="w-full h-auto object-cover rounded" />
    </div>

    <!-- 文字區 -->
    <div class="flex flex-col p-2">
      <div class="text-light-black font-semibold mb-1">
        {{ title }}
      </div>
      <div class="line-clamp-5 text-[14px] text-light-black leading-relaxed">
        {{ content }}
      </div>
    </div>
  </div>
</template>
