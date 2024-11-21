<template>
    <view class="index-content">
        <custom-nav-bar title="首页"></custom-nav-bar>
        <!-- 功能快捷键 -->
        <view class="navi-container">
            <index-navi-item v-for="item in naviTitleList" :item="item" :key="item.name"></index-navi-item>
            <index-navi-item :isMore="true"></index-navi-item>
        </view>
        <!-- 日期选择栏 -->
        <view class="date-picker-box">
            <uni-card :is-shadow="false">
                <view class="">
                    <date-picker></date-picker>
                </view>
            </uni-card>
        </view>

        <!-- 天气信息 -->
        <view class="weather-card">
            <uni-card title="天气信息" :is-shadow="false">
                <view class="w100 h100 weather-content flex align-center">
                    <image src="../../static/images/tabBar/publish-h.png" mode="aspectFill"></image>
                    <text>今日 {{ weatherInfo.weather }}</text>
                    <text>气温 {{ weatherInfo.temperature }}℃,</text>
                    <text>雨量 {{ weatherInfo.rainfall }}mm</text>
                </view>
            </uni-card>
        </view>

        <!-- 事项安排 -->
        <view class="arrange-card">
            <uni-card title="事项安排" :is-shadow="false">
                <!-- 事项安排标题 -->
                <view class="arrange-title wh100 flex">
                    <view class="arrange-title-item flex align-center">
                        <text class="num">{{ arrange.remainNum }}</text>
                        <view class="title flex align-center">
                            <view class="icon"></view>
                            <text class="title-text">待办</text>
                        </view>
                    </view>

                    <view class="arrange-title-item flex align-center">
                        <text class="num">{{ arrange.completeNum }}</text>
                        <view class="title flex align-center">
                            <view class="icon"></view>
                            <text class="title-text">待办</text>
                        </view>
                    </view>
                </view>
                <!-- 事项安排列表 -->
                <view class="arrange-list">
                    <view class="arrange-list-item w100 flex align-center" v-for="item in arrange.list">
                        <view class="flex align-center">
                            <view class="icon"></view>
                            <text class="text">{{ item.name }}</text>
                            <text class="status-text">{{ item.statusText }}</text>
                        </view>
                        <view class="status flex justify-center align-center">处理</view>
                    </view>
                </view>
            </uni-card>
        </view>

        <!-- 重要通知 -->
        <view class="important-notice-card">
            <uni-card title="重要通知">
                <text v-if="ifImportantNotice"></text>
                <text v-else class="no-notice flex justify-center align-center">暂无通知</text>
            </uni-card>
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue';
// 导入图片
import oneMapIcon from '../../common/images/oneMap.png';
const naviTitleList = ref([
    {
        name: '一张图',
        picurl: oneMapIcon
    },
    {
        name: '水位观测',
        picurl: oneMapIcon
    },
    {
        name: '用水申请',
        picurl: oneMapIcon
    },
    {
        name: '工程巡检',
        picurl: oneMapIcon
    }
]);
const weatherInfo = ref({
    weather: '暴雨',
    temperature: 25,
    rainfall: 10
});
const arrange = ref({
    remainNum: 4,
    completeNum: 1,
    list: [
        {
            name: '水位观测',
            value: 'waterMonitor',
            status: 1,
            statusText: '待上报'
        },
        {
            name: '水位观测',
            value: 'waterUseApply',
            status: 1,
            statusText: '待上报'
        },
        {
            name: '用水申请',
            value: 'waterUseApply',
            status: 1,
            statusText: '待上报'
        },
        {
            name: '工程巡检',
            value: 'engineer',
            status: 1,
            statusText: '待上报'
        },
        {
            name: '维修养护',
            value: 'repair',
            status: 1,
            statusText: '已完成'
        }
    ]
});

// 通知
const ifImportantNotice = ref(false);
</script>

<style lang="scss" scoped>
@import url('@/common/style/common-style.scss');
page {
    height: 100%;
}
.index-content {
    width: 100%;
    height: 100%;
    padding: 25rpx 0 15rpx 0;
    background: $background-color-1;
    .navi-container {
        width: calc(100% - 10rpx);
        height: 12%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10rpx;
        // padding: 30rpx 10rpx 0;
    }
    .navi-container > last-child {
        margin-right: 10rpx;
    }

    .date-picker-box {
        margin: 15rpx 15rpx 0!important;
        // width: 100%;
        height: 130rpx;
    }

    .weather-card {
        margin: 15rpx 15rpx !important;
        .weather-content {
            image {
                width: 60rpx;
                height: 60rpx;
            }
        }
    }
    .arrange-card {
        margin: 0rpx 15rpx !important;

        .arrange-title {
            height: 100rpx;
            justify-content: space-around;
            .arrange-title-item {
                width: 120rpx;
                height: 100%;
                flex-direction: column;
                justify-content: space-around;
                .num {
                    font-size: 40rpx;
                    font-weight: 800;
                }
                .title {
                    .title-text {
                        padding-left: 10rpx;
                        font-size: 26rpx;
                    }
                }
            }
        }
        .arrange-list {
            height: calc(100% - 100rpx);
            .arrange-list-item {
                width: 88%;
                height: 70rpx;
                justify-content: space-between;
                margin: 0 auto;
                text {
                    padding-left: 10rpx;
                }
                .status-text {
                    padding-left: 15rpx;
                }
                .status {
                    width: 150rpx;
                    height: 50rpx;
                    background: #5dfff5;
                    border-radius: 10rpx;
                }
            }
        }
    }

    .important-notice-card {
        margin: 0rpx 15rpx !important;

        .no-notice {
            font-size: 40rpx;
            color: #dfdfdf !important;
            height: 120rpx;
        }
    }
}
.icon {
    border-radius: 50%;
    width: 32rpx;
    height: 32rpx;
    background-color: #55ff7f;
}

:deep() {
    .uni-card {
        padding: 0 15rpx !important ;
        margin: 0 0 !important;
        background: transparent !important;
    }
    .uni-card__header-content .uni-card__header-content-title {
        color: $text-font-color-5 !important;
    }
}

text {
    color: $text-font-color-5;
}
</style>
