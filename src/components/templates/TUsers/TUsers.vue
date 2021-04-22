<template>
  <div class="user-gallery">
    <div class="users">
      <div v-for="user in users" :key="user.id">
        <figure>
          <router-link
            :to="{
              name: 'UserDetail',
              params: { username: user.username },
            }"
          >
            <img :src="loadAvatar(user.avatar)" :alt="user.username" />
          </router-link>
        </figure>
        <router-link
          :to="{ name: 'UserDetail', params: { username: user.username } }"
        >
          <h2>{{ user.username }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/store/types";

export default defineComponent({
  name: "Users",
  props: {
    users: { type: Object as PropType<User>, required: true },
  },
  methods: {
    // TODO template不应该包含逻辑
    loadAvatar(path: string) {
      return path && require(`@/assets/avatar/${path}`);
    },
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
