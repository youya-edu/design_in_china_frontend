<template>
  <div class="py-4 border-t border-gray-200">
    <nav class="relative z-0 inline-flex -space-x-px">
      <button
        class="inline-flex px-2 py-2 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none"
      >
        <AIconChevronLeft class="h-6 w-6" @click="goToPrevious" />
      </button>
      <button
        v-for="page in pages"
        :key="page.idx"
        class="px-4 py-2 text-lg focus:outline-none w-14 text-center"
        :class="[
          page.selected ? selectedPageClass : 'text-gray-800',
          page.disabled ? disabledPageClass : 'hover:bg-gray-100',
        ]"
        :disabled="page.disabled"
        @click="selectPage(page.pageContent)"
      >
        {{ page.pageContent }}
      </button>
      <button
        class="inline-flex px-2 py-2 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none"
      >
        <AIconChevronRight class="h-6 w-6" @click="goToNext" />
      </button>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AIconChevronLeft, AIconChevronRight } from "@/components";
import { Page } from "@/domain";
import { lodash } from "@/utils/lib";

export default defineComponent({
  components: {
    AIconChevronLeft,
    AIconChevronRight,
  },
  props: {
    totalSize: {
      type: Number,
      default: 400,
    },
    sizePerPage: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      selectedPage: 1,
      selectedPageClass:
        "text-white bg-gray-900 hover:text-white hover:bg-gray-700",
      disabledPageClass: "cursor-auto",
    };
  },
  methods: {
    selectPage(pageSelected: string) {
      this.selectedPage = parseInt(pageSelected);
      this.$emit("pageSelected", this.selectedPage);
    },
    goToPrevious() {
      this.selectedPage = Math.max(this.selectedPage - 1, 1);
    },
    goToNext() {
      this.selectedPage = Math.min(this.selectedPage + 1, this.lastPage);
    },
  },
  emits: ["pageSelected"],
  computed: {
    lastPage(): number {
      return Math.ceil(this.totalSize / this.sizePerPage);
    },
    pages(): Page[] {
      let ans: Page[];
      if (this.lastPage <= 8) {
        ans = lodash.range(1, this.lastPage + 1).map((pageNumber) => {
          return {
            idx: pageNumber,
            pageContent: pageNumber.toString(),
            selected: pageNumber === this.selectedPage,
            disabled: false,
          };
        });
      } else {
        if (this.selectedPage >= 6 && this.selectedPage <= this.lastPage - 5) {
          ans = [
            {
              idx: 1,
              pageContent: "1",
              selected: false,
              disabled: false,
            },
            {
              idx: 2,
              pageContent: "...",
              selected: false,
              disabled: true,
            },
            ...lodash
              .range(this.selectedPage - 1, this.selectedPage + 3)
              .map((pageNumber) => {
                return {
                  idx: pageNumber,
                  pageContent: pageNumber.toString(),
                  selected: pageNumber === this.selectedPage,
                  disabled: false,
                };
              }),
            {
              idx: this.lastPage - 1,
              pageContent: "...",
              selected: false,
              disabled: true,
            },
            {
              idx: this.lastPage,
              pageContent: this.lastPage.toString(),
              selected: false,
              disabled: false,
            },
          ];
        } else if (this.selectedPage < 6) {
          ans = [
            ...lodash.range(1, 7).map((pageNumber) => {
              return {
                idx: pageNumber,
                pageContent: pageNumber.toString(),
                selected: pageNumber === this.selectedPage,
                disabled: false,
              };
            }),
            {
              idx: 7,
              pageContent: "...",
              selected: false,
              disabled: true,
            },
            {
              idx: 8,
              pageContent: this.lastPage.toString(),
              selected: false,
              disabled: false,
            },
          ];
        } else {
          ans = [
            {
              idx: 1,
              pageContent: "1",
              selected: false,
              disabled: false,
            },
            {
              idx: 2,
              pageContent: "...",
              selected: false,
              disabled: true,
            },
            ...lodash
              .range(this.lastPage - 5, this.lastPage + 1)
              .map((pageNumber) => {
                return {
                  idx: pageNumber,
                  pageContent: pageNumber.toString(),
                  selected: pageNumber === this.selectedPage,
                  disabled: false,
                };
              }),
          ];
        }
      }
      return ans;
    },
  },
});
</script>
