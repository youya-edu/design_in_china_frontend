<template>
  <g-the-navigation />
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view :key="$route.path" />
    </div>
  </main>
</template>

<script>
import { gTheNavigation } from "@/components/globals/the-navigation";
export default {
  components: {
    gTheNavigation,
  },
};
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
