<template>
  <div class="flex">
    <div class="ml-4 flex items-center md:ml-6">
      <button
        class="image-cropper bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        @click="logout"
      >
        <img class="profile-pic" :src="loadAvatar(user.avatar)" alt="avatar" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  methods: {
    loadAvatar(path: string) {
      return path && require(`@/assets/avatar/${path}`);
    },
    ...mapActions("users", ["logout"]),
  },
  computed: {
    ...mapGetters("users", {
      user: "currentLoginUser",
    }),
  },
});
</script>

<style lang="scss" scoped>
.image-cropper {
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.profile-pic {
  display: inline;
  margin: -25% auto 0;
  height: auto;
  width: 100%;
}
</style>
