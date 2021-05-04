<template>
  <TUsers :users="users" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { userActions, userGetters } from "@/store/user/constants";
import { TUsers } from "@/components/templates";

export default defineComponent({
  components: { TUsers },
  mounted() {
    this.loadUsers();
  },
  methods: {
    ...mapActions(modules.USERS, [userActions.LOAD_USERS]),
  },
  computed: {
    ...mapGetters(modules.USERS, [userGetters.USERS]),
  },
});
</script>
