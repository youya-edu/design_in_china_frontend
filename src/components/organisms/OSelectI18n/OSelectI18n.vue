<template>
  <div class="flex">
    <ASelect :options="availableLocales" @on-change="onChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import localforage from "localforage";
import { ASelect } from "@/components";
import { locales } from "@/i18n/locales";

export default defineComponent({
  components: {
    ASelect,
  },
  computed: {
    availableLocales() {
      const locale = this.$i18n.locale;
      return Object.entries(locales).map(([value, text]) => {
        return { value, text, selected: locale === value };
      });
    },
  },
  methods: {
    onChange(value: string) {
      localforage.setItem("locale", value);
      this.$i18n.locale = value;
      return value;
    },
  },
});
</script>
