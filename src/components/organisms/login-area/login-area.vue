<template>
  <div class="fixed z-10 inset-0 min-h-screen">
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      @click="showLoginArea(false)"
    ></div>

    <span class="inline-block align-middle h-screen">&#8203;</span>

    <div
      class="bg-white inline-block rounded-lg overflow-hidden shadow-xl transform transition-all align-middle lg:w-2/5 max-w-screen-sm"
    >
      <div class="flex flex-row">
        <a-login-description />
        <div class="p-5 pb-10 bg-white w-3/5">
          <h3 class="mr-auto my-5 text-2xl font-semibold text-gray-700">
            登录您的账号
          </h3>
          <div class="flex flex-col space-y-5">
            <o-login-normal />
            <span class="flex items-center justify-center space-x-2">
              <span class="h-px bg-gray-400 w-14"></span>
              <span class="font-normal text-gray-500">其他方式登录</span>
              <span class="h-px bg-gray-400 w-14"></span>
            </span>
            <o-login-idp class="flex flex-col space-y-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ALoginDescription } from "@/components/atoms/login-description";
import { OLoginNormal } from "@/components/organisms/login-normal";
import { OLoginIdp } from "@/components/organisms/login-idp";
import { mapMutations } from "vuex";
import { modules } from "@/store/constants";
import { mutations } from "@/store/view/constants";

export default defineComponent({
  components: {
    ALoginDescription,
    OLoginNormal,
    OLoginIdp,
  },
  methods: {
    ...mapMutations(modules.VIEWS, [mutations.SHOW_LOGIN_AREA]),
  },
});
</script>
