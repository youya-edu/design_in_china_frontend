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
              <span>{{ $t("no_account") }}</span>
              <a class="cursor-pointer underline" @click="toggle">{{
                $t("sign_up")
              }}</a>
            </p>
          </template>
        </OAccountSideDescription>
        <div class="p-5 pb-10 bg-white w-3/5">
          <h3
            class="text-left mr-auto my-5 text-2xl font-semibold text-gray-700"
          >
            {{ $t("login_your_account") }}
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
import {
  OAccountSideDescription,
  OAccountLoginForm,
  OAccountLoginIdp,
} from "@/components/organisms";
import { mapMutations } from "vuex";
import { ModuleTypes, ViewMutations } from "@/store";

export default defineComponent({
  components: {
    OAccountSideDescription,
    OAccountLoginForm,
    OAccountLoginIdp,
  },
  methods: {
    ...mapMutations(ModuleTypes.VIEWS, {
      showAccountLogin: ViewMutations.SHOW_ACCOUNT_LOGIN,
      showAccountSignup: ViewMutations.SHOW_ACCOUNT_SIGNUP,
      showAccountSignupSuccess: ViewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS,
    }),
    toggle() {
      this.showAccountLogin(false);
      this.showAccountSignup(true);
      this.showAccountSignupSuccess(false);
    },
  },
});
</script>
