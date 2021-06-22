<template>
  <div>
    <hr />
    <div class="flex items-center mt-8">
      <div class="w-20">
        <input type="checkbox" checked />
      </div>
      <MCartItemInfo :item="item" class="w-3/5 h-full" />
      <OCartItemAction :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MCartItemInfo } from "@/components";
import { OCartItemAction } from "../OCartItemAction";
import { CartItem } from "@/domain";
export default defineComponent({
  components: {
    MCartItemInfo,
    OCartItemAction,
  },
  props: {
    item: Object as PropType<CartItem>,
  },
});
</script>
