import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth.js'

export const useUserStore = defineStore('user', () => {
  // token
  const token = ref(getToken() || '')
  // 用户信息
  const userInfo = reactive({
    name: '',
    avatar: '',
    roles: [],
    permissions: []
  })

  // 登录
  const loginAction = async (userInfo) => {
    const { username, password, code, uuid } = userInfo
    try {
      const res = await login(username.trim(), password, code, uuid)
      setToken(res.token)
      token.value = res.token
    } catch (error) {
      throw error
    }
  }

  // 获取用户信息
  const getInfoAction = async () => {
    try {
      const res = await getInfo()
      const user = res.user
      const avatar = user.avatar || require("@/assets/images/profile.jpg")
      userInfo.name = user.userName
      userInfo.avatar = avatar
      if (res.roles && res.roles.length > 0) {
        userInfo.roles = res.roles
        userInfo.permissions = res.permissions
      } else {
        userInfo.roles = ['ROLE_DEFAULT']
      }
    } catch (error) {
      throw error
    }
  }

  // 退出登录
  const logoutAction = async () => {
    try {
      await logout(token.value)
      token.value = ''
      userInfo.roles = []
      userInfo.permissions = []
      removeToken()
    } catch (error) {
      throw error
    }
  }

  // 前端登出
  const fedLogoutAction = () => {
    token.value = ''
    removeToken()
  }

  return {
    token,
    userInfo,
    loginAction,
    getInfoAction,
    logoutAction,
    fedLogoutAction
  }
},{
	unistorage: true, // 开启后对 state 的数据读写都将持久化
})
