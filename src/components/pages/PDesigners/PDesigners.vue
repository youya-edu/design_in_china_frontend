<template>
  <TDesigners :users="users" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes, UserActions, UserGetters } from "@/store";
import { TDesigners } from "@/components";

export default defineComponent({
  components: { TDesigners },
  mounted() {
    this.loadUsers();
  },
  methods: {
    ...mapActions(ModuleTypes.USER, [UserActions.LOAD_USERS]),
  },
  computed: {
    ...mapGetters(ModuleTypes.USER, [UserGetters.USERS]),
  },
});
</script>
