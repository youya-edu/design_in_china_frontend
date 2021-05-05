<template>
  <TUserProfile :userProfile="userProfile" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes } from "@/store/constants";
import { UserActions, UserGetters } from "@/store/user/constants";
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
    ...mapActions(ModuleTypes.USERS, [UserActions.LOAD_USER_PROFILE]),
  },
  computed: {
    ...mapGetters(ModuleTypes.USERS, [UserGetters.USER_PROFILE]),
  },
});
</script>
