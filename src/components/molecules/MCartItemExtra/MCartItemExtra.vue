<template>
  <div class="flex flex-col m-auto text-sm">
    <div class="flex text-indigo-600 mb-1">
      <button class="hover:underline">删除</button>
      <span class="mx-2 text-gray-400">|</span>
      <button class="hover:underline">加入收藏夹</button>
    </div>
    <MSelectMenu class="text-left" @quantity-changed="quantityChanged" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MSelectMenu } from "../MSelectMenu";
import { CartItem } from "@/domain";
import { mapMutations } from "vuex";
import { CartMutations, ModuleTypes } from "@/store";

export default defineComponent({
  components: { MSelectMenu },
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },
  methods: {
    ...mapMutations(ModuleTypes.CART, {
      changeQuantity: CartMutations.CHANGE_QUANTITY,
      setTotalPrice: CartMutations.SET_TOTAL_PRICE,
      setSelectedItemsQuantity: CartMutations.SET_SELECTED_ITEMS_QUANTITY,
    }),
    quantityChanged(newQuantity: number) {
      this.changeQuantity({ newQuantity: newQuantity, item: this.item });
    },
  },
});
</script>
