import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import apiClient from './axios';

import './styles/main.scss';

const app = createApp(App);
app.config.globalProperties.axios = apiClient;

// 애플리케이션을 구성하는 모든 컴포넌트는 today를 inject하여 사용할 수 있다.
app.provide('today', new Date().toISOString().split('T')[0]);
// app.provide('axios', apiClient);

app.use(createPinia());
app.use(router);
app.mount('#app');

/**
 * 1. provide/inject
 */
