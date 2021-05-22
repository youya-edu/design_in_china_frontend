<template>
  <div class="ml-6 flex items-center space-x-3">
    <router-link :to="{ name: 'Cart' }">
      <AIconCart />
    </router-link>
    <AIconStar />
    <AIconBell />
    <OAccountMenu
      id="user-menu"
      :username="user.username"
      :avatar="user.avatar"
      :show="showUserMenu"
      @click="showUserMenu = !showUserMenu"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes, UserActions, UserGetters } from "@/store";
import { AIconCart, AIconStar, AIconBell, OAccountMenu } from "@/components";

export default defineComponent({
  components: { AIconCart, AIconStar, AIconBell, OAccountMenu },
  data() {
    return {
      showUserMenu: false,
    };
  },
  methods: {
    ...mapActions(ModuleTypes.USER, [UserActions.LOGOUT]),
    closeUserMenu(e: Event) {
      const tgt = e.target;
      if (this.$el !== tgt && !this.$el.contains(tgt)) {
        this.showUserMenu = false;
      }
    },
  },
  computed: {
    ...mapGetters(ModuleTypes.USER, {
      user: UserGetters.CURRENT_LOGIN_USER,
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
