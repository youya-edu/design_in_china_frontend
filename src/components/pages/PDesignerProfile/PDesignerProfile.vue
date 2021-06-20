<template>
  <TDesignerProfile :designerProfile="designerProfile" />
</template>

<script>
import { defineComponent } from "vue";
import { TDesignerProfile } from "@/components";
import { fetchUserByUsername } from "@/api";

export default defineComponent({
  components: {
    TDesignerProfile,
  },
  data() {
    return {
      designerProfile: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    // 根据params中的username去server获取User信息
    const user = await fetchUserByUsername(to.params.username);
    // 若存在，则继续
    if (user !== null) {
      next((vm) => (vm.designerProfile = user));
    }
    // 否则，进入404
    else {
      next({ name: "NotFound" });
    }
  },
});
</script>
