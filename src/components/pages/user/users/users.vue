<template>
  <t-user-users :users="users" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";
import { tUserUsers } from "@/components/templates/user/users";

export default defineComponent({
  name: "Users",
  components: { tUserUsers },
  mounted() {
    this.loadUsers();
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOAD_USERS]),
  },
  computed: {
    ...mapGetters(modules.USERS, [getters.USERS]),
  },
});
</script>
