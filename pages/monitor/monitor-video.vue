<template>
    <view class="monitor-video-box wh100">
        <view class="notice-box">
            <uni-notice-bar show-icon :text="noticeText" />
        </view>

        <view class="monitor-list">
            <view class="item" v-for="item in monitorList">
                <view class="title-box flex align-center">
                    <view class="left flex align-center">
                        <image src="../../common/images/camera.png"></image>
                        <text>{{ item.stationName }}</text>
                        <text class="status" :style="{ color: item.status === 1 ? '#55ff00' : '#ff5500' }">({{ item.status ? '正常' : '离线' }})</text>
                    </view>

                    <view class="right flex align-center justify-center">
                        <text>进入</text>
                        <uni-icons type="right" size="18" color="rgba(171, 171, 171, 0.9)"></uni-icons>
                    </view>
                </view>

                <view class="play" id="play"></view>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref, computed } from 'vue';
const monitorList = ref([
    {
        stationName: '站点名称1',
        playUrl: '',
        status: 1
    },
    {
        stationName: '站点名称2',
        playUrl: '',
        status: 0
    }
]);

const noticeText = computed(() => {
    const stationOfflineCount = monitorList.value.filter((item) => item.status !== 1).length;
    return '共' + monitorList.value.length + '处设备,当前运行异常' + stationOfflineCount + '处';
});
</script>

<style lang="scss" scoped>
@import url('../../common/style/common-style.scss');
.monitor-video-box {
    // background: $background-color-1;
    .notice-box {
        height: 80rpx;
    }

    .monitor-list {
        height: calc(100% - 80rpx);
        display: flex;
        flex-direction: column;
        .item {
            width: 100%;
            height: 400rpx;
            margin: 0 0 10rpx 0;
            position: relative;
            background: rgba(147, 147, 149, 0.8);
            border-radius: 20rpx;
            .title-box {
                width: 100%;
                height: 70rpx;
                position: absolute;
                justify-content: space-between;

                image {
                    width: 56rpx;
                    height: 56rpx;
                }
                text {
                    font-size: 26rpx;
                }
                .left {
                }
                .right {
                    width: 120rpx;
                    height: 80%;
                    border-radius: 60rpx;
                    background: rgba(38, 38, 38, 0.6);
                    text {
                        color: rgba(171, 171, 171, 0.9);
                    }
                }
            }
        }
    }
}
</style>
