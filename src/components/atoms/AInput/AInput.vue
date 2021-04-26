<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="[isError ? errorClass : normalClass]"
    class="appearance-none h-8 w-full rounded px-3 text-sm focus:outline-none"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue"],
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    isError: {
      type: Boolean,
    },
  },
  data() {
    return {
      normalClass: "border border-gray-300 focus:border-gray-500",
      errorClass: "border border-red-500",
    };
  },
});
</script>
