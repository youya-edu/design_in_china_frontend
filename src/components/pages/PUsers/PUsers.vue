<template>
  <TUsers :users="users" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes } from "@/store/constants";
import { UserActions, UserGetters } from "@/store/user/constants";
import { TUsers } from "@/components/templates";

export default defineComponent({
  components: { TUsers },
  mounted() {
    this.loadUsers();
  },
  methods: {
    ...mapActions(ModuleTypes.USERS, [UserActions.LOAD_USERS]),
  },
  computed: {
    ...mapGetters(ModuleTypes.USERS, [UserGetters.USERS]),
  },
});
</script>
