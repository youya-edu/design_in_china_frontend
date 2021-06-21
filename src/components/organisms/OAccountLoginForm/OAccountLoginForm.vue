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
    <AButtonSquare
      @click="tryLogin()"
      class="text-white bg-gray-700 hover:bg-gray-800"
    >
      {{ $t("login") }}
    </AButtonSquare>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import { UserKeyInfo, validateEmail } from "@/domain";
import { ModuleTypes, UserActions } from "@/store";
import { AButtonSquare, AMessageLevel, MInputMessageLabel } from "@/components";
import { lodash } from "@/utils/lib";

export default defineComponent({
  components: { AButtonSquare, MInputMessageLabel },
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
    ...mapActions(ModuleTypes.USER, { login: UserActions.LOGIN }),
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
        const redirectPath = this.$route.query.redirect as string;
        this.$router.push(redirectPath);
      } catch (error) {
        this.loginFailedMessage.show = true;
      }
    },
  },
});
</script>
