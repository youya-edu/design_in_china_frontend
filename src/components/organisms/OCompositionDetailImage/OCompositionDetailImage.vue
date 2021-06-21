<template>
  <div>
    <img :src="compositionImage" class="w-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Composition } from "@/domain";
export default defineComponent({
  props: {
    composition: {
      type: Object as PropType<Composition>,
    },
  },
  computed: {
    compositionImage(): string {
      return this.composition ? this.composition.image : "";
    },
  },
});
</script>
