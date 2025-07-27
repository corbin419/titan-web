<script setup>
defineProps({
  btnName: String,
  highlight: Boolean, // 新增：是否高亮顯示
});
</script>

<template>
  <button
    class="w-[220px] rounded-[4px] font-noto text-start text-[16px] p-3 min-w-[220px]"
    :class="[
      highlight ? 'bg-gradient-green-light text-light-black' : 'text-light-black hover:bg-gradient-green-light',
    ]">
    {{ btnName }}
  </button>
</template>
