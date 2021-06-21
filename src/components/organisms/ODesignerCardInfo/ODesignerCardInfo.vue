<template>
  <div class="flex items-center p-2 mb-1">
    <div class="w-12">
      <img :src="designer.avatar" loading="lazy" />
    </div>
    <div class="ml-4 flex flex-col text-left">
      <div class="text-lg">{{ designer.username }}</div>
      <div class="text-xs text-gray-500">{{ designer.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/domain";
export default defineComponent({
  props: {
    designer: Object as PropType<User>,
  },
});
</script>
