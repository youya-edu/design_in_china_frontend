<template>
  <div class="w-3/6 m-auto">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">用户信息</h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="items-center bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-items-center"
          >
            <dt class="text-sm font-medium text-gray-500">头像</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <img class="w-60" :src="user.avatar" alt="user.username" />
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">用户名</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.username }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">邮箱</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.email }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">说明</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ user.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      axios.defaults.baseURL = "http://localhost:8080";
      const self = this;
      axios
        .get("/users/" + self.userId)
        .then((response) => {
          console.log(response);
          self.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
