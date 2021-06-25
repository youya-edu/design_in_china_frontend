<template>
  <TCart />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ModuleTypes, CartActions } from "@/store";
import { TCart } from "@/components";

export default defineComponent({
  components: {
    TCart,
  },
  created() {
    const store = useStore();
    store.dispatch(`${ModuleTypes.CART}/${CartActions.LOAD_CART}`);
  },
});
</script>
