<template>
  <div class="flex">
    <div class="ml-4 flex items-center md:ml-6">
      <OAccountMenu
        id="user-menu"
        :username="user.username"
        :show="showUserMenu"
        @click="showUserMenu = !showUserMenu"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";
import { OAccountMenu } from "@/components/organisms";

export default defineComponent({
  components: { OAccountMenu },
  data() {
    return {
      showUserMenu: false,
    };
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOGOUT]),
    closeUserMenu(e: Event) {
      const tgt = e.target;
      if (this.$el !== tgt && !this.$el.contains(tgt)) {
        this.showUserMenu = false;
      }
    },
  },
  computed: {
    ...mapGetters(modules.USERS, {
      user: getters.CURRENT_LOGIN_USER,
    }),
  },
  mounted() {
    document.addEventListener("click", this.closeUserMenu);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeUserMenu);
  },
});
</script>
