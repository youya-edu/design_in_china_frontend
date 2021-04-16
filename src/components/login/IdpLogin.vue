<template>
  <div class="flex flex-col space-y-4">
    <a
      href="#"
      class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
    >
      <span> <google-icon /> </span>
      <span class="text-sm font-medium text-gray-800 group-hover:text-white"
        >Google 账号登录</span
      >
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoogleIcon from "@/components/login/GoogleIcon.vue";

export default defineComponent({
  components: {
    GoogleIcon,
  },
});
</script>
