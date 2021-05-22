<template>
  <div>
    <div v-if="!items">您的购物车为空</div>
    <div v-else id="cart-items-container">
      <OCartItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="w-full shadow h-60"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, useStore } from "vuex";
import { OCartItem } from "../OCartItem";
import { ModuleTypes, CartActions, CartGetters } from "@/store";

export default defineComponent({
  components: {
    OCartItem,
  },
  mounted() {
    const store = useStore();
    store.dispatch(`${ModuleTypes.CART}/${CartActions.LOAD_CART}`);
  },
  computed: {
    ...mapGetters(ModuleTypes.CART, {
      items: CartGetters.CART_ITEMS,
    }),
  },
});
</script>

<style scoped>
#cart-items-container {
  display: grid;
  grid-row-gap: 20px;
}
</style>
