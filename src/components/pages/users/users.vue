<template>
  <t-users :users="users" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";
import { TUsers } from "@/components/templates/users";

export default defineComponent({
  name: "Users",
  components: { TUsers },
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
