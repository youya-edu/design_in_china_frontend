<template>
  <div class="flex items-center justify-around w-40">
    <button
      class="focus:outline-none whitespace-nowrap w-20 text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md"
      @click="showAccountLogin(true)"
    >
      {{ $t("login") }}
    </button>
    <button
      class="focus:outline-none whitespace-nowrap w-20 px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-500 hover:bg-indigo-700"
      @click="showAccountSignup(true)"
    >
      {{ $t("sign_up") }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { modules } from "@/store/constants";
import { mutations } from "@/store/view/constants";

export default defineComponent({
  methods: {
    ...mapMutations(modules.VIEWS, [
      mutations.SHOW_ACCOUNT_LOGIN,
      mutations.SHOW_ACCOUNT_SIGNUP,
    ]),
  },
});
</script>
