<template>
  <div class="m-auto p-5 pb-10 bg-white w-2/5">
    <h3 class="text-left mr-auto my-5 text-2xl font-semibold text-gray-700">
      {{ $t("login_your_account") }}
    </h3>
    <div class="flex flex-col space-y-5">
      <OAccountLoginForm />
      <OAccountLoginIdp class="flex flex-col space-y-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { OAccountLoginForm, OAccountLoginIdp } from "@/components";

export default defineComponent({
  components: {
    OAccountLoginForm,
    OAccountLoginIdp,
  },
});
</script>
