<template>
  <div>
    <button
      @click="login"
      class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      登录
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { modules } from "@/store/constants";
import { mutations } from "@/store/view/constants";

export default defineComponent({
  methods: {
    ...mapMutations(modules.VIEWS, {
      showAccountSignup: mutations.SHOW_ACCOUNT_SIGNUP,
      showAccountLogin: mutations.SHOW_ACCOUNT_LOGIN,
    }),
    login() {
      this.showAccountSignup(false);
      this.showAccountLogin(true);
    },
  },
});
</script>
