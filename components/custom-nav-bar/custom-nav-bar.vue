<template>
    <view class="layout">
        <view class="navbar">
            <view class="statusBar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
            <view class="titleBar" :style="{ height: getTitleBarHeight() + 'px', marginLeft: getLeftIconLeft() + 'px' }">
                <view class="title">{{ title }}</view>
            </view>
        </view>

        <!-- 因为上面的nvaBar是固定的，悬浮在界面上，挡住了下面的元素，所以这里要把下面的撑下去 -->
        <view class="fill" :style="{ height: getNavBarHeight() + 'px' }"></view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
import { getStatusBarHeight, getTitleBarHeight, getNavBarHeight, getLeftIconLeft } from '@/utils/system.js';

defineProps({
    title: {
        type: String,
        default: ''
    }
});


</script>

<style lang="scss">
.layout {
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        background: linear-gradient(to bottom, transparent 0%, #fff 400rpx), linear-gradient(to right, #009aed 20%, #00d7ea);
        .statusBar {
        }
        .titleBar {
            display: flex;
            align-items: center;
			justify-content: center;
            padding: 0 30rpx;
            height: 100rpx;
            .title {
                font-size: 22px;
                font-weight: 700;
                color: $text-font-color-5;
            }
            .search {
                width: 220rpx;
                height: 56rpx;
                border-radius: 60rpx;
                background: rgba(255, 255, 255, 0.4);
                border: 1px solid #fff;
                margin-left: 30rpx;
                color: #999;
                font-size: 28rpx;
                display: flex;
                align-items: center;
                .icon {
                    margin-left: 5rpx;
                }
                .search-text {
                    padding-left: 10rpx;
                }
            }
        }
    }
    .fill {
    }
}
</style>