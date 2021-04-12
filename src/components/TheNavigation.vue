<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                v-for="link in links"
                :key="link.id"
                :to="link.path"
                :class="[link.isActive ? linkActiveClass : linkClass]"
                @click="setLinkActive(link.id)"
                >{{ link.content }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          v-for="link in links"
          :key="link.id"
          :to="link.path"
          :class="[link.isActive ? mobileLinkActiveClass : mobileLinkClass]"
          @click="setLinkActive(link.id)"
          >{{ link.content }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      links: [
        { id: 0, path: "/", content: "Home", isActive: false },
        { id: 1, path: "/users", content: "设计师", isActive: false },
        { id: 2, path: "/compositions", content: "作品", isActive: false },
      ],
      linkClass:
        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium",
      linkActiveClass:
        "bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium",
      mobileLinkClass:
        "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
      mobileLinkActiveClass:
        "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
    };
  },
  methods: {
    setLinkActive(linkId) {
      for (let link of this.links) {
        if (link.id === linkId) {
          link.isActive = true;
        } else {
          link.isActive = false;
        }
      }
    },
  },
});
</script>

<style scoped lang="scss"></style>
