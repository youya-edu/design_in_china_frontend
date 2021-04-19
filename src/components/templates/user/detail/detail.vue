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
              <img
                class="w-60"
                :src="loadAvatar(userDetail?.avatar)"
                :alt="userDetail?.username"
              />
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">用户名</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ userDetail?.username }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">邮箱</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ userDetail?.email }}
            </dd>
          </div>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">说明</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ userDetail?.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User } from "@/store/types";

export default defineComponent({
  props: {
    userDetail: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  methods: {
    // TODO template不应该包含逻辑
    loadAvatar(path: string) {
      return path && require(`@/assets/avatar/${path}`);
    },
  },
});
</script>
