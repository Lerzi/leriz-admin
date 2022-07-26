import router from './router';

import { createDiscreteApi } from 'naive-ui';
const { loadingBar } = createDiscreteApi(['loadingBar']);

router.beforeEach((to, form) => {
  loadingBar.start();

  return true;
});

router.afterEach(() => {
  loadingBar.finish();
});
