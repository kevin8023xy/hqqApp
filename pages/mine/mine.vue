<template>
    <view class="userLayout pageBg">
		 <custom-nav-bar title="我的"></custom-nav-bar>
        <view class="userInfo">
            <view class="avatar">
                <image src="../../static/images/hqq-logo.jpg" mode="aspectFill"></image>
            </view>
            <view class="detail">
                <view class="detail-row flex">
                    <view class="label">{{ userInfo.name }}</view>
                    <view class="value"></view>
                </view>
                <view class="detail-row flex">
                    <view class="label">手机号:</view>
                    <view class="value">{{ userInfo.phone }}</view>
                </view>
                <view class="detail-row flex">
                    <view class="label">所在单位:</view>
                    <view class="value">{{ userInfo.location }}</view>
                </view>
            </view>
        </view>

        <view class="section">
            <view class="list">
                <view class="row" @click="goToClassList">
                    <view class="left">
                        <uni-icons type="download-filled" size="20"></uni-icons>
                        <view class="text">修改密码</view>
                    </view>
                    <view class="right">
                        <uni-icons type="right" size="15" color="#aaa"></uni-icons>
                    </view>
                </view>

                <view class="row">
                    <view class="left">
                        <uni-icons type="download-filled" size="20"></uni-icons>
                        <view class="text">修改资料</view>
                    </view>
                    <view class="right">
                        <uni-icons type="right" size="15" color="#aaa"></uni-icons>
                    </view>
                </view>

                <view class="row">
                    <view class="left">
                        <uni-icons type="download-filled" size="20"></uni-icons>
                        <view class="text">关于我们</view>
                    </view>
                    <view class="right">
                        <uni-icons type="right" size="15" color="#aaa"></uni-icons>
                    </view>
                </view>

                <view class="row">
                    <view class="left">
                        <uni-icons type="download-filled" size="20"></uni-icons>
                        <view class="text">版本信息</view>
                    </view>
                    <view class="right">
                        <uni-icons type="right" size="15" color="#aaa"></uni-icons>
                    </view>
                </view>

                <view class="row">
                    <view class="left">
                        <uni-icons type="download-filled" size="20"></uni-icons>
                        <view class="text">分享应用</view>
                    </view>
                    <view class="right">
                        <uni-icons type="right" size="15" color="#aaa"></uni-icons>
                    </view>
                </view>

                <view class="row">
                    <view class="left">
                        <uni-icons type="download-filled" size="20"></uni-icons>
                        <view class="text">我的客服</view>
                    </view>
                    <view class="right">
                        <uni-icons type="right" size="15" color="#aaa"></uni-icons>
                    </view>
                    <!-- #ifdef MP -->
                    <button open-type="contact">联系客服</button>
                    <!-- #endif -->
                    <!-- #ifndef MP -->
                    <button open-type="contact" @click="clickContact">拨打电话</button>
                    <!-- #endif -->
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';

const userInfo = ref({
    name: '管理员',
    phone: 1111111111,
    location: 'ys'
});
const clickContact = () => {
    console.log('测试电话');
    uni.makePhoneCall({
        phoneNumber: 114
    });
};

const goToClassList = () => {
    //在起始页面跳转到test.vue页面并传递参数
    uni.navigateTo({
        url: '/pages/classList/classList'
    });
};
</script>

<style lang="scss" scoped>
@import url('../../common/style/common-style.scss');

.userLayout {
    .userInfo {
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar {
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
            overflow: hidden;
            image {
                width: 100%;
                height: 100%;
            }
        }
        .ip {
            font-size: 44rpx;
            color: #333;
            padding: 20rpx 0 5rpxjnmn;
        }
        .address {
            font-size: 28rpx;
            color: #aaa;
        }
        .detail {
            .detail-row {
                width: 100%;
                height: 100%;
                .label {
                    width: 200rpx;
                    text-align: right;
                    padding-right: 15rpx;
                }
            }
        }
    }

    .section {
        width: 690rpx;
        margin: 50rpx auto;
        border: 1rpx solid #eee;
        border-radius: 10rpx;
        box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
        .list {
            :deep() {
                .uni-icons {
                    color: $brand-theme-color !important;
                }
            }
            .row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 30rpx;
                height: 100rpx;
                border-bottom: 1rpx solid #eee;
                position: relative;
                background: #fff;
                &:last-child {
                    border-bottom: 0;
                }
                .left {
                    display: flex;
                    align-items: center;
                    .text {
                        padding-left: 20rpx;
                    }
                }
                .right {
                    display: flex;
                    align-items: center;
                    .text {
                        font-size: 28rpx;
                        color: #aaa;
                    }
                }
                button {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100rpx;
                    width: 100%;
                    opacity: 0;
                }
            }
        }
    }
}
.userInfo {
}
</style>
