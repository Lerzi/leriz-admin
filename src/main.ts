import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import '~/style/index.scss';
import { createPinia } from 'pinia';
import router from '~/router';
import { createHead } from '@vueuse/head';
import './permission';
const app = createApp(App);
const Head = createHead();

app.use(Head);
app.use(router);
app.use(createPinia());

app.mount('#app');
