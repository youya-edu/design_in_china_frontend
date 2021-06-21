<template>
  <div class="mb-10 flex flex-col">
    <router-link
      :to="{ name: 'CompositionDetail', params: { id: composition.id } }"
    >
      <div class="mb-2">
        <img
          :src="composition.image"
          :alt="composition.description"
          class="cursor-pointer hover:opacity-40"
        />
      </div>
    </router-link>
    <div class="flex justify-between">
      <div>
        <router-link
          :to="{ name: 'CompositionDetail', params: { id: composition.id } }"
          class="hover:underline"
        >
          <div class="text-left">
            {{ composition.name }}
          </div>
        </router-link>
        <div class="text-left text-xs text-gray-400">
          {{ composition.description }}
        </div>
      </div>
      <div>RMB {{ composition.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Composition } from "@/domain";
export default defineComponent({
  props: {
    composition: {
      type: Object as PropType<Composition>,
    },
  },
});
</script>
