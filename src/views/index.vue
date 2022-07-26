<script setup lang="ts">
import { getList } from '~/api/index';
const state = ref(123);
function initList() {
  getList()
    .then(res => {
      console.log('res :>> ', res);
    })
    .catch(err => {
      console.error(err);
    });
}
</script>
<template>
  <div>{{ state }}</div>
  <n-button @click="initList">click</n-button>
</template>
