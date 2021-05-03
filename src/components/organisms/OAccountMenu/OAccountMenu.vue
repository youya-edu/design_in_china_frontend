<template>
  <div class="relative inline-block text-left">
    <AButtonCircle class="transition duration-300 ease-in-out hover:opacity-70">
      <img
        class="h-8 w-8 rounded-full"
        src="@/assets/avatar/steve-jobs.jpeg"
        alt="user avatar"
      />
    </AButtonCircle>
    <div
      class="z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
      tabindex="-1"
      v-show="show"
    >
      <div class="py-1">
        <router-link
          :to="{ name: 'UserProfile', params: { username: username } }"
        >
          <AMenuItem> Your profile </AMenuItem>
        </router-link>
      </div>
      <div class="py-1">
        <router-link :to="{ name: 'Settings' }">
          <AMenuItem> Settings </AMenuItem>
        </router-link>
      </div>
      <div class="py-1">
        <AMenuItem @click="logout"> Sign out </AMenuItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AMenuItem, AButtonCircle } from "@/components/atoms";
import { mapActions } from "vuex";
import { modules } from "@/store/constants";
import { actions } from "@/store/user/constants";

export default defineComponent({
  components: { AMenuItem, AButtonCircle },
  props: {
    username: {
      type: String,
    },
    show: {
      type: Boolean,
    },
  },
  methods: {
    ...mapActions(modules.USERS, [actions.LOGOUT]),
  },
});
</script>
