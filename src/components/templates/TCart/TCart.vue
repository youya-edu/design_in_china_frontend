<template>
  <div class="flex flex-col">
    <div class="text-xl text-left mb-3">购物车</div>
    <div id="cart">
      <OCartItemsContainer class="h-full" />
      <OCartPaymentArea class="h-96" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { OCartItemsContainer, OCartPaymentArea } from "@/components";

export default defineComponent({
  components: {
    OCartItemsContainer,
    OCartPaymentArea,
  },
});
</script>

<style scoped>
#cart {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 30px;
}
</style>
