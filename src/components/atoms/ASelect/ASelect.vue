<template>
  <select @change="$emit('onChange', $event.target.value)">
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
