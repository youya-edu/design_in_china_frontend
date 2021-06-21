<template>
  <div class="flex space-x-20">
    <OCompositionDetailImage :composition="composition" class="w-2/5" />
    <div class="w-3/5 flex flex-col space-y-10">
      <OCompositionDetailInfo :composition="composition" />
      <OCompositionDetailAction />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  OCompositionDetailImage,
  OCompositionDetailInfo,
  OCompositionDetailAction,
} from "@/components";
import { Composition } from "@/domain";
export default defineComponent({
  components: {
    OCompositionDetailImage,
    OCompositionDetailInfo,
    OCompositionDetailAction,
  },
  props: {
    composition: {
      type: Object as PropType<Composition>,
    },
  },
});
</script>
