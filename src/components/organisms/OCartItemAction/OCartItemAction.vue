<template>
  <div class="flex flex-col m-auto text-sm">
    <div class="flex text-indigo-600 mb-1">
      <button class="hover:underline">删除</button>
      <span class="mx-2 text-gray-400">|</span>
      <button class="hover:underline">加入收藏夹</button>
    </div>
    <MCartItemActionSelectMenu
      class="text-left"
      @quantity-changed="quantityChanged"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MCartItemActionSelectMenu } from "@/components";
import { CartItem } from "@/domain";
import { mapMutations } from "vuex";
import { CartMutations, ModuleTypes } from "@/store";

export default defineComponent({
  components: { MCartItemActionSelectMenu },
  props: {
    item: {
      type: Object as PropType<CartItem>,
      required: true,
    },
  },
  methods: {
    ...mapMutations(ModuleTypes.CART, {
      changeQuantity: CartMutations.CHANGE_QUANTITY,
    }),
    quantityChanged(newQuantity: number) {
      this.changeQuantity(
        Object.assign(
          {
            quantity: newQuantity,
          },
          this.item
        )
      );
    },
  },
});
</script>
