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
                @click="setLinkActive(link.id)"
              >
                <button
                  class="focus:outline-none"
                  :class="[link.isActive ? linkActiveClass : linkClass]"
                >
                  {{ link.content }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <GTheNavigationLoginBefore v-if="user === null" />
        <GTheNavigationLoginAfter v-else />
      </div>
    </div>
  </nav>
  <OAccountLogin v-if="showAccountLogin" />
  <OAccountSignup v-if="showAccountSignup" />
</template>

<script>
import { defineComponent } from "vue";
import { GTheNavigationLoginBefore } from "@/components/globals/GTheNavigationLoginBefore";
import { GTheNavigationLoginAfter } from "@/components/globals/GTheNavigationLoginAfter";
import { OAccountLogin } from "@/components/organisms/OAccountLogin";
import { OAccountSignup } from "@/components/organisms/OAccountSignup";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { getters as viewGetters } from "@/store/view/constants";
import { actions, getters as userGetters } from "@/store/user/constants";

export default defineComponent({
  components: {
    GTheNavigationLoginBefore,
    GTheNavigationLoginAfter,
    OAccountLogin,
    OAccountSignup,
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
    ...mapGetters(modules.VIEWS, [
      viewGetters.SHOW_ACCOUNT_LOGIN,
      viewGetters.SHOW_ACCOUNT_SIGNUP,
    ]),
  },
  created() {
    this.checkUserStatus();
  },
});
</script>
