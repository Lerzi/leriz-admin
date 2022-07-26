<script setup lang="ts">
import { h } from 'vue';
import { RouterLink, RouteRecordRaw } from 'vue-router';
const router: readonly RouteRecordRaw[] = useRouter().options.routes;
console.log('router :>> ', router);
const menuOptions = ref<any[]>([]);
menuOptions.value = getMenus(router);
console.log('menuOptions.value :>> ', menuOptions.value);

function getMenus(r: readonly RouteRecordRaw[] | undefined) {
  let menus: Array<Object> = [];
  r?.forEach(item => {
    console.log('item.meta.title :>> ', item.meta?.title);
    if (!item.meta?.hidden) {
      if (
        item.hasOwnProperty('children') &&
        item?.children &&
        item?.children?.length > 1
      ) {
        let url = item.path;
        let { path } = item.children[0];
        url = `${url == '/' ? '' : url}/${path}`;
        menus.push({
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: url,
                },
              },
              { default: () => item.meta?.title }
            ),
          key: item.name || item.path,
          children: getMenus(item.children),
        });
      } else {
        let title = item.meta?.title;
        let url = item.path;
        if (item.children !== undefined) {
          let { meta, path } = item.children[0];
          title = meta?.title;
          url = `${url == '/' ? '' : url}/${path}`;
        }
        menus.push({
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: url,
                },
              },
              { default: () => title }
            ),
          key: item.name || item.path,
        });
      }
    }
  });
  return menus;
}
</script>
<template>
  <n-menu :options="menuOptions" accordion inverted />
</template>
