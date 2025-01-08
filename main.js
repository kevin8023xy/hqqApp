import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

import * as Pinia from "pinia";
import {
	createUnistorage
} from "pinia-plugin-unistorage";

export function createApp() {
	const app = createSSRApp(App)
	const store = Pinia.createPinia();
	// 关键代码 👇
	// store.use(createUnistorage());
	return {
		app,
		// Pinia, // 此处必须将 Pinia 返回
	}
}
createApp()
// #endif