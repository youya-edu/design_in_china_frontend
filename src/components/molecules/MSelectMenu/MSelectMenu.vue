<template>
  <div>
    <label id="listbox-label" class="block text-sm font-medium text-gray-700">
      数量
    </label>
    <div class="mt-1 relative">
      <button
        @click="show = !show"
        type="button"
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none"
      >
        <span class="flex items-center">
          <span class="ml-3 block truncate"> {{ selectedQuantity }} </span>
        </span>
        <span
          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <AIconChevronDown />
        </span>
      </button>

      <ul
        v-show="show"
        class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        tabindex="-1"
      >
        <li
          class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
          v-for="(quantity, idx) in quantityList"
          :key="idx"
          @click="selectQuantity(quantity)"
        >
          <div class="flex items-center">
            <span class="font-normal ml-3 block truncate">
              {{ quantity }}
            </span>
          </div>

          <span
            class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
            v-show="selectedQuantity === quantity"
          >
            <AIconCheck />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AIconChevronDown, AIconCheck } from "@/components";

export default defineComponent({
  components: {
    AIconChevronDown,
    AIconCheck,
  },
  emits: ["quantity-changed"],
  data() {
    return {
      show: false,
      selectedQuantity: 1,
      quantityList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    selectQuantity(quantity: number) {
      this.selectedQuantity = quantity;
      this.show = false;
      this.$emit("quantity-changed", quantity);
    },
  },
});
</script>
