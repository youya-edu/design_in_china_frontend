<template>
  <div class="compositions-grid">
    <div
      v-for="composition in compositions"
      :key="composition.id"
      class="compositions-grid-item cursor-pointer hover:opacity-40"
    >
      <img :src="composition.image" :alt="composition.description" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, Ref } from "vue";
import { fetchCompositions } from "@/api/compositions";
import { Composition } from "@/domain";
import Masonry from "masonry-layout";

export default defineComponent({
  setup() {
    const compositions: Ref<Composition[]> = ref([]);
    const getCompositions = async () => {
      compositions.value = (await fetchCompositions()) as Composition[];
      await nextTick();
      new Masonry(".compositions-grid", {
        itemSelector: ".compositions-grid-item",
        columnWidth: 350,
        gutter: 20,
      });
    };
    onMounted(getCompositions);

    return {
      compositions,
    };
  },
});
</script>

<style scoped>
.compositions-grid-item {
  margin-bottom: 20px;
  border-radius: 25px;
  width: 350px;
  overflow: hidden;
}
</style>
