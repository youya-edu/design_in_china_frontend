<template>
  <div class="ml-6 flex items-center space-x-3">
    <AIconShoppingBag />
    <AIconStar />
    <AIconBell />
    <OAccountMenu
      id="user-menu"
      :username="user.username"
      :show="showUserMenu"
      @click="showUserMenu = !showUserMenu"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { userActions, userGetters } from "@/store/user/constants";
import { AIconShoppingBag, AIconStar, AIconBell } from "@/components/atoms";
import { OAccountMenu } from "@/components/organisms";

export default defineComponent({
  components: { AIconStar, AIconShoppingBag, AIconBell, OAccountMenu },
  data() {
    return {
      showUserMenu: false,
    };
  },
  methods: {
    ...mapActions(modules.USERS, [userActions.LOGOUT]),
    closeUserMenu(e: Event) {
      const tgt = e.target;
      if (this.$el !== tgt && !this.$el.contains(tgt)) {
        this.showUserMenu = false;
      }
    },
  },
  computed: {
    ...mapGetters(modules.USERS, {
      user: userGetters.CURRENT_LOGIN_USER,
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
