<template>
  <router-link
    :to="{ name: 'DesignerProfile', params: { username: designer.username } }"
  >
    <div class="flex flex-col overflow-hidden pl-3 pt-6">
      <ODesignerCardInfo :designer="designer" />
      <ODesignerCardCompositions
        :compositionCollection="designer.compositionCollection"
      />
      <hr />
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ODesignerCardInfo, ODesignerCardCompositions } from "../";
import { User } from "@/domain";
export default defineComponent({
  components: {
    ODesignerCardInfo,
    ODesignerCardCompositions,
  },
  props: {
    designer: { type: Object as PropType<User>, required: true },
  },
});
</script>
