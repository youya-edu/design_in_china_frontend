<template>
  <div class="relative inline-block text-left">
    <AButtonCircle>
      <img
        class="h-8 w-8 rounded-full"
        src="@/assets/avatar/steve-jobs.jpeg"
        alt="user avatar"
      />
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="white"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
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
