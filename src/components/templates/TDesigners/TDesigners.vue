<template>
  <div class="designers-gallery"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/domain";
export default defineComponent({
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
