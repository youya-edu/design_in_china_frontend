<template>
  <div class="flex space-x-4">
    <div>
      <AButtonSquare class="text-white bg-gray-600 hover:bg-gray-800"
        >加入购物车</AButtonSquare
      >
    </div>
    <div>
      <AButtonSquare class="text-gray-500 hover:bg-gray-100"
        >加入愿望单</AButtonSquare
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AButtonSquare } from "@/components";
export default defineComponent({
  components: {
    AButtonSquare,
  },
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
