<template>
  <div>
    <div class="text-xl text-left">NEW IN THIS WEEK</div>
    <hr class="my-1" />
    <MSelectMenuSortBy class="text-sm justify-end" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MSelectMenuSortBy } from "@/components/molecules";

export default defineComponent({
  components: {
    MSelectMenuSortBy,
  },
});
</script>
