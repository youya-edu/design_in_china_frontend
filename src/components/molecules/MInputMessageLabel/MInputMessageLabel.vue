<template>
  <div class="relative mb-4">
    <div class="my-2 text-sm font-medium text-gray-700">{{ label }}</div>
    <AInput
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="mb-1"
    />
    <div v-show="showMessage" class="h-5 text-xs text-red-500">
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AInput } from "@/components/atoms";

export default defineComponent({
  components: { AInput },
  props: {
    type: {
      type: String,
    },
    label: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    message: {
      type: String,
    },
    showMessage: {
      type: Boolean,
    },
  },
});
</script>
