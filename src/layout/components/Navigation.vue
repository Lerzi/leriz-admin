<script setup lang="ts">
const route = useRoute();
const list = ref();

function getBreadcrumb() {
  console.log('list :>> ', list);
  // only show routes with meta.title
  let matched = route.matched.filter(item => item.meta && item.meta.title);

  list.value = matched.filter(
    item => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
}
watch(route, r => {
  if (r.path.startsWith('/redirect/')) {
    return;
  }
  getBreadcrumb();
});
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in list" :href="item.path">
      {{ item.meta.title }}</n-breadcrumb-item
    >
  </n-breadcrumb>
</template>
