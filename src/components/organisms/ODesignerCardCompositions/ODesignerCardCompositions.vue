<template>
  <div class="compositions-container whitespace-nowrap">
    <div class="w-2/3 h-full text-left">
      <div
        v-for="composition in compositionCollection.compositions"
        :key="composition.id"
        class="inline-block p-1.5 h-full"
      >
        <img :src="composition.image" class="h-full" loading="lazy" />
      </div>
    </div>
    <div class="flex w-1/3 h-full compositions-count">
      <div class="w-1/3 h-full white-gradient"></div>
      <div class="w-2/3 bg-white flex flex-col justify-center text-gray-600">
        <div>
          {{ compositionCollection.totalSize }}
        </div>
        <div class="text-sm">作品</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CompositionCollection } from "@/domain";
export default defineComponent({
  props: {
    compositionCollection: Object as PropType<CompositionCollection>,
  },
});
</script>

<style scoped>
.compositions-container {
  display: flex;
  padding-bottom: 0.375rem;
  margin-bottom: 0.5rem;
  height: 180px;
}
.white-gradient {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
</style>
