<template>
  <div
    class="p-4 py-6 text-white bg-gray-700 flex-1 flex flex-col items-center justify-evenly"
  >
    <div class="my-3 text-4xl font-bold tracking-wider">
      <a href="/">{{ $t("design_in_china") }}</a>
    </div>
    <p class="mt-6 font-normal text-gray-300">{{ $t("description") }}</p>
    <slot name="switch"></slot>
    <p class="mt-6 text-sm text-gray-300">
      Read our <a href="#" class="underline">terms</a> and
      <a href="#" class="underline">conditions</a>
    </p>
  </div>
</template>
