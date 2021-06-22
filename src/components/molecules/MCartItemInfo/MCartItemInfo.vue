<template>
  <div class="cart-item-info p-2 items-center">
    <div class="text-sm font-medium text-gray-700">
      <img :src="item.image" alt="item image" class="w-full" loading="lazy" />
    </div>
    <div class="text-left">
      <div>
        {{ item.name }}
      </div>
      <div class="text-xs text-gray-400">
        {{ item.description }}
      </div>
    </div>
    <div class="text-left">
      {{ item.price }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CartItem } from "@/domain";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },
});
</script>

<style scoped>
.cart-item-info {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  column-gap: 30px;
}
</style>
