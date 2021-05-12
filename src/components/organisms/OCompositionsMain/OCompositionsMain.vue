<template>
  <div class="compositions-container">
    <MCompositionCard
      v-for="composition in compositions"
      :key="composition.id"
      :composition="composition"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
import { fetchCompositions } from "@/api";
import { Composition } from "@/domain";
import { MCompositionCard } from "@/components/molecules";

export default defineComponent({
  setup() {
    const compositions: Ref<Composition[]> = ref([]);
    const getCompositions = async () => {
      compositions.value = (await fetchCompositions()) as Composition[];
    };
    onMounted(getCompositions);
    return {
      compositions,
    };
  },
  components: {
    MCompositionCard,
  },
});
</script>

<style scoped>
.compositions-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
}
</style>
