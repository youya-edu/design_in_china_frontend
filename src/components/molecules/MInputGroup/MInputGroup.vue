<template>
  <div class="relative">
    <AInput
      v-for="each in inputList"
      :key="each.id"
      :type="each.type"
      :placeholder="each.placeHolder"
      v-model="each.modelValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AInput } from "@/components/atoms/AInput";
import { InputItem } from "./types";

export default defineComponent({
  components: { AInput },
  props: {
    inputList: {
      type: Array as PropType<Array<InputItem>>,
    },
  },
});
</script>
