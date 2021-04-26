<template>
  <div>
    <div class="my-2 text-sm font-medium text-gray-700">头像</div>
    <div class="flex items-center">
      <span
        class="mt-2 inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-100 border"
      >
        <img class="h-24 w-24 rounded-full" :src="avatar" alt="avatar" />
      </span>
      <button
        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        更改头像
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    avatar: {
      type: String,
    },
  },
});
</script>
