<template>
  <div>
    <MInputMessageLabel
      type="email"
      :placeholder="$t('email')"
      v-model="userKeyInfo.email"
      @keyup="checkEmail()"
      :hasError="emailCheckResult.hasError"
      :message="emailCheckResult.message"
    />
    <MInputMessageLabel
      type="username"
      :placeholder="$t('username')"
      v-model="userKeyInfo.username"
      :hasError="usernameCheckResult.hasError"
      :message="usernameCheckResult.message"
      @keyup="checkUsername()"
    />
    <MInputMessageLabel
      type="password"
      :placeholder="$t('password')"
      v-model="userKeyInfo.password"
    />
    <AButtonSquare
      @click="signup(userKeyInfo)"
      class="mt-6 text-white"
      :disabled="!allValid"
      :class="[allValid ? buttonEnabled : buttonDisabled]"
    >
      {{ $t("sign_up") }}
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
import { checkEmailExistence, checkUsernameExistence } from "@/api";

export default defineComponent({
  components: { AButtonSquare, MInputMessageLabel },
  data() {
    return {
      userKeyInfo: {
        email: "",
        username: "",
        password: "",
      } as UserKeyInfo,
      emailCheckResult: {
        hasError: false,
        message: {
          type: AMessageLevel.ERROR,
          show: false,
          content: "不是有效的邮箱格式",
        },
      },
      usernameCheckResult: {
        hasError: false,
        message: {
          type: AMessageLevel.ERROR,
          show: false,
          content: "用户名已被注册",
        },
      },
      buttonEnabled: "bg-gray-700 hover:bg-gray-800",
      buttonDisabled: "bg-gray-300",
    };
  },
  methods: {
    ...mapActions(ModuleTypes.USER, [UserActions.LOGIN, UserActions.SIGNUP]),
    // eslint-disable-next-line
    checkEmail: lodash.debounce(async function (this: any) {
      if (this.userKeyInfo.email) {
        try {
          const emailFormatOk = validateEmail(this.userKeyInfo.email);
          const emailExisted = await checkEmailExistence(this.userKeyInfo);
          if (!emailFormatOk) {
            this.emailCheckResult.hasError = true;
            this.emailCheckResult.message.type = AMessageLevel.ERROR;
            this.emailCheckResult.message.show = true;
            this.emailCheckResult.message.content = "不是有效的邮箱格式";
          } else if (emailExisted) {
            this.emailCheckResult.hasError = true;
            this.emailCheckResult.message.type = AMessageLevel.ERROR;
            this.emailCheckResult.message.show = true;
            this.emailCheckResult.message.content = "邮箱已被注册";
          } else {
            this.emailCheckResult.hasError = false;
            this.emailCheckResult.message.type = AMessageLevel.SUCCESS;
            this.emailCheckResult.message.show = true;
            this.emailCheckResult.message.content = "邮箱可使用";
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        this.emailCheckResult.hasError = false;
        this.emailCheckResult.message.show = false;
      }
    }, 300),
    // eslint-disable-next-line
    checkUsername: lodash.debounce(async function (this: any) {
      if (this.userKeyInfo.username) {
        this.usernameCheckResult.message.show = true;
        try {
          const usernameExisted = await checkUsernameExistence(
            this.userKeyInfo
          );
          if (usernameExisted) {
            this.usernameCheckResult.hasError = true;
            this.usernameCheckResult.message.type = AMessageLevel.ERROR;
            this.usernameCheckResult.message.content = "用户名已被注册";
          } else {
            this.usernameCheckResult.hasError = false;
            this.usernameCheckResult.message.type = AMessageLevel.SUCCESS;
            this.usernameCheckResult.message.content = "用户名可使用";
          }
        } catch (err) {
          console.error(err);
        }
      } else {
        this.usernameCheckResult.hasError = false;
        this.usernameCheckResult.message.show = false;
      }
    }, 300),
  },
  computed: {
    allValid(): boolean {
      return (
        this.userKeyInfo.email !== "" &&
        !this.emailCheckResult.hasError &&
        this.userKeyInfo.username !== "" &&
        !this.usernameCheckResult.hasError
      );
    },
  },
});
</script>
