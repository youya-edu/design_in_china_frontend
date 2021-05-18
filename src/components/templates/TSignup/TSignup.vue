<template>
  <div class="m-auto p-5 pb-10 bg-white w-2/5">
    <h3 class="text-left mr-auto my-5 text-2xl font-semibold text-gray-700">
      {{
        !success
          ? $t("create_your_account")
          : $t("congratulations_created_account_successfully")
      }}
    </h3>
    <div class="flex flex-col space-y-5">
      <OAccountSignupSuccess v-if="success" />
      <OAccountSignupForm v-else />
      <OAccountLoginIdp class="flex flex-col space-y-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  OAccountSignupForm,
  OAccountSignupSuccess,
  OAccountLoginIdp,
} from "@/components";

export default defineComponent({
  components: {
    OAccountSignupForm,
    OAccountSignupSuccess,
    OAccountLoginIdp,
  },
  props: {
    success: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>
