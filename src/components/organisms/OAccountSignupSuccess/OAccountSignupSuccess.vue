<template>
  <div>
    <router-link :to="{ name: 'Login' }">
      <button
        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-700 shadow hover:bg-gray-800 focus:outline-none"
      >
        {{ $t("login") }}
      </button>
    </router-link>
  </div>
</template>
