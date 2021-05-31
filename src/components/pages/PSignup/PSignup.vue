<template>
  <TSignup :success="showAccountSignupSuccess" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { TSignup } from "@/components";
import { ModuleTypes, ViewGetters, ViewMutations } from "@/store";

export default defineComponent({
  components: {
    TSignup,
  },
  methods: {
    ...mapMutations(ModuleTypes.VIEW, {
      setAccountSignupSuccess: ViewMutations.SHOW_ACCOUNT_SIGNUP_SUCCESS,
    }),
  },
  computed: {
    ...mapGetters(ModuleTypes.VIEW, [ViewGetters.SHOW_ACCOUNT_SIGNUP_SUCCESS]),
  },
  created() {
    this.setAccountSignupSuccess(false);
  },
});
</script>
