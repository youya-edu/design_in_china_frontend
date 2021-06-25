<template>
  <TDesigners
    :designerCollection="designerCollection"
    @pageSelected="pageSelected"
  />
</template>

<script>
import { defineComponent } from "vue";
import { TDesigners } from "@/components";
import { loadDesigners } from "@/api";
export default defineComponent({
  components: { TDesigners },
  data() {
    return {
      designerCollection: [],
    };
  },
  async created() {
    await this.pageSelected(1);
  },
  methods: {
    async pageSelected(pageNumber) {
      this.designerCollection = await loadDesigners(pageNumber);
    },
  },
});
</script>
