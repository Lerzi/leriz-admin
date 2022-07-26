<script setup lang="ts">
useHead({
  title: 'Lerzi-Admin',
});
</script>

<template>
  <n-message-provider>
    <n-loading-bar-provider>
      <RouterView />
    </n-loading-bar-provider>
  </n-message-provider>
</template>

<style scoped></style>
