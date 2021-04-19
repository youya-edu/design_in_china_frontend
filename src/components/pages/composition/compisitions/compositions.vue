<template>
  <t-composition-compositions />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { tCompositionCompositions } from "@/components/templates/composition/compositions";

export default defineComponent({
  components: {
    tCompositionCompositions,
  },
});
</script>
