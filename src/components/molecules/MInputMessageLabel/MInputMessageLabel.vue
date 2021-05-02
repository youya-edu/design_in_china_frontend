<template>
  <div class="relative mb-4">
    <div class="my-2 text-sm font-medium text-gray-700">{{ label }}</div>
    <AInput
      class="mb-1"
      :type="type"
      :value="modelValue"
      :hasError="hasError"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
    <AMessage
      :type="message.type"
      :show="message.show"
      :content="message.content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  AInput,
  AMessage,
  AMessageType,
  AMessageLevel,
} from "@/components/atoms";

export default defineComponent({
  components: { AInput, AMessage },
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
    hasError: {
      type: Boolean,
    },
    message: {
      type: Object as PropType<AMessageType>,
      default: {
        type: AMessageLevel.INFO,
        show: false,
        content: "",
      },
    },
    placeholder: {
      type: String,
    },
  },
});
</script>
