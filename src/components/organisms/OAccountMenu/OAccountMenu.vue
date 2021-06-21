<template>
  <div class="relative inline-block text-left">
    <AButtonCircle
      class="mt-1 transition duration-300 ease-in-out hover:opacity-70"
    >
      <img class="h-5 w-5 rounded-full" :src="avatar" alt="user avatar" />
    </AButtonCircle>
    <div
      class="z-40 origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
      tabindex="-1"
      v-show="show"
    >
      <div class="py-1">
        <router-link
          :to="{ name: 'DesignerProfile', params: { username: username } }"
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
import { AMenuItem, AButtonCircle } from "@/components";
import { mapActions } from "vuex";
import { ModuleTypes, UserActions } from "@/store";

export default defineComponent({
  components: { AMenuItem, AButtonCircle },
  props: {
    username: {
      type: String,
    },
    avatar: {
      type: String,
    },
    show: {
      type: Boolean,
    },
  },
  methods: {
    ...mapActions(ModuleTypes.USER, [UserActions.LOGOUT]),
  },
});
</script>
