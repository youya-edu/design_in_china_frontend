<template>
  <div class="flex flex-col space-y-4">
    <span class="flex items-center justify-center space-x-2">
      <span class="h-px bg-gray-400 w-14"></span>
      <span class="font-normal text-gray-500">{{
        $t("login_with_other_ways")
      }}</span>
      <span class="h-px bg-gray-400 w-14"></span>
    </span>
    <a
      href="#"
      class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
    >
      <span> <AIconGoogle /> </span>
      <span class="text-sm font-medium text-gray-800 group-hover:text-white">{{
        $t("login_google_account")
      }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AIconGoogle } from "@/components";

export default defineComponent({
  components: {
    AIconGoogle,
  },
});
</script>
