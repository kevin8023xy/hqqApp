<template>
    <view class="one-map wh100">
        <custom-nav-bar title="一张图"></custom-nav-bar>
        <view class="search-box">
            <view class="search-inner">
                <uni-easyinput prefixIcon="search" v-model="searchParam" placeholder="请输入站点名称或类别" style="width: 500rpx" @iconClick="iconClick"></uni-easyinput>
            </view>
            <button class="search-button flex align-center justify-center">搜索</button>
        </view>
        <!-- 可能要有的功能 -->
        <!--   <view class="seach-func-box">
            <view></view>
        </view> -->
        <!-- 地图框 -->
        <view class="map-box"></view>
        <!-- 站点管理 -->
        <view class="point-layer-box">
            <view class="point-item" v-for="item in pointArray" @click="openInfoPop">
                <image class="pic" :src="item.picUrl" mode="aspectFill"></image>
                <text>{{ item.name }}</text>
            </view>
        </view>
        <!-- 弹窗 -->
        <uni-popup ref="infoPopup" type="bottom"  background-color="#fff">
            <view class="infoPopup">
                <view class="popHeader">
                    <view></view>
                    <view class="title">站点详情</view>
                    <view class="close" @click="clickInfoClose">
                        <uni-icons type="closeempty" size="18" color="#999"></uni-icons>
                    </view>
                </view>
                <scroll-view scroll-y>
                    <view class="content">
                        <view class="row">
                            <view class="label">站点名称：</view>
                            <text user-select="true" class="value">{{ pointDetail.name }}</text>
                        </view>

                        <view class="row">
                            <view class="label">站点类型：</view>
                            <text user-select="true" class="value class">{{ pointDetail.type }}</text>
                        </view>

                        <view class="row">
                            <view class="label">时间：</view>
                            <text user-select="true" class="value">{{ pointDetail.time }}</text>
                        </view>

                        <view class="row">
                            <view class="label">状态：</view>
                           <text user-select="true" class="value">{{ pointDetail.status }}</text>
                        </view>

                        <view class="row">
                            <text class="label">经度：</text>
                            <view class="value">{{ pointDetail.lon }}</view>
                        </view>

                        <view class="row">
                            <text class="label">纬度：</text>
                            <view class="value">{{ pointDetail.lat }}</view>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </uni-popup>
    </view>
</template>

<script setup>
import { ref } from 'vue';
// 引入图片
import weatherPic from '../../common/images/weather-point.png';
const scorePopup = ref(null);
const searchParam = ref();

const pointArray = ref([
    {
        name: '气象',
        picUrl: weatherPic
    },
    {
        name: '墒情',
        picUrl: weatherPic
    },
    {
        name: '地表水情',
        picUrl: weatherPic
    },
    {
        name: '地下水情',
        picUrl: weatherPic
    },
    {
        name: '水闸',
        picUrl: weatherPic
    },
    {
        name: '机井',
        picUrl: weatherPic
    },
    {
        name: '泵站',
        picUrl: weatherPic
    },
    {
        name: '清空',
        picUrl: weatherPic
    }
]);
const pointDetail = ref({
	name: '王辛2泵站2号泵',
	type: '泵站',
	time: '2024/11/19 10:59:00',
	status: '异常',
	lon: 116.7183181,
	lat: 36.7231305
})
const infoPopup = ref(null);

const openInfoPop = () => {
    infoPopup.value.open();
};

const clickInfoClose = () => {
    infoPopup.value.close();
};
</script>

<style lang="scss">
@import url('../../common/style/common-style.scss');
.one-map {
	width: 100%;
	// height: 100vh;
	position: relative;
    display: flex;
    flex-direction: column;
    .search-box {
        width: 100%;
        height: 80rpx;
        border-radius: 60rpx;
        border: 1px solid #fff;
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
        .search-inner {
            flex: 1;
            :deep() {
                .uni-easyinput {
                    width: 100% !important;
                }
            }
        }
        .search-button {
            width: 20%;
            background: $button-color-1;
            color: #fff;
            font-size: 28rpx;
        }
    }

    .map-box {
        flex: 1;
        width: 100%;
        background: #999;
    }

    .point-layer-box {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10rpx;
        .point-item {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .pic {
                width: 80rpx;
                height: 80rpx;
            }
            text {
                font-size: 24rpx;
            }
        }
    }

    .infoPopup {
        background: #fff;
        padding: 30rpx;
        border-radius: 30rpx 30rpx 0 0;
        overflow: hidden;

        scroll-view {
            max-height: 60vh;
            .content {
                .row {
                    display: flex;
                    padding: 16rpx 0;
                    font-size: 32rpx;
                    line-height: 1.7em;
                    .label {
                        color: $text-font-color-3;
                        width: 180rpx;
                        text-align: right;
                        font-size: 30rpx;
                    }
                    .value {
                        flex: 1;
                        width: 0; // 防止label 被数字挤压成多行
                    }
                    .roteBox {
                        display: flex;
                        align-items: center;
                        .score {
                            font-size: 26rpx;
                            color: $text-font-color-3;
                            padding-left: 10rpx;
                        }
                    }
                    .tabs {
                        display: flex;
                        flex-wrap: wrap;
                        .tab {
                            border: 1px solid $brand-theme-color;
                            color: $brand-theme-color;
                            font-size: 22rpx;
                            padding: 10rpx 30rpx;
                            border-radius: 40rpx;
                            line-height: 1em;
                            margin: 0 10rpx 10rpx 0;
                        }
                    }
                    .class {
                        color: $brand-theme-color;
                    }
                }
                .copyright {
                    font-size: 28rpx;
                    padding: 20rpx;
                    background: #f6f6f6;
                    color: #666;
                    border-radius: 10rpx;
                    margin: 20rpx 0;
                    line-height: 1.6em;
                }
            }
        }
    }

    .popHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            color: $text-font-color-2;
            font-size: 26rpx;
        }
        .close {
            padding: 6rpx;
        }
    }
}
</style>

<style>
page {
    height: 100%;
    width: 100%;
}
</style>
