<script setup>
import {computed} from 'vue';

const props = defineProps({
  progress: Number,
});

// 安全計算進度，確保為 0~100 的整數
const safeProgress = computed(() => {
  if (typeof props.progress !== 'number' || isNaN(props.progress)) return 0;
  return Math.min(100, Math.max(0, Math.round(props.progress)));
});
</script>

<template>
  <footer class="relative flex justify-center items-center px-8 bg-white h-[100px] shadow-md">
    <div class="w-full max-w-4xl">
      <!-- 進度條 -->
      <div class="h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          class="h-full bg-green-main transition-all duration-500"
          :style="{width: safeProgress + '%'}"></div>
      </div>

      <!-- 百分比文字 -->
      <div class="text-center text-sm mt-2 text-gray-500">{{ safeProgress }}%</div>
    </div>
  </footer>
</template>
