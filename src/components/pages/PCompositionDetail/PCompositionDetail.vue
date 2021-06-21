<template>
  <TCompositionDetail :composition="composition" />
</template>

<script>
import { defineComponent } from "vue";
import { TCompositionDetail } from "@/components";
import { fetchCompostionById } from "@/api";
export default defineComponent({
  components: {
    TCompositionDetail,
  },
  data() {
    return {
      composition: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    // 根据params中的id去server获取Composition信息
    const composition = await fetchCompostionById(to.params.id);
    // 若存在，则继续
    if (composition !== null) {
      console.log(composition);
      next((vm) => (vm.composition = composition));
    }
    // 否则，进入404
    else {
      next({ name: "NotFound" });
    }
  },
});
</script>
