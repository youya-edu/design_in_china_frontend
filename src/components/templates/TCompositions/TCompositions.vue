<template>
  <div class="flex flex-col space-y-4">
    <OCompositionsHeader class="ml-auto w-5/6" />
    <div class="flex">
      <OCompositionsSidebar class="pr-6 w-1/6" />
      <div class="w-5/6">
        <OCompositionsMain />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  OCompositionsSidebar,
  OCompositionsHeader,
  OCompositionsMain,
} from "@/components/organisms";

export default defineComponent({
  components: {
    OCompositionsSidebar,
    OCompositionsHeader,
    OCompositionsMain,
  },
});
</script>
