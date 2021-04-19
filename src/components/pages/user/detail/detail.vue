<template>
  <t-user-detail :userDetail="userDetail" />
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";
import { tUserDetail } from "@/components/templates/user/detail";

export default defineComponent({
  components: {
    tUserDetail,
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.loadUserDetail(this.userId);
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOAD_USER_DETAIL]),
  },
  computed: {
    ...mapGetters(modules.USERS, [getters.USER_DETAIL]),
  },
});
</script>
