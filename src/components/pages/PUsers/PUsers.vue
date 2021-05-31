<template>
  <TUsers :users="users" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes, UserActions, UserGetters } from "@/store";
import { TUsers } from "@/components";

export default defineComponent({
  components: { TUsers },
  created() {
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
