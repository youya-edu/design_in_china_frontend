<template>
  <div>
    <h1 class="text-3xl">找不到页面</h1>
    <p>
      请尝试返回
      <router-link :to="{ name: 'Home' }" class="font-black">
        主页
      </router-link>
    </p>
  </div>
</template>
