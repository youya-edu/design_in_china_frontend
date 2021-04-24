<template>
  <div class="fixed z-10 inset-0 min-h-screen">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      @click="showAccountSignup(false)"
    ></div>

    <span class="inline-block align-middle h-screen">&#8203;</span>

    <div
      class="bg-white inline-block rounded-lg overflow-hidden shadow-xl transform transition-all align-middle lg:w-2/5 max-w-screen-sm"
    >
      <div class="flex flex-row">
        <OAccountSideDescription>
          <template #switch>
            <p class="flex flex-col mt-10">
              <span>{{ $t("has_account") }}</span>
              <a class="cursor-pointer underline" @click="toggle">{{
                $t("login")
              }}</a>
            </p>
          </template>
        </OAccountSideDescription>
        <div class="p-5 pb-10 bg-white w-3/5">
          <h3
            class="text-left mr-auto my-5 text-2xl font-semibold text-gray-700"
          >
            {{
              !showAccountSignupSuccess
                ? $t("create_your_account")
                : $t("congratulations_created_account_successfully")
            }}
          </h3>
          <div class="flex flex-col space-y-5">
            <OAccountSignupSuccess v-if="showAccountSignupSuccess" />
            <OAccountSignupForm v-else />
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
import { OAccountSignupForm } from "@/components/organisms/OAccountSignupForm";
import { OAccountLoginIdp } from "@/components/organisms/OAccountLoginIdp";
import { OAccountSignupSuccess } from "@/components/organisms/OAccountSignupSuccess";
import { mapGetters, mapMutations } from "vuex";
import { modules } from "@/store/constants";
import { mutations, getters } from "@/store/view/constants";

export default defineComponent({
  components: {
    OAccountSideDescription,
    OAccountSignupForm,
    OAccountLoginIdp,
    OAccountSignupSuccess,
  },
  data() {
    return {
      signupSuccess: false,
    };
  },
  methods: {
    ...mapMutations(modules.VIEWS, {
      showAccountSignup: mutations.SHOW_ACCOUNT_SIGNUP,
      showAccountLogin: mutations.SHOW_ACCOUNT_LOGIN,
    }),
    toggle() {
      this.showAccountSignup(false);
      this.showAccountLogin(true);
    },
  },
  computed: {
    ...mapGetters(modules.VIEWS, [getters.SHOW_ACCOUNT_SIGNUP_SUCCESS]),
  },
});
</script>
