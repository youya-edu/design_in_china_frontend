<template>
  <select
    class="w-full border bg-white shadow-sm px-2 py-2 text-left cursor-pointer focus:outline-none sm:text-sm"
    @change="$emit('onChange', $event.target.value)"
  >
    <option
      v-for="option in options"
      :key="`option-key-${option.value}`"
      :value="option.value"
      :selected="option.selected"
    >
      {{ option.text }}
    </option>
  </select>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    options: {
      type: Object,
    },
  },
});
</script>
