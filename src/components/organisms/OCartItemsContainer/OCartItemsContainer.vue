<template>
  <div>
    <div v-if="!items">您的购物车为空</div>
    <div v-else id="cart-items-container">
      <OCartItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="w-full h-60"
      />
      <MPaginationBar @pageSelected="setCartPage" :totalSize="totalSize" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { MPaginationBar } from "@/components";
import { OCartItem } from "../OCartItem";
import { ModuleTypes, CartGetters, CartMutations } from "@/store";

export default defineComponent({
  components: {
    MPaginationBar,
    OCartItem,
  },
  methods: {
    ...mapMutations(ModuleTypes.CART, {
      setCartPage: CartMutations.SET_CART_PAGE,
    }),
  },
  computed: {
    ...mapGetters(ModuleTypes.CART, {
      items: CartGetters.CART_ITEMS,
      totalSize: CartGetters.TOTAL_SIZE,
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
