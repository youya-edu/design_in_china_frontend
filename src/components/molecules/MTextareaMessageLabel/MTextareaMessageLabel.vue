<template>
  <div class="relative mb-2">
    <div class="my-2 text-sm font-medium text-gray-700">{{ label }}</div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="p-3 text-sm w-full h-20 rounded border border-red focus:outline-none"
      placeholder="写点什么..."
    ></textarea>
    <div class="text-right h-5 text-xs">共 {{ count }} 字</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    count(): number {
      return this.modelValue ? this.modelValue.length : 0;
    },
  },
});
</script>
