<script lang="ts">
import { useMessage } from 'naive-ui';
import { defineComponent } from 'vue';

// content
export default defineComponent({
  setup() {
    window.$message = useMessage();
  },
});
</script>

<template>
  <n-layout has-sider style="height: 100%">
    <n-layout-sider inverted>
      <Menus />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>
        <Navigation />
      </n-layout-header>
      <n-layout-content>
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>
