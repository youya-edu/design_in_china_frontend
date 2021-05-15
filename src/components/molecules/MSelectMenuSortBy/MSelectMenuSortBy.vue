<template>
  <div class="flex mt-2 align-middle">
    <div class="text-sm mr-2">{{ content }}</div>
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
      default: "Sort by",
    },
  },
});
</script>
