<template>
  <div v-show="show" class="text-left h-5 text-xs" :class="classObject">
    {{ content }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      require: true,
      default: "info",
    },
    show: {
      type: Boolean,
    },
    content: {
      type: String,
    },
  },
  computed: {
    classObject(): { [key: string]: boolean } {
      return {
        "text-green-500": this.type === "success",
        "text-red-500": this.type === "error",
      };
    },
  },
});
</script>
