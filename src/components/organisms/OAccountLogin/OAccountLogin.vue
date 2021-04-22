<template>
  <div class="fixed z-10 inset-0 min-h-screen">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      @click="showAccountLogin(false)"
    ></div>

    <span class="inline-block align-middle h-screen">&#8203;</span>

    <div
      class="bg-white inline-block rounded-lg overflow-hidden shadow-xl transform transition-all align-middle lg:w-2/5 max-w-screen-sm"
    >
      <div class="flex flex-row">
        <OAccountSideDescription>
          <template #switch>
            <p class="flex flex-col mt-10">
              <span>没有账号？</span>
              <a class="cursor-pointer underline" @click="toggle">注册</a>
            </p>
          </template>
        </OAccountSideDescription>
        <div class="p-5 pb-10 bg-white w-3/5">
          <h3
            class="text-left mr-auto my-5 text-2xl font-semibold text-gray-700"
          >
            登录您的账号
          </h3>
          <div class="flex flex-col space-y-5">
            <OAccountLoginForm />
            <OAccountLoginIdp class="flex flex-col space-y-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { OAccountSideDescription } from "@/components/organisms/OAccountSideDescription";
import { OAccountLoginForm } from "@/components/organisms/OAccountLoginForm";
import { OAccountLoginIdp } from "@/components/organisms/OAccountLoginIdp";
import { mapMutations } from "vuex";
import { modules } from "@/store/constants";
import { mutations } from "@/store/view/constants";

export default defineComponent({
  components: {
    OAccountSideDescription,
    OAccountLoginForm,
    OAccountLoginIdp,
  },
  methods: {
    ...mapMutations(modules.VIEWS, {
      showAccountLogin: mutations.SHOW_ACCOUNT_LOGIN,
      showAccountSignup: mutations.SHOW_ACCOUNT_SIGNUP,
      showAccountSignupSuccess: mutations.SHOW_ACCOUNT_SIGNUP_SUCCESS,
    }),
    toggle() {
      this.showAccountLogin(false);
      this.showAccountSignup(true);
      this.showAccountSignupSuccess(false);
    },
  },
});
</script>
