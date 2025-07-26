<script setup>
defineProps({
  ReaderContent: String,
  ReaderAvatar: Image,
  ReaderCnName: String,
  ReaderEnName: String,
});
</script>

<template>
  <div class="w-full sm:w-[380px]">
    <div class="relative bg-white rounded-md flex flex-col">
      <div
        class="px-12 my-6 font-noto-sans text-light-black text-base leading-relaxed line-clamp-8">
        {{ ReaderContent }}
      </div>
      <div class="w-full h-1/6 px-12 py-4 text-green-main text-md font-noto z-10 flex items-center">
        ★★★★★
      </div>
      <div
        class="absolute w-0 h-0 border-t-[45px] border-b-[45px] border-l-[45px] border-t-transparent border-b-transparent border-l-white bottom-[-45px]"></div>
    </div>
    <div class="flex items-center gap-6 px-8 py-4">
      <div class="w-[76px] h-[76px] rounded-full overflow-hidden flex items-center justify-center">
        <img :src="ReaderAvatar" alt="avatar" class="w-full h-full object-cover" />
      </div>
      <div class="font-noto-sans flex flex-col">
        <span class="text-black text-sm">{{ ReaderCnName }}</span>
        <span class="text-light-gray text-[12px]">{{ ReaderEnName }}</span>
      </div>
    </div>
  </div>
</template>
