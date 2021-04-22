<template>
  <div>
    <AInput
      type="email"
      placeholder="邮箱"
      v-model="userKeyInfo.email"
      :isError="!emailOK"
      @keyup="checkEmail()"
    />
    <AInput
      type="username"
      placeholder="用户名"
      v-model="userKeyInfo.username"
      :isError="!usernameOK"
      @keyup="checkUsername()"
    />
    <AInput type="password" placeholder="密码" v-model="userKeyInfo.password" />
    <button
      @click="signup(userKeyInfo)"
      class="w-full px-4 py-2 mt-6 rounded-md text-lg font-semibold text-white transition-colors duration-300 shadow"
      :disabled="!allValid"
      :class="[allValid ? buttonEnabled : buttonDisabled]"
    >
      注册
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
import { validateEmail, check } from "@/utils/user";
import { lodash } from "@/utils/lib";

export default defineComponent({
  components: { AInput },
  data() {
    return {
      userKeyInfo: {
        email: "",
        username: "",
        password: "",
      } as UserKeyInfo,
      emailOK: false,
      usernameOK: false,
      buttonEnabled: "bg-gray-700 hover:bg-gray-800 focus:outline-none",
      buttonDisabled: "bg-gray-300",
    };
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOGIN, actions.SIGNUP]),
    // eslint-disable-next-line
    checkEmail: lodash.debounce(async function (this: any) {
      if (this.userKeyInfo.email) {
        try {
          this.emailOK =
            validateEmail(this.userKeyInfo.email) &&
            (await check("check_email", this.userKeyInfo));
        } catch (err) {
          this.emailOK = false;
        }
      } else {
        this.emailOK = false;
      }
    }, 300),
    // eslint-disable-next-line
    checkUsername: lodash.debounce(async function (this: any) {
      if (this.userKeyInfo.username) {
        try {
          this.usernameOK = await check("check_username", this.userKeyInfo);
        } catch (err) {
          this.usernameOK = false;
        }
      } else {
        this.usernameOK = false;
      }
    }, 300),
  },
  computed: {
    allValid(): boolean {
      return (
        this.userKeyInfo.email !== "" &&
        this.emailOK &&
        this.userKeyInfo.username !== "" &&
        this.usernameOK
      );
    },
  },
});
</script>
