<template>
  <div class="designers-gallery">
    <ODesignerCardsContainer :designers="designerCollection.users" />
    <MPaginationBar
      :totalSize="designerCollection.totalSize"
      @pageSelected="pageSelected"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UserCollection } from "@/domain";
import { MPaginationBar, ODesignerCardsContainer } from "@/components";
export default defineComponent({
  components: {
    MPaginationBar,
    ODesignerCardsContainer,
  },
  props: {
    designerCollection: {
      type: Object as PropType<UserCollection>,
      required: true,
    },
  },
  emits: ["pageSelected"],
  methods: {
    pageSelected(pageNumber: number) {
      this.$emit("pageSelected", pageNumber);
    },
  },
});
</script>

<style scoped>
.designers-gallery {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 300px;
}
</style>
