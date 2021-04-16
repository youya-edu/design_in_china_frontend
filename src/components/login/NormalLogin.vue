<template>
  <div class="rounded-md shadow-sm -space-y-px">
    <input
      v-model="email"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
      type="email"
      placeholder="邮箱"
    />
    <input
      v-model="password"
      type="password"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
      placeholder="密码"
      @keyup.enter="signin"
    />
  </div>
  <div class="flex items-center justify-between">
    <div class="text-sm ml-auto">
      <a href="#" class="font-medium text-indigo-500 hover:text-indigo-700">
        忘记密码？
      </a>
    </div>
  </div>
  <div>
    <button
      @click="signin"
      class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      登录
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapMutations } from "vuex";

export default defineComponent({
  name: "NormalLogin",
  data() {
    return {
      loginUrl: "/login",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations("views", ["showLoginArea"]),
    ...mapActions("users", ["login"]),
    signin: async function () {
      await this.login({ email: this.email, password: this.password });
      this.showLoginArea(false);
    },
  },
});
</script>
