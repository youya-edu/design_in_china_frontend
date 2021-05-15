<template>
  <div class="text-left">
    <div class="grid grid-cols-4 gap-4">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
      </div>
      <div class="mt-0 col-span-3 z-0">
        <div class="shadow rounded-md overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <MInputMessageLabel label="昵称" v-model="user.nickname" />
                <MTextareaMessageLabel
                  label="描述"
                  v-model="user.description"
                />
                <MAvatarButtonLabel :avatar="user.avatar" />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              @click="updateUser(user)"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  MInputMessageLabel,
  MTextareaMessageLabel,
  MAvatarButtonLabel,
} from "@/components/molecules";
import { mapActions } from "vuex";
import { ModuleTypes, UserActions } from "@/store";
import { getUser, User } from "@/domain";

export default defineComponent({
  components: { MInputMessageLabel, MTextareaMessageLabel, MAvatarButtonLabel },
  data() {
    return {
      user: {} as User,
    };
  },
  methods: {
    ...mapActions(ModuleTypes.USER, [UserActions.UPDATE_USER]),
  },
  mounted() {
    getUser().then((user) => {
      this.user = user;
    });
  },
});
</script>
