<template>
  <div class="flex items-center justify-around w-30">
    <AIconShoppingBag class="mr-1" />
    <button :class="buttonClass" @click="showAccountLogin(true)">
      <div class="flex items-center">
        <AIconUser />
        {{ $t("login") }}
      </div>
    </button>
    /
    <button :class="buttonClass" @click="showAccountSignup(true)">
      {{ $t("sign_up") }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { ModuleTypes, ViewMutations } from "@/store";
import { AIconUser, AIconShoppingBag } from "@/components";
export default defineComponent({
  components: {
    AIconUser,
    AIconShoppingBag,
  },
  data() {
    return {
      buttonClass:
        "focus:outline-none text-sm font-normal p-2 text-gray-600 hover:text-gray-900",
    };
  },
  methods: {
    ...mapMutations(ModuleTypes.VIEW, [
      ViewMutations.SHOW_ACCOUNT_LOGIN,
      ViewMutations.SHOW_ACCOUNT_SIGNUP,
    ]),
  },
});
</script>
