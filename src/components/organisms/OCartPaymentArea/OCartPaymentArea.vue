<template>
  <div class="flex flex-col shadow p-6 text-left">
    <div>
      小记： <b>{{ selectedItemsQuantity }}</b> 件商品
    </div>
    <div>
      总价格： <b>{{ totalPrice }}</b>
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
