<template>
  <div>
    <MInputMessageLabel
      type="email"
      :placeholder="$t('email')"
      v-model="userKeyInfo.email"
      :message="emailErrorMessage"
      @keyup="checkEmail()"
    />
    <MInputMessageLabel
      type="password"
      :placeholder="$t('password')"
      v-model="userKeyInfo.password"
      :message="loginFailedMessage"
      @keyup.enter="tryLogin()"
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
      @click="tryLogin()"
      class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      {{ $t("login") }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { UserKeyInfo, validateEmail } from "@/domain";
import { ModuleTypes, UserActions } from "@/store";
import { AMessageLevel } from "@/components/atoms";
import { MInputMessageLabel } from "@/components/molecules";
import { lodash } from "@/utils/lib";

export default defineComponent({
  components: { MInputMessageLabel },
  data() {
    return {
      userKeyInfo: {
        email: "",
        username: "",
        password: "",
      } as UserKeyInfo,
      emailErrorMessage: {
        type: AMessageLevel.ERROR,
        show: false,
        content: "不是有效的邮箱格式",
      },
      loginFailedMessage: {
        type: AMessageLevel.ERROR,
        show: false,
        content: "邮箱不存在或密码错误",
      },
    };
  },
  methods: {
    ...mapActions(ModuleTypes.USERS, { login: UserActions.LOGIN }),
    // eslint-disable-next-line
    checkEmail: lodash.debounce(async function (this: any) {
      if (this.userKeyInfo.email) {
        this.emailErrorMessage.show = !validateEmail(this.userKeyInfo.email);
      } else {
        this.emailErrorMessage.show = false;
      }
    }),
    async tryLogin() {
      try {
        await this.login(this.userKeyInfo);
      } catch (error) {
        this.loginFailedMessage.show = true;
      }
    },
  },
});
</script>
