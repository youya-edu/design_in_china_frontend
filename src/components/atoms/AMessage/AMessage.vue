<template>
  <div v-show="show" class="text-left h-5 text-xs" :class="classObject">
    {{ content }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { AMessageLevel } from "./types";

export default defineComponent({
  props: {
    type: {
      type: String,
      require: true,
      default: AMessageLevel.INFO,
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
        "text-green-500": this.type === AMessageLevel.SUCCESS,
        "text-red-500": this.type === AMessageLevel.ERROR,
      };
    },
  },
});
</script>
