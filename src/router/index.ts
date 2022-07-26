import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '~/layout/index.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('~/views/login.vue'),
    meta: { hidden: true, title: '登录' },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('~/views/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },
  {
    path: '/test',
    component: Layout,
    meta: { title: '奇怪的东西' },
    children: [
      {
        path: 'index',
        component: () => import('~/views/test/index.vue'),
        meta: { title: '测试' },
      },
      {
        path: 'test',
        component: () => import('~/views/test/test.vue'),
        meta: { title: '测试2' },
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
