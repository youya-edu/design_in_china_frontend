<template>
  <TDesigners :designers="designers" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes, UserActions, UserGetters } from "@/store";
import { TDesigners } from "@/components";
export default defineComponent({
  components: { TDesigners },
  created() {
    this.loadDesigners();
  },
  methods: {
    ...mapActions(ModuleTypes.USER, {
      loadDesigners: UserActions.LOAD_DESIGNERS,
    }),
  },
  computed: {
    ...mapGetters(ModuleTypes.USER, {
      designers: UserGetters.DESIGNERS,
    }),
  },
});
</script>
