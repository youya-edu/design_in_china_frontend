<template>
  <div class="designers-gallery">
    <ODesignerCardsContainer :designers="designers" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/domain";
import { ODesignerCardsContainer } from "@/components";
export default defineComponent({
  components: {
    ODesignerCardsContainer,
  },
  props: {
    designers: { type: Object as PropType<User[]>, required: true },
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
