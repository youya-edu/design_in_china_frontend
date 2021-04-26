<template>
  <div>
    <AInput
      type="email"
      :placeholder="$t('email')"
      v-model="userKeyInfo.email"
      class="mb-5"
    />
    <AInput
      type="password"
      :placeholder="$t('password')"
      v-model="userKeyInfo.password"
      @keyup.enter="login(userKeyInfo)"
      class="mb-5"
    />
  </div>
  <div class="flex items-center justify-between">
    <div class="text-sm ml-auto">
      <a href="#" class="font-medium text-indigo-500 hover:text-indigo-700">
        {{ $t("forget_password") }}
      </a>
    </div>
  </div>
  <div>
    <button
      @click="login(userKeyInfo)"
      class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      {{ $t("login") }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { UserKeyInfo } from "@/store/types";
import { modules } from "@/store/constants";
import { actions } from "@/store/user/constants";
import { AInput } from "@/components/atoms";

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
