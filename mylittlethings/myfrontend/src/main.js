import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'

createApp(App).use(store).use(router).mount('#app').use(VueAgile)

