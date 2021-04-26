<template>
  <TUserProfile :userProfile="userProfile" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";
import { TUserProfile } from "@/components/templates";

export default defineComponent({
  components: {
    TUserProfile,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadUserProfile(this.username);
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOAD_USER_PROFILE]),
  },
  computed: {
    ...mapGetters(modules.USERS, [getters.USER_PROFILE]),
  },
});
</script>
