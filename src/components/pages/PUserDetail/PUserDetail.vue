<template>
  <TUserDetail :userDetail="userDetail" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";
import { TUserDetail } from "@/components/templates/TUserDetail";

export default defineComponent({
  components: {
    TUserDetail,
  },
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadUserDetail(this.username);
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOAD_USER_DETAIL]),
  },
  computed: {
    ...mapGetters(modules.USERS, [getters.USER_DETAIL]),
  },
});
</script>
