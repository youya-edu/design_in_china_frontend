<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">
        <div class="text-xl">DESIGN IN CHINA</div>
        <div class="flex">
          <GTheHeaderLoginBefore v-if="user === null" />
          <GTheHeaderLoginAfter v-else />
        </div>
      </div>
    </div>
  </nav>
  <OAccountLogin v-if="showAccountLogin" />
  <OAccountSignup v-if="showAccountSignup" />
</template>

<script>
import { defineComponent } from "vue";
import {
  GTheHeaderLoginBefore,
  GTheHeaderLoginAfter,
} from "@/components/globals";
import { OAccountLogin, OAccountSignup } from "@/components/organisms";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { getters as viewGetters } from "@/store/view/constants";
import { actions, getters as userGetters } from "@/store/user/constants";

export default defineComponent({
  components: {
    GTheHeaderLoginBefore,
    GTheHeaderLoginAfter,
    OAccountLogin,
    OAccountSignup,
  },
  data() {
    return {
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
