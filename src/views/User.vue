<template>
  <div class="user-gallery">
    <div class="users">
      <div v-for="user in users" :key="user.id">
        <figure>
          <router-link
            :to="{
              name: 'UserDetail',
              params: { userId: user.id },
            }"
          >
            <img :src="loadAvatar(user.avatar)" :alt="user.username" />
          </router-link>
        </figure>
        <router-link :to="{ name: 'UserDetail', params: { userId: user.id } }">
          <h2>{{ user.username }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { modules } from "@/store/constants";
import { actions, getters } from "@/store/user/constants";

export default defineComponent({
  name: "Users",
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadAvatar(path) {
      return path && require(`@/assets/avatar/${path}`);
    },
    ...mapActions(modules.USERS, [actions.LOAD_USERS]),
  },
  computed: {
    ...mapGetters(modules.USERS, [getters.USERS]),
  },
});
</script>

<style scoped>
.user-gallery {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 300px;
}

.users {
  display: flex;
  justify-content: space-evenly;
}
</style>
