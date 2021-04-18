<template>
  <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
    <div
      class="login-btn whitespace-nowrap text-md font-medium text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md"
      @click="showLoginArea(true)"
    >
      登录
    </div>
    <button
      class="login-btn ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-indigo-500 hover:bg-indigo-700"
    >
      注册
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
    ...mapMutations(modules.VIEWS, [mutations.SHOW_LOGIN_AREA]),
  },
});
</script>

<style lang="scss" scoped>
.login-btn {
  cursor: pointer;
}
</style>
