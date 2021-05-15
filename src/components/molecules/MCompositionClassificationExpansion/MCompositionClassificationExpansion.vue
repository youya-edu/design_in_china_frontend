<template>
  <div class="flex mb-3 justify-between align-middle">
    <div class="text-sm">{{ content }}</div>
    <div><AIconChevronDown /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AIconChevronDown } from "@/components";

export default defineComponent({
  components: {
    AIconChevronDown,
  },
  props: {
    content: {
      type: String,
      default: "分类",
    },
  },
});
</script>
