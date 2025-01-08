import {
	defineStore
} from "pinia";
import {
	reactive,
	ref
} from 'vue'

export const useAuthStore = defineStore("auth", () => {

	// token
	const token = ref('');
	// 用户信息
	const userInfo = ref({});
	// 重置
	const result = () => {
		token.value = ''
		for (const key in userInfo) {
			if (userInfo.hasOwnProperty(key)) {
				delete userInfo[key];
			}
		}
	}

	return {
		token,
		userInfo,
		result
	};
}, {
	unistorage: true, // 开启后对 state 的数据读写都将持久化
}, );