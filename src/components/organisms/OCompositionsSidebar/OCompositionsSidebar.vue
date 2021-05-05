<template>
  <div>
    <MCompositionClassificationExpansion
      v-for="c in classfications"
      :key="c.id"
      :content="c.content"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MCompositionClassificationExpansion } from "@/components/molecules";

export default defineComponent({
  components: {
    MCompositionClassificationExpansion,
  },
  data() {
    return {
      classfications: [
        { id: 0, content: "Category" },
        { id: 1, content: "Designer" },
        { id: 2, content: "Color" },
        { id: 3, content: "Price" },
        { id: 4, content: "Status" },
      ],
    };
  },
});
</script>
