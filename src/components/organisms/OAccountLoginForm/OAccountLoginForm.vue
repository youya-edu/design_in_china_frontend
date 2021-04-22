<template>
  <div>
    <AInput type="email" placeholder="邮箱" v-model="userKeyInfo.email" />
    <AInput
      type="password"
      placeholder="密码"
      v-model="userKeyInfo.password"
      @keyup.enter="login(userKeyInfo)"
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
      @click="login(userKeyInfo)"
      class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      登录
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { UserKeyInfo } from "@/store/types";
import { modules } from "@/store/constants";
import { actions } from "@/store/user/constants";
import { AInput } from "@/components/atoms/AInput";

export default defineComponent({
  components: { AInput },
  data() {
    return {
      userKeyInfo: {
        email: "",
        username: "",
        password: "",
      } as UserKeyInfo,
    };
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOGIN]),
  },
});
</script>
