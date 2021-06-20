<template>
  <nav class="bg-gray-200">
    <div class="flex items-center justify-center h-10">
      <div class="flex space-x-4 h-full">
        <router-link
          v-for="link in links"
          :key="link.id"
          :to="{ name: link.path }"
          @click="setLinkActive(link.id)"
        >
          <button
            class="box-border border-b-2 border-gray-200 focus:outline-none px-3 pt-1 text-sm font-light text-gray-700 h-full"
            :class="[link.isActive ? linkActiveClass : linkClass]"
          >
            {{ $t(link.i18nKey) }}
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { RouteName } from "@/router";

export default defineComponent({
  data() {
    return {
      links: [
        { id: 0, path: "Home", i18nKey: "home", isActive: false },
        {
          id: 1,
          path: "Compositions",
          i18nKey: "composition",
          isActive: false,
        },
        {
          id: 2,
          path: RouteName.DESIGNERS,
          i18nKey: "designer",
          isActive: false,
        },
      ],
      linkClass: "hover:bg-gray-300 hover:border-gray-300",
      linkActiveClass: "border-gray-400 text-gray-900",
    };
  },
  methods: {
    setLinkActive(linkId) {
      this.links.forEach((link) => (link.isActive = link.id === linkId));
    },
  },
});
</script>
