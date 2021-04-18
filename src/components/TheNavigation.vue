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
        <before-login v-if="user === null" />
        <after-login v-else />
      </div>
    </div>

    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
  <login-area v-if="showLoginArea" />
</template>

<script>
import { defineComponent } from "vue";
import BeforeLogin from "@/components/login/BeforeLogin";
import AfterLogin from "@/components/login/AfterLogin";
import LoginArea from "@/components/login/LoginArea";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { getters as viewGetters } from "@/store/view/constants";
import { actions, getters as userGetters } from "@/store/user/constants";

export default defineComponent({
  name: "TheNavigation",
  components: {
    BeforeLogin,
    AfterLogin,
    LoginArea,
  },
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
    ...mapActions(modules.USERS, [actions.CHECK_USER_STATUS]),
  },
  computed: {
    ...mapGetters(modules.USERS, { user: userGetters.CURRENT_LOGIN_USER }),
    ...mapGetters(modules.VIEWS, [viewGetters.SHOW_LOGIN_AREA]),
  },
  created() {
    this.checkUserStatus();
  },
});
</script>
