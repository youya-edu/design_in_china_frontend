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
import { ref, defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "User",
  data() {
    return {
      users: [],
    };
  },
  setup() {
    const count = ref(0);
    return { count };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    loadUsers() {
      axios.defaults.baseURL = "http://localhost:8080";
      const self = this;
      axios
        .get("/users", {})
        .then((response) => {
          console.log(response);
          self.users = response.data["users"];
          console.log(self.users);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadAvatar(path) {
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
