<template>
  <nav id="nav">
    <p class="logo">Design in China</p>
    <ul class="nav-links">
      <li class="links" v-for="link in links" :key="link.id">
        <router-link :to="link.path">{{ link.content }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      links: [
        { id: 0, path: "/", content: "Home" },
        { id: 1, path: "/users", content: "设计师" },
        { id: 2, path: "/compositions", content: "作品" },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
#nav {
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo {
  font-size: 20px;
  color: #42b983;
  margin: 12px 60px 12px 24px;
}

.nav-links {
  display: flex;
  margin: 14px 60px 12px 24px;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}
</style>
