<template>
  <div class="flex items-center">
    <div class="w-20">
      <input type="checkbox" checked />
    </div>
    <MCartItemInfo :item="item" class="w-3/5 h-full" />
    <MCartItemAction :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MCartItemInfo, MCartItemAction } from "@/components";
import { CartItem } from "@/domain";

export default defineComponent({
  components: {
    MCartItemInfo,
    MCartItemAction,
  },
  props: {
    item: Object as PropType<CartItem>,
  },
});
</script>
