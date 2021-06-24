<template>
  <div>
    <div class="compositions-container">
      <MCompositionCard
        v-for="composition in compositionCollection.compositions"
        :key="composition.id"
        :composition="composition"
      />
    </div>
    <MPaginationBar />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
import { fetchCompositions } from "@/api";
import { CompositionCollection } from "@/domain";
import { MCompositionCard, MPaginationBar } from "@/components";

export default defineComponent({
  setup() {
    const compositionCollection: Ref<CompositionCollection> = ref({
      compostions: [],
      totalSize: 0,
    });
    const getCompositions = async () => {
      compositionCollection.value = (await fetchCompositions()) as CompositionCollection;
    };
    onMounted(getCompositions);
    return {
      compositionCollection,
    };
  },
  components: {
    MCompositionCard,
    MPaginationBar,
  },
});
</script>

<style scoped>
.compositions-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 60px;
}
</style>
