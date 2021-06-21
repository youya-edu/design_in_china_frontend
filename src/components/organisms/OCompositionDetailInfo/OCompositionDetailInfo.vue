<template>
  <div class="flex flex-col text-left space-y-4">
    <div class="text-4xl">
      {{ compositionContent.name }}
    </div>
    <div>
      {{ compositionContent.description }}
    </div>
    <div>作者：{{ compositionContent.author }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    composition: null,
  },
  computed: {
    // eslint-disable-next-line
    compositionContent(): any {
      return this.composition ? this.composition : {};
    },
  },
});
</script>
