<template>
  <GTheNavigation />
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view :key="$route.path" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GTheNavigation } from "@/components/globals";

export default defineComponent({
  components: {
    GTheNavigation,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
