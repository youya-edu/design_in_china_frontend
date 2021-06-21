<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div class="flex items-center justify-between h-24">
        <div class="w-1/4">
          <OSelectI18n class="w-1/3" />
        </div>
        <div class="text-5xl">DESIGN IN CHINA</div>
        <div class="w-1/4 flex justify-end">
          <GTheHeaderLoginBefore v-if="user === null" />
          <GTheHeaderLoginAfter v-else />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { GTheHeaderLoginBefore } from "../GTheHeaderLoginBefore";
import { GTheHeaderLoginAfter } from "../GTheHeaderLoginAfter";
import { OSelectI18n } from "@/components";
import { mapActions, mapGetters } from "vuex";
import { ModuleTypes, UserActions, UserGetters } from "@/store";

export default defineComponent({
  components: {
    GTheHeaderLoginBefore,
    GTheHeaderLoginAfter,
    OSelectI18n,
  },
  data() {
    return {
      linkClass:
        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium",
      linkActiveClass:
        "bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium",
    };
  },
  methods: {
    ...mapActions(ModuleTypes.USER, [UserActions.CHECK_USER_STATUS]),
  },
  computed: {
    ...mapGetters(ModuleTypes.USER, { user: UserGetters.CURRENT_LOGIN_USER }),
  },
  created() {
    this.checkUserStatus();
  },
});
</script>
