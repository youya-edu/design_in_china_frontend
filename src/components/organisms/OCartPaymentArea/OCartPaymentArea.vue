<template>
  <div class="flex flex-col text-left ml-6 space-y-4">
    <div class="text-xl">ORDER SUMMARY</div>
    <div class="flex justify-between">
      <div>商品点数</div>
      <div>
        <b>{{ selectedItemsQuantity }}</b> 件商品
      </div>
    </div>
    <div class="flex justify-between">
      <div>税前价格</div>
      <div>
        <b>{{ totalPrice }}</b>
      </div>
    </div>
    <div class="flex justify-between">
      <div>消费税</div>
      <div>
        <b>{{ (totalPrice * 0.1).toFixed(2) }}</b>
      </div>
    </div>
    <hr />
    <div class="flex justify-between">
      <div>共计</div>
      <div>
        <b>{{ (totalPrice * 1.1).toFixed(2) }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ModuleTypes } from "@/store";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { CartGetters } from "@/store";
export default defineComponent({
  computed: {
    ...mapGetters(ModuleTypes.CART, {
      selectedItemsQuantity: CartGetters.SELECTED_ITEMS_QUANTITY,
      totalPrice: CartGetters.TOTAL_PRICE,
    }),
  },
});
</script>
