<template>
  <TUserProfile :userProfile="userProfile" />
</template>

<script>
import { defineComponent } from "vue";
import { TUserProfile } from "@/components/templates";
import { fetchUserByUsername } from "@/api";

export default defineComponent({
  components: {
    TUserProfile,
  },
  data() {
    return {
      userProfile: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    // 根据传入的username去server获取User信息
    const user = await fetchUserByUsername(to.params.username);
    // 若存在，则继续
    if (user !== null) {
      next((vm) => (vm.userProfile = user));
    }
    // 否则，进入404
    else {
      next({ name: "NotFound" });
    }
  },
});
</script>
