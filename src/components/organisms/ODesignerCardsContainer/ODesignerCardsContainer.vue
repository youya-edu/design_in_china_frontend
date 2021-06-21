<template>
  <div class="flex flex-col">
    <ODesignerCard
      v-for="designer in designers"
      :key="designer.id"
      :designer="designer"
      class="hover:shadow-md cursor-pointer pl-3 pt-3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ODesignerCard } from "../";
import { User } from "@/domain";
export default defineComponent({
  components: {
    ODesignerCard,
  },
  props: {
    designers: { type: Object as PropType<User[]>, required: true },
  },
});
</script>
