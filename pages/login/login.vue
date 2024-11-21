<template>
    <view class="normal-login-container">
        <!-- 标题 -->
        <view class="logo-content align-center flex">
            <image class="logo-pic" src="../../static/images/hqq-logo.jpg" mode="aspectFill"></image>
            <view class="text">
                <view class="title">{{ title }}</view>
                <view class="sub-title">--{{ subTitle }}</view>
            </view>
        </view>

        <!-- 登录主要模块 -->
        <view class="login-form-content">
            <view class="input-item flex align-center">
                <view class="iconfont icon-user icon">
                    <uni-icons type="contact" size="30" color="#486fbc"></uni-icons>
                </view>
                <input v-model="loginForm.username" class="input" type="text" placeholder="请输入账号" maxlength="30" />
            </view>
            <view class="input-item flex align-center">
                <view class="iconfont icon-password icon">
                    <uni-icons type="locked" size="30" color="#486fbc"></uni-icons>
                </view>
                <input v-model="loginForm.password" type="password" class="input" placeholder="请输入密码" maxlength="20" />
            </view>
            <view class="input-item flex align-center" style="width: 60%; margin: 0px" v-if="captchaEnabled">
                <view class="iconfont icon-code icon"></view>
                <input v-model="loginForm.code" type="number" class="input" placeholder="请输入验证码" maxlength="4" />
                <view class="login-code">
                    <image :src="codeUrl" @click="getCode" class="login-code-img"></image>
                </view>
            </view>
            <view class="action-btn">
                <button @click="handleLogin" class="login-btn">登录</button>
            </view>
            <view class="reg text-center" v-if="register">
                <text class="text-grey1">没有账号？</text>
                <text @click="handleUserRegister" class="text-blue">立即注册</text>
            </view>
            <view class="xieyi text-center">
                <!-- <text class="text-grey1">登录即代表同意</text>
                <text @click="handleUserAgrement" class="text-blue">《用户协议》</text>
                <text @click="handlePrivacy" class="text-blue">《隐私协议》</text> -->
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('红旗渠灌区移动办公');
const subTitle = ref('数字孪生系统');

const loginForm = ref({
    username: 'admin',
    password: 'admin123',
    code: '',
    uuid: ''
});
// 是否获取验证码
const captchaEnabled = ref(false);
// 是否注册
const register = ref(false);
//

// methods
// 获取图形验证码
const getCode = () => {
    // getCodeImg().then((res) => {
    //     res = res.data;
    //     // this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
    //     // if (this.captchaEnabled) {
    //     //     this.codeUrl = 'data:image/gif;base64,' + res.img;
    //     //     this.loginForm.uuid = res.uuid;
    //     // }
    // });
};

const handleLogin = () => {
    console.log('登录');
	uni.switchTab({
		url: '/pages/index/index'
	})
};

const handleUserRegister = () => {
    console.log('zc');
};
</script>

<style lang="scss">
@import url('@/common/style/common-style.scss');

.normal-login-container {
    width: 100%;
    height: 100vh;
	background-color: #0541aa;

    .logo-content {
        width: 100%;
        height: 20%;
        padding-top: 20%;
        position: relative;
        justify-content: space-between;

        image {
            border-radius: 15rpx;
            // left: 0 !important;
            width: 120rpx !important;
            height: 120rpx !important;
        }
        .logo-pic {
            position: absolute;
            left: 78rpx;
        }

        .text {
            position: absolute;
            left: 240rpx;
            height: 120rpx;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #fff;
        }
        .title {
            font-size: 52rpx;
            font-weight: 900;
        }
        .sub-title {
            font-size: 36rpx;
            font-weight: 400;
            text-align: right;
        }
    }

    .login-form-content {
        text-align: center;
        margin: 20px auto;
        color: #486fbc !important;
        // margin-top: 3%;
        width: 80%;

        .input-item {
            margin: 20px auto;
            background-color: #1a3e83;
            height: 45px;
            border: 3px solid #486fbc;
            // border-radius: 20px;

            .icon {
                font-size: 38rpx;
                margin-left: 10px;
                color: #999;
            }

            .input {
                width: 100%;
                font-size: 14px;
                line-height: 20px;
                text-align: left;
                padding-left: 15px;
            }
        }

        .action-btn {
            padding-top: 40rpx;
            width: 100%;
            height: 120rpx;
            .login-btn {
                color: #fff;
                font-weight: 600;
                letter-spacing: 20rpx;
                height: 90rpx;
                line-height: 90rpx;
                background: linear-gradient(to left, #0858ec, #0a9afd);
            }
        }

        .reg {
            margin-top: 15px;
        }

        .xieyi {
            color: #333;
            margin-top: 20px;
        }

        .login-code {
            height: 38px;
            float: right;

            .login-code-img {
                height: 38px;
                position: absolute;
                margin-left: 10px;
                width: 200rpx;
            }
        }
    }
}

.img-b {
    position: absolute;
    width: 50%;
    bottom: 0;
    left: -50rpx;
    z-index: 100;
}

.t-b {
    text-align: left;
    font-size: 29px;
    color: #000;
    padding: 60px 0 10px 0;
    font-weight: bold;
}
.t-b2 {
    text-align: left;
    font-size: 32rpx;
    color: #aaaaaa;
    padding: 0rpx 0 60rpx 0;
}
</style>
